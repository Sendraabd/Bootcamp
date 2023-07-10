import axios from "axios";
import config from "../config/config";

const list = async () => {
  try {
    const result = await axios.get(`${config.domain}/region`);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};

const deleted = async (id) => {
  try {
    const result = await axios.delete(`${config.domain}/region/${id}`);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const create = async (payload) => {
  try {
    const result = await axios.post(`${config.domain}/region`, payload);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const updated = async (id, updatedData) => {
  try {
    const response = await axios.put(
      `${config.domain}/region/${id}`,
      updatedData
    );
    return response.data;
  } catch (error) {
    console.log("Error updating region data: ", error);
    throw error;
  }
};

export default { list, deleted, create, updated };
