import axiosClient from "./axiosClient";
class VoucherApi {
  getAllVoucher = async () => {
    const url = "/voucher";
    return axiosClient.get(url, {
      paramsSerializer: {
        indexes: false,
      },
    });
  };
}
const voucherApi = new VoucherApi();
export default voucherApi;
