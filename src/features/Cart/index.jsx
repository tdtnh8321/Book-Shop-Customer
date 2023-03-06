import { Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import CheckOut from "./pages/CheckOut";
function Cart() {
  return (
    <Routes>
      <Route path="" element={<CartPage />}></Route>
      <Route path="checkout" element={<CheckOut />}></Route>
    </Routes>
  );
}

export default Cart;
