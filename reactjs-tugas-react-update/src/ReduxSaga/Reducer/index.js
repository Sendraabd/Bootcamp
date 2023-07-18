import { combineReducers } from "redux";
import RegionReducer from "./RegionReducer";
import userReducer from "./UserReeducer";

const rootReducer = combineReducers({
  regionState: RegionReducer,
  userState: userReducer,
});

export default rootReducer;
