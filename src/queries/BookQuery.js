import bookApi from "../api/bookApi";
import { useQuery } from "react-query";

const fetchApiAllBook = async (params) => {
  try {
    const res = await bookApi.getAllBook(params);
    return res;
  } catch (error) {
    console.log("Failed to fetch ", error);
  }
};
const fetchApiCountPages = async (params) => {
  try {
    const res = await bookApi.getCountPages(params);
    return res;
  } catch (error) {
    console.log("count pages ", error);
  }
};
const fetchApiDetailBook = async (slug) => {
  try {
    const res = await bookApi.getDetail(slug);
    return res;
  } catch (error) {
    console.log("Failed to fetch ", error);
  }
};
class BookQuery {
  getAllBook = (params) => {
    return useQuery(["getAllBook", params], () => fetchApiAllBook(params), {
      keepPreviousData: true,
    });
  };
  getCountPages = (params) => {
    return useQuery(
      ["getCountPages", params],
      () => fetchApiCountPages(params),
      { keepPreviousData: true }
    );
  };
  getBookDetail = (params) => {
    return useQuery(["getBookDetail", params], () =>
      fetchApiDetailBook(params)
    );
  };
}
const bookQuery = new BookQuery();
export default bookQuery;
