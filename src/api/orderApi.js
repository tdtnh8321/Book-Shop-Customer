import axiosClient from "./axiosClient";
class OrderApi {
  createOrder = async (data) => {
    console.log({ data });
    const url = "/order/create";
    return axiosClient.post(url, data, {
      paramsSerializer: {
        indexes: false,
      },
    });
  };
  getListOrder = async (params) => {
    const url = "/order/get_order_of_user";
    return axiosClient.get(url, {
      params,
      paramsSerializer: {
        indexes: false, // empty brackets like `arrayOfUserIds[]`
      },
    });
  };
  getOrderDetail = async (id) => {
    const url = `/order/detail/${id}`;
    return axiosClient.get(url, {
      paramsSerializer: {
        indexes: false, // empty brackets like `arrayOfUserIds[]`
      },
    });
  };
  getOrderInfo = async (id) => {
    const url = `/order/${id}`;
    return axiosClient.get(url, {
      paramsSerializer: {
        indexes: false, // empty brackets like `arrayOfUserIds[]`
      },
    });
  };
  updateStatus = async (data) => {
    console.log({ data });
    const url = "/order/update";
    return axiosClient.put(url, data, {
      paramsSerializer: {
        indexes: false, // empty brackets like `arrayOfUserIds[]`
      },
    });
  };
}
const orderApi = new OrderApi();
export default orderApi;
