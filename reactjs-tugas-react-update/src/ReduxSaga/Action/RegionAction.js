import * as ActionType from "../Constant/RegionConstant";

export const GetRegionRequest = () => ({
  type: ActionType.GET_REGION_REQUEST,
});

export const GetRegionSuccess = (payload) => ({
  type: ActionType.GET_REGION_SUCCESS,
  payload,
});

export const GetRegionFailed = (payload) => ({
  type: ActionType.GET_REGION_FAILED,
  payload,
});

export const AddRegionRequest = (payload) => ({
  type: ActionType.ADD_REGION_REQUEST,
  payload,
});

export const AddRegionSuccess = (payload) => ({
  type: ActionType.ADD_REGION_SUCCESS,
  payload,
});

export const AddRegionFailed = (payload) => ({
  type: ActionType.ADD_REGION_FAILED,
  payload,
});

export const deleteRegionRequest = (id) => ({
  type: ActionType.DELETE_REGION_REQUEST,
  id,
});

export const deleteRegionSuccess = (id) => ({
  type: ActionType.DELETE_REGION_SUCCESS,
  id,
});

export const deleteRegionFailed = (id) => ({
  type: ActionType.DELETE_REGION_FAILED,
  id,
});
