import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import bookApi from "../../../api/bookApi";
import { useDispatch } from "react-redux";
import bookQuery from "../../../queries/BookQuery";
import { addItem } from "../../../features/Cart/cartSlice";
import { useState } from "react";
import { toast } from "react-hot-toast";
function ProductDetail(props) {
  const { slug } = useParams();
  const data = bookQuery.getBookDetail(slug).data;
  const [amount, setAmount] = useState(1);
  const hadleChangeAmount = (e) => {
    setAmount(e.target.value);
  };
  const dispatch = useDispatch();
  const handleSubmit = () => {
    const item = {
      _id: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      amount: amount * 1.0,
      total: data.price * 1.0 * amount * 1.0,
    };
    const action = addItem(item);
    dispatch(action);
    toast.success("Thêm sản phẩm vào giỏ hàng thành công", {
      position: "top-right",
    });
  };
  return (
    data && (
      <section class="w-11/2 md:4/5 h-screen m-auto flex flex-col items-center text-orange-800">
        <h3 className="py-10 text-xl uppercase font-semibold  text-orange-400">
          Chi tiết sản phẩm
        </h3>
        <div class="w-full flex flex-col md:flex-row md:justify-evenly md:space-x-10 items-center">
          <img id="image" class=" h-96" src={`${data.image}`} alt="" />

          <div class="space-y-5 p-5">
            <h4 class="text-xl font-semibold"></h4>
            <h1 class="text-3xl font-bold">{data.name}</h1>
            <h2 class="text-xl font-bold">{data.price}</h2>
            <p class="text-sm">Description</p>
            <p class="text-sm">{data.description}</p>
            <div class="space-y-5">
              <input
                class="w-24 h-8 px-3 border border-orange-400 outline-0"
                type="number"
                min="1"
                value={amount}
                onChange={hadleChangeAmount}
              />
            </div>
            <div class="flex items-center space-x-5">
              <button
                class="flex items-center space-x-2 border border-rose-400 px-5 py-2 rounded-md text-orange-400  hover:bg-white hover:border hover:border-gray-600"
                onClick={handleSubmit}
              >
                <i class="fa-solid fa-cart-shopping text-xl"></i>
                <span>Add To Cart</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  );
}

export default ProductDetail;
