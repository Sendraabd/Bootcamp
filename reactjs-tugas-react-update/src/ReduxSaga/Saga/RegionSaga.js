import { call, put } from "redux-saga/effects";
import RegionApi from "../../api/RegionApi";
import {
  GetRegionSuccess,
  GetRegionFailed,
  AddRegionSuccess,
  AddRegionFailed,
  deleteRegionSuccess,
  deleteRegionFailed,
} from "../Action/RegionAction";

function* handleRegion() {
  try {
    const result = yield call(RegionApi.list);
    yield put(GetRegionSuccess(result));
  } catch (error) {
    yield put(GetRegionFailed(error));
  }
}
function* createRegion(action) {
  const { payload } = action;
  try {
    const result = yield call(RegionApi.upload, payload);
    yield put(AddRegionSuccess(result.data));
  } catch (error) {
    yield put(AddRegionFailed(error));
  }
}

function* deleteRegion(action) {
  const { id } = action;
  try {
    const result = yield call(RegionApi.deleted, id);
    yield put(deleteRegionSuccess(result.data));
  } catch (error) {
    yield put(deleteRegionFailed(error));
  }
}

export { handleRegion, createRegion, deleteRegion };