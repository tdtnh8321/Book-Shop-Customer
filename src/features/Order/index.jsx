import { Route, Routes } from "react-router-dom";
import ListOrder from "./pages/ListOrder";
import OrderDetail from "./pages/OrderDetail";
function Order(props) {
  return (
    <Routes>
      <Route path="" element={<ListOrder />}></Route>
      <Route path="/:id" element={<OrderDetail />}></Route>
    </Routes>
  );
}

export default Order;
