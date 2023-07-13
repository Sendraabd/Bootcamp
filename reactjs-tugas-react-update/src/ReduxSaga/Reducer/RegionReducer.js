import * as ActionType from "../Constant/RegionConstant";

const INIT_STATE = {
  regions: [],
};

const RegionReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_REGION_REQUEST:
      return { ...state };
    case ActionType.GET_REGION_SUCCESS:
      return GetRegionSuccessfully(state, action);
    case ActionType.ADD_REGION_REQUEST:
      return { ...state };
    case ActionType.ADD_REGION_SUCCESS:
      return AddRegionSuccessfully(state, action);
    case ActionType.DELETE_REGION_REQUEST:
      return { ...state };
    case ActionType.DELETE_REGION_SUCCES:
      return deleteRegionSuccessfully(state, action);
    default:
      return { ...state };
  }
};

const GetRegionSuccessfully = (state, action) => {
  return {
    ...state,
    regions: action.payload,
  };
};

const AddRegionSuccessfully = (state, action) => {
  return {
    ...state,
    regions: [...state.regions, action.payload],
  };
};

const deleteRegionSuccessfully = (state, action) => {
  const updatedRegions = state.regions.filter(
    (region) => region.id !== action.payload
  );
  return {
    ...state,
    regions: updatedRegions,
  };
};

export default RegionReducer;