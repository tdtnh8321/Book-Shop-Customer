import BookList from "../components/BookList";
import { useState } from "react";
import Pagination from "../../../custom-fields/Pagination";
import InputSearch from "../../../custom-fields/InputSearch";
import Filter from "../../../custom-fields/Filter";

import authorQuery from "../../../queries/AuthorQuery";
import typeQuery from "../../../queries/TypeQuery";
import bookQuery from "../../../queries/BookQuery";
function ListProduct(props) {
  const [params, setParams] = useState({
    page: 1,
    search: "",
    type: "",
    author: "",
    typeuser: "1",
  });
  const listAuthorQuery = authorQuery.getAllAuthor();
  const listTypeQuery = typeQuery.getAllType();
  const listBookQuery = bookQuery.getAllBook(params);
  const countPage = bookQuery.getCountPages(params);

  const handleChangePage = (num) => {
    setParams((prev) => {
      return { ...prev, page: num };
    });
  };
  const handleChangeSearch = (value) => {
    setParams((prev) => {
      return { ...prev, page: 1, search: value };
    });
  };
  const handleChangeType = (type) => {
    setParams((prev) => {
      return { ...prev, page: 1, type: type };
    });
  };
  const handleChangeAuthor = (author) => {
    setParams((prev) => {
      return { ...prev, page: 1, author };
    });
  };
  if (listBookQuery.isLoading) return <h1>.....Loading...</h1>;
  if (listBookQuery.isError) return <h1>...Error....</h1>;
  return (
    <div className="mx-10">
      <div className="text-center  font-semibold text-orange-500 flex flex-col items-center">
        <h3 className="py-10 text-xl uppercase">Danh sách sản phẩm</h3>
        <div className="flex flex-row items-center w-full">
          <div className="basis-1/3 pl-12">
            <InputSearch value={params.search} setValue={handleChangeSearch} />
            <Filter
              title="Lọc theo loại"
              listItems={listTypeQuery.data}
              checked={params.type}
              setChecked={handleChangeType}
            />
            <hr className="mx-10 1rem 1rem" />
            <Filter
              title="Lọc theo tác giả"
              listItems={listAuthorQuery.data}
              checked={params.author}
              setChecked={handleChangeAuthor}
            />
          </div>
          <div className="flex flex-col items-center basis-2/3 w-full">
            <BookList data={listBookQuery.data} />
            {countPage.data && (
              <Pagination
                numpages={countPage.data}
                currentpage={params.page}
                onClickChangePage={handleChangePage}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListProduct;
