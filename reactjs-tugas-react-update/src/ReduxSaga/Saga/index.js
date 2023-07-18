import { takeEvery, all, take } from "redux-saga/effects";
import * as ActionRegion from "../Constant/RegionConstant";
import {
  createRegion,
  deleteRegion,
  handleRegion,
  updateRegion,
} from "./RegionSaga";
import * as ActionUser from "../Constant/UserConstant";
import { handleSignin, handleSignout, handleSignup } from "./UserSaga";

function* watchAll() {
  yield all([
    takeEvery(ActionRegion.GET_REGION_REQUEST, handleRegion),
    takeEvery(ActionRegion.ADD_REGION_REQUEST, createRegion),
    takeEvery(ActionRegion.DELETE_REGION_REQUEST, deleteRegion),
    takeEvery(ActionRegion.UPDATE_REGION_REQUEST, updateRegion),
    takeEvery(ActionUser.SIGNIN_REQ, handleSignin),
    takeEvery(ActionUser.SIGNUP_REQ, handleSignup),
    takeEvery(ActionUser.SIGNOUT_REQ, handleSignout),
  ]);
}

export default watchAll;
