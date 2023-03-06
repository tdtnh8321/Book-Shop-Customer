import axiosClient from "./axiosClient";
class AuthorApi {
  getAllAuthor = async () => {
    const url = "/author";
    return axiosClient.get(url, {
      paramsSerializer: {
        indexes: false, // empty brackets like `arrayOfUserIds[]`
      },
    });
  };
}
const authorApi = new AuthorApi();
export default authorApi;
