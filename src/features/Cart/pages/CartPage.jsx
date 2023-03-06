import { useSelector } from "react-redux";

import CartList from "../components/CartList";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function CartPage() {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (user.isLogged === true) {
      navigate("/cart/checkout");
    } else {
      navigate("/user/login");
      toast.error("Bạn phải đăng nhập để tiến hành thanh toán", {
        position: "top-right",
      });
    }
  };
  return (
    <div className="mx-10 flex flex-col items-center">
      <h3 className="py-10 text-xl uppercase  font-semibold text-orange-500">
        Danh sách sản phẩm
      </h3>
      <table className="w-full border-b border-gray-200">
        <thead>
          <tr className="text-sm font-medium text-gray-700 border-b border-gray-200">
            <th className="py-4 px-4 text-center">No</th>
            <th className="py-4 px-4 text-center">Sản phẩm</th>
            <th className="py-4 px-4 text-center">Đơn giá</th>
            <th className="py-4 px-4 text-center">Số lượng</th>
            <th className="py-4 px-4 text-center">Số tiền</th>
            <th className="py-4 px-4 text-center">
              <div className="w-full flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                  />
                </svg>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {cart.items.length > 0 ? (
            <CartList data={cart.items} />
          ) : (
            <tr>
              <th colSpan={6}>
                <div className="w-full flex flex-row justify-center items-center">
                  <p className="py-10 text-center">Giỏ hàng rỗng</p>
                </div>
              </th>
            </tr>
          )}
        </tbody>
        {cart.items.length > 0 && (
          <tfoot>
            <tr>
              <th colSpan={4}>Tổng tiền: </th>
              <th colSpan={2}>{cart.totalPrice || 0}</th>
            </tr>
            <tr>
              <th colSpan={7}>
                <button
                  className="px-2 py-1 rounded-lg bg-blue-500 text-white "
                  onClick={handleSubmit}
                >
                  Thanh toán
                </button>
              </th>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
}

export default CartPage;
