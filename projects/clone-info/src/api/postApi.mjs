import axiosClient from "./axiosClient.mjs";
export const postApi = {
  getAll: (params) => {
    const url = "/pages/all";
    return axiosClient.get(url, { params });
  }
};
