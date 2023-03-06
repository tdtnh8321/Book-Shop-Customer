import { useQuery, useMutation } from "react-query";
import orderApi from "../api/orderApi";
const fetchApiCreateOrder = async (data) => {
  try {
    console.log({ data });
    const res = await orderApi.createOrder(data);
    return res;
  } catch (error) {
    console.log("Failed to fetch createOrder ", error);
  }
};
const fetchapiGetListOrder = async (data) => {
  try {
    const res = await orderApi.getListOrder(data);
    return res;
  } catch (error) {
    console.log("fetchapiGetOrder: ", error);
  }
};
const fetchapiGetOrderDetail = async (id) => {
  try {
    const res = await orderApi.getOrderDetail(id);
    return res;
  } catch (error) {
    console.log("fetchapiGetOrderDetail: ", error);
  }
};
const fetchapiGetOrderInfo = async (id) => {
  try {
    const res = await orderApi.getOrderInfo(id);
    return res;
  } catch (error) {
    console.log("fetchapiGetOrderInfo: ", error);
  }
};
const fetchapiUpdateStatus = async (data) => {
  try {
    console.log({ data });
    const res = await orderApi.updateStatus(data);
    return res;
  } catch (error) {
    console.log("fetchapiUpdateStatus: ", error);
  }
};
class OrderQuery {
  createOrder = () => {
    return useMutation(["createOrder"], fetchApiCreateOrder, {
      onSuccess: () => {
        console.log("createOrder success");
      },
      onError: () => {
        console.log("createOrder error");
      },
    });
  };
  getListOrder = (data) => {
    //{iduser,status}

    return useQuery(
      ["getListOrder", data.status],
      () => fetchapiGetListOrder(data),
      {
        keepPreviousData: true,
        onSuccess: () => {
          console.log("getListOrder success");
        },
        onError: () => {
          console.log("getListOrder error");
        },
      }
    );
  };
  getOrderDetail = (id) => {
    return useQuery(["getOrderDetail", id], () => fetchapiGetOrderDetail(id), {
      onSuccess: () => {
        console.log("getOrderDetail success");
      },
      onError: () => {
        console.log("getOrderDetail error");
      },
    });
  };
  getOrderInfo = (id) => {
    return useQuery(["getOrderInfo", id], () => fetchapiGetOrderInfo(id), {
      onSuccess: () => {
        console.log("getOrderInfo success");
      },
      onError: () => {
        console.log("getOrderInfo error");
      },
    });
  };
  updateStatus = (data) => {
    return useMutation(["updateStatus"], fetchapiUpdateStatus, {
      onSuccess: () => {
        console.log("updateStatus success");
      },
      onError: () => {
        console.log("updateStatus error");
      },
    });
  };
}
export {
  fetchApiCreateOrder,
  fetchapiGetListOrder,
  fetchapiGetOrderDetail,
  fetchapiGetOrderInfo,
  fetchapiUpdateStatus,
};
const orderQuery = new OrderQuery();
export default orderQuery;
