import axiosClient from "./axiosClient";

class TypeApi {
  getAllType = async () => {
    const url = "/type";
    return axiosClient.get(url, {
      paramsSerializer: {
        indexes: false, // empty brackets like `arrayOfUserIds[]`
      },
    });
  };
}
const typeApi = new TypeApi();
export default typeApi;
