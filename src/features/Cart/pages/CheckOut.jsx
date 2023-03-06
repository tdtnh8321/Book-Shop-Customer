import { useDispatch, useSelector } from "react-redux";
import voucherQuery from "../../../queries/VoucherQuery";
import { useState } from "react";
import orderQuery from "../../../queries/OrderQuery";
import { useNavigate } from "react-router-dom";

import { clearCart } from "../cartSlice";
import { toast } from "react-hot-toast";

function CheckOut(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const userSlice = useSelector((state) => state.user);

  const { user } = userSlice;
  const listVoucherQuery = voucherQuery.getAllVoucher();

  const [voucher, setVoucher] = useState("");
  const [note, setNote] = useState("");
  const { mutate } = orderQuery.createOrder();
  const handleSubmit = () => {
    const create = async () => {
      const listItems = [];
      cart.items.map((item) => {
        const newItem = {
          idBook: item._id,
          amount: item.amount,
          price: item.price,
          total: item.total,
        };
        listItems.push(newItem);
      });
      const order = {
        idUser: user._id,
        idVoucher: voucher,
        total: cart.totalPrice,
        items: listItems,
        note: note,
      };
      console.log(order);
      await mutate(order);
      dispatch(clearCart());
      navigate("/");
      toast.success("Đặc hàng hoàng tất", { position: "top-right" });
    };
    create();
  };

  return (
    <div className="flex flex-col font-semibold mx-36 text-orange-400">
      <h3 className="py-10 text-xl uppercase text-orange-500 text-center">
        Checkout
      </h3>
      <div className="flex flex-row justify-between pb-10">
        <div className="basis-1/2 mx-1 px-5 items-start border-double border-4 border-orange-400 flex flex-col">
          <div className="w-full flex flex-row justify-between py-2">
            <span>Name</span>
            <p>{user.name}</p>
          </div>
          <div className="w-full flex flex-row justify-between py-2">
            <span>Phone</span>
            {user.phone}
          </div>
          <div className="w-full flex flex-row justify-between py-2">
            <span>Address</span>
            {user.address}
          </div>
          <div className="w-full flex flex-row justify-between py-2">
            <span>note</span>
            <input
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
        </div>
        <div className="basis-1/2 mx-1 px-5 border-double border-4 border-orange-400 flex flex-col">
          <div className="py-2">
            {cart.items.map((item, index) => (
              <div key={index} className="flex flex-row justify-between py-1">
                <div className="">{item.name}</div>
                <div className="">x{item.amount}</div>
                <div className="">{item.total}</div>
              </div>
            ))}
          </div>
          <hr className="mx-10 border-y-2 border-orange-500 " />
          <div className="flex flex-row justify-between py-2">
            <div className="">Sub total</div>
            <div className="">{cart.totalPrice}</div>
          </div>
          <div className="flex flex-row justify-between py-2">
            <div className="">Shipping</div>
            <div className="">Free</div>
          </div>
          <div className="flex flex-row justify-between py-2">
            <div className="">Total</div>
            <div className="">{cart.totalPrice}</div>
          </div>
          <div className="flex flex-row justify-between py-2">
            <div className="">Voucher</div>
            <select
              name=""
              id="idVoucher"
              value={voucher}
              onChange={(e) => setVoucher(e.target.value)}
            >
              <option value="null">null</option>
              {listVoucherQuery.data &&
                listVoucherQuery.data.map(
                  (voucher, index) =>
                    voucher.qty > 0 && (
                      <option key={index} value={`${voucher._id}`}>
                        {voucher.name}
                      </option>
                    )
                )}
            </select>
          </div>
          <div className="flex flex-row justify-center py-5">
            <button
              className="px-2 py-1 border-double border-4 border-orange-400 rounded-lg"
              onClick={handleSubmit}
            >
              Place order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
