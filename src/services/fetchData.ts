import axios from "../axios";

export const fetchData = async (path: string, params?: { [param: string]: string }) => {
  try {
    const response = await axios.get(path, {
      params
    });
    return response.data;
  } catch (e) {
    console.error(e);
  }
};