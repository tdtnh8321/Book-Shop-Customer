import axiosClient from "./axiosClient";

class TokenApi {
  getToken = async () => {
    const url = "/user/refresh_token";
    return axiosClient.get(url, {
      paramsSerializer: {
        indexes: false,
      },
    });
  };
}
const tokenApi = new TokenApi();
export default tokenApi;
