import { useQuery } from "react-query";
import voucherApi from "../api/voucherApi";
const fetchApiAllVoucher = async () => {
  try {
    const res = await voucherApi.getAllVoucher();
    return res;
  } catch (error) {
    console.log("Failed to fetch ", error);
  }
};
class VoucherQuery {
  getAllVoucher = () => {
    return useQuery(["getAllVoucher"], fetchApiAllVoucher);
  };
}
export { fetchApiAllVoucher };
const voucherQuery = new VoucherQuery();
export default voucherQuery;
