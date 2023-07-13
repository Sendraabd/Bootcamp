import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetRegionRequest,
  deleteRegionRequest,
} from "../ReduxSaga/Action/RegionAction";
import FormikSagaRegion from "./FormikSagaRegion";
export default function RegionSagaView() {
  const dispatch = useDispatch();
  const { regions } = useSelector((state) => state.regionState);
  const [display, setDisplay] = useState(false);
  const [refresh, setRefresh] = useState(false);

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
      ) : (
        <>
          <h2>List Regions</h2>
          <button onClick={() => setDisplay(true)}>Add Region</button>
          <table>
            <th>Region ID</th>
            <th>Region Name</th>
            <th>Action</th>
            <tbody>
              {regions &&
                regions.map((reg) => (
                  <tr key={reg.regionId}>
                    <td>{reg.regionId}</td>
                    <td>{reg.regionName}</td>
                    <td>
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
