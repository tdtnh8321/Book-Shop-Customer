import typeApi from "../api/typeApi";
import { useQuery } from "react-query";
const fetchApiAllType = async () => {
  try {
    const res = await typeApi.getAllType();
    return res;
  } catch (error) {
    console.log("Failed to fetch ", error);
  }
};

class TypeQuery {
  getAllType = () => {
    return useQuery("getAllType", fetchApiAllType);
  };
}
const typeQuery = new TypeQuery();
export default typeQuery;
