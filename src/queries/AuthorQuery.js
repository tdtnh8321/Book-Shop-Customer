import authorApi from "../api/authorApi";
import { useQuery } from "react-query";
const fetchApiAllAuthor = async () => {
  try {
    const res = await authorApi.getAllAuthor();
    return res;
  } catch (error) {
    console.log("Failed to fetch ", error);
  }
};

class AuthorQuery {
  getAllAuthor = () => {
    return useQuery("getAllAuthor", fetchApiAllAuthor);
  };
}
const authorQuery = new AuthorQuery();
export default authorQuery;
