import { Route, Routes } from "react-router-dom";

import SellingPage from "./pages/SellingPage";
import ListProduct from "./pages/ListProduct";
import ProductDetail from "./pages/ProductDetail";
function Book(props) {
  return (
    <Routes>
      <Route path="selling" element={<SellingPage />}></Route>
      <Route path="" element={<ListProduct />}></Route>
      <Route path=":slug" element={<ProductDetail />}></Route>
    </Routes>
  );
}

export default Book;
