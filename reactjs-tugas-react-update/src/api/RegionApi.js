import axios from "axios";
import config from "../config/config";

const regionApi = {
  list: async () => {
    try {
      const result = await axios.get(`${config.domain}/regions`);
      return result.data;
    } catch (error) {
      return error.message;
    }
  },

  deleted: async (id) => {
    try {
      const result = await axios.delete(`${config.domain}/regions/${id}`);
      return result;
    } catch (error) {
      return error.message;
    }
  },

  create: async (payload) => {
    try {
      const result = await axios.post(`${config.domain}/regions`, payload);
      return result;
    } catch (error) {
      return error.message;
    }
  },

  updated: async (payload, id) => {
    try {
      const result = await axios.put(`${config.domain}/regions/${id}`, payload);
      return result;
    } catch (error) {
      return error.message;
    }
  },

  upload: async (payload) => {
    try {
      const result = await axios.post(
        `${config.domain}/regions/upload`,
        payload
      );
      return result;
    } catch (error) {
      return await error.message;
    }
  },
};
export default regionApi;
