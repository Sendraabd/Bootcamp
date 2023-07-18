import axios from "axios";
import config from "../config/config";

const UserApi = {
  signup: async (data) => {
    try {
      const result = await axios.post(`${config.domain}/user/signup`, data);
      return result;
    } catch (error) {
      return error;
    }
  },

  signin: async (data) => {
    try {
      const result = await axios.post(`${config.domain}/user/signin`, data);
      return result;
    } catch (error) {
      return error;
    }
  },

  profile: async () => {
    axios.defaults.headers.common = {
      Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
    };
    try {
      const result = await axios.get(`${config.domain}/user/profile`);
      return result;
    } catch (error) {
      return error;
    }
  },
};

export default UserApi;
