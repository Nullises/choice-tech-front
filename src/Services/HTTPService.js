import axios from "axios";

const HTTPService = {
  getAll: async () => {
    try {
      const response = await axios.get(`http://localhost:3001/files/list`);
      return response;
    } catch (error) {
      throw new Error("error");
    }
  },

  getByFileName: async (fileName) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/files/data?fileName=${fileName}`
      );
      return response;
    } catch (error) {
      throw new Error("error");
    }
  },
};

export default HTTPService;
