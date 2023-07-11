import axios from "axios";
import config from "../config/config";

const regionApi = {
  list: async () => {
    try {
      const result = await axios.get(`${config.domain}/region`);
      return result.data;
    } catch (error) {
      return error.message;
    }
  },

  deleted: async (id) => {
    try {
      const result = await axios.delete(`${config.domain}/region/${id}`);
      return result;
    } catch (error) {
      return error.message;
    }
  },

  create: async (payload) => {
    try {
      const result = await axios.post(`${config.domain}/region`, payload);
      return result;
    } catch (error) {
      return error.message;
    }
  },

  updated: async (payload, id) => {
    try {
      const result = await axios.put(`${config.domain}/region/${id}`, payload);
      return result;
    } catch (error) {
      return error.message;
    }
  },
};

export default regionApi;
