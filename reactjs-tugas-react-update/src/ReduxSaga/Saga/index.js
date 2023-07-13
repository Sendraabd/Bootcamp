import { takeEvery, all } from "redux-saga/effects";
import * as ActionRegion from "../Constant/RegionConstant";
import { createRegion, handleRegion, deleteRegion } from "./RegionSaga";

function* watchAll() {
  yield all([
    takeEvery(ActionRegion.GET_REGION_REQUEST, handleRegion),
    takeEvery(ActionRegion.ADD_REGION_REQUEST, createRegion),
    takeEvery(ActionRegion.DELETE_REGION_REQUEST, deleteRegion),
  ]);
}

export default watchAll;
