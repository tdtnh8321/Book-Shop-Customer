import { useQuery } from "react-query";
import bookApi from "../../../api/bookApi";
import BookList from "../components/BookList";
function SellingPage() {
  const fetchApi = async () => {
    try {
      const res = await bookApi.getListSelling();
      return res;
    } catch (error) {
      console.log("Failed to fetch ", error);
    }
  };
  const { isError, isLoading, isFetching, data } = useQuery(
    "getListSelling",
    fetchApi
  );

  if (isLoading) return <h1>.....Loading...</h1>;
  if (isError) return <h1>...Error....</h1>;

  return (
    <div className="mx-10">
      <div className="text-center text-xl uppercase font-semibold text-orange-500">
        <h3 className="py-10 text-xl">Danh sách bán chạy</h3>
        <BookList data={data} />
      </div>
    </div>
  );
}

export default SellingPage;
