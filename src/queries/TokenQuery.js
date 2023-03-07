import { useQuery } from "react-query";
import tokenApi from "../api/tokenApi";
import axios from "axios";
const fetchGetToken = async (refresh_token) => {
  try {
    const res = await tokenApi.getToken(refresh_token);
    console.log(res);
    return res;
  } catch (error) {
    console.log("Failed to fetch ", error);
  }
};

class TokenQuery {
  getToken = () => {
    return useQuery(["fetchGetToken"], () => fetchGetToken(), {
      onSuccess: () => {
        console.log("getToken success");
      },
      onError: () => {
        console.log("getToken error");
      },
    });
  };
}
const tokenQuery = new TokenQuery();
export { fetchGetToken };
export default tokenQuery;
