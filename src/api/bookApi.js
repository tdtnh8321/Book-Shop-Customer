import axiosClient from "./axiosClient";

class BookApi {
  getListSelling = async () => {
    const url = "/book/selling";
    return axiosClient.get(url, {
      paramsSerializer: {
        indexes: false,
      },
    });
  };
  getAllBook = async (params) => {
    const url = "/book";
    return axiosClient.get(url, {
      params,
      paramsSerializer: {
        indexes: false,
      },
    });
  };
  getCountPages = async (params) => {
    const url = "/book/countpages";
    return axiosClient.get(url, {
      params,
      paramsSerializer: {
        indexes: false, // empty brackets like `arrayOfUserIds[]`
      },
    });
  };
  getDetail = async (slug) => {
    const url = `/book/${slug}`;
    return axiosClient.get(url, {
      paramsSerializer: {
        indexes: false, // empty brackets like `arrayOfUserIds[]`
      },
    });
  };
}
const bookApi = new BookApi();
export default bookApi;
