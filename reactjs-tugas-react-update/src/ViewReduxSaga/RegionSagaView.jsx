import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetRegionRequest,
  deleteRegionRequest,
} from "../ReduxSaga/Action/RegionAction";
import FormikSagaRegion from "./FormikSagaRegion";
import EditSagaRegion from "./EditSagaRegions";
export default function RegionSagaView() {
  const dispatch = useDispatch();
  const { regions } = useSelector((state) => state.regionState);
  const [display, setDisplay] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState();
  const [val, setVal] = useState("");

  useEffect(() => {
    dispatch(GetRegionRequest());
  }, [dispatch, refresh]);

  const onDelete = (id) => {
    dispatch(deleteRegionRequest(id));
    window.alert("Data Successfully Deleted");
    setRefresh(true);
    setDisplay(false);
  };

  return (
    <div>
      {display ? (
        <FormikSagaRegion setDisplay={setDisplay} setRefresh={setRefresh} />
      ) : edit ? (
        <EditSagaRegion
          setEdit={setEdit}
          setRefresh={setRefresh}
          setVal={val}
          setId={id}
        />
      ) : (
        <>
          <h2>List Regions</h2>
          <button onClick={() => setDisplay(true)}>Add Region</button>
          <table>
            <thead>
              <tr>
                <th>Region ID</th>
                <th>Region Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {regions &&
                regions.map((reg) => (
                  <tr key={reg.regionId}>
                    <td>{reg.regionId}</td>
                    <td>{reg.regionName}</td>
                    <td>
                      <button
                        onClick={() => {
                          setEdit(true);
                          setVal(reg.regionName);
                          setId(reg.regionId);
                        }}
                      >
                        Edit
                      </button>
                      <button onClick={() => onDelete(reg.regionId)}>
                        Delete
                      </button>
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
