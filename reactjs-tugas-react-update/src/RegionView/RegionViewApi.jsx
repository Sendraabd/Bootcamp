import React, { useEffect, useState } from "react";
import RegionApi from "../api/RegionApi";
import RegionCreate from "./RegionCreate";

export default function RegionViewApi() {
  const [region, setRegion] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    fetchRegionData();
  }, [refresh]);

  const fetchRegionData = async () => {
    try {
      const data = await RegionApi.list();
      setRegion(data);
    } catch (error) {
      console.log("Error fetching region data: ", error);
    }
  };

  const onDelete = async (id) => {
    try {
      await RegionApi.deleted(id);
      window.alert("Data successfully deleted");
      setRefresh(!refresh);
    } catch (error) {
      console.log("Error deleting region data: ", error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      const regionToUpdate = region.find((reg) => reg.region_id === id);
      const updatedData = {
        region_id: regionToUpdate.region_id,
        region_name: regionToUpdate.region_name,
      };

      await RegionApi.updated(id, updatedData);

      // Refresh data setelah pembaruan
      await fetchRegionData();

      // Tampilkan notifikasi
      window.alert("Data successfully updated");
    } catch (error) {
      console.log("Error updating region data: ", error);
    }
  };

  const handleInputChange = (e, id, field) => {
    const updatedRegion = region.map((reg) => {
      if (reg.region_id === id) {
        return { ...reg, [field]: e.target.value };
      }
      return reg;
    });
    setRegion(updatedRegion);
  };

  // Fungsi untuk mengubah mode editing menjadi true
  const handleEdit = (id) => {
    const updatedRegion = region.map((reg) => {
      if (reg.region_id === id) {
        return { ...reg, editing: true };
      }
      return reg;
    });
    setRegion(updatedRegion);
  };

  // Fungsi untuk membatalkan perubahan data
  const handleCancel = (id) => {
    const updatedRegion = region.map((reg) => {
      if (reg.region_id === id) {
        return { ...reg, editing: false };
      }
      return reg;
    });
    setRegion(updatedRegion);
  };

  return (
    <div>
      {display ? (
        <RegionCreate setRefresh={setRefresh} setDisplay={setDisplay} />
      ) : (
        <>
          <h2>List Regions</h2>
          <button onClick={() => setDisplay(true)}>Add Regions</button>
          <table>
            <thead>
              <tr>
                <th>Region ID</th>
                <th>Region Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {region.map((reg) => (
                <tr key={reg.region_id}>
                  {/* Kolom input */}
                  <td>
                    <td>{reg.region_id}</td>
                  </td>
                  <td>
                    <input
                      type="text"
                      value={reg.region_name}
                      onChange={(e) =>
                        handleInputChange(e, reg.region_id, "region_name")
                      }
                    />
                  </td>

                  {/* Tombol */}
                  <td>
                    <button onClick={() => onDelete(reg.region_id)}>
                      Delete
                    </button>
                  </td>
                  <td>
                    {reg.editing ? (
                      <div>
                        <button onClick={() => handleUpdate(reg.region_id)}>
                          Save
                        </button>
                        <button onClick={() => handleCancel(reg.region_id)}>
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button onClick={() => handleEdit(reg.region_id)}>
                        Edit
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
