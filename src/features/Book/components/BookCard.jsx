import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { addItem } from "../../Cart/cartSlice";
import { toast } from "react-hot-toast";
function BookCard(props) {
  const { item } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAdd = (data) => {
    const item = {
      _id: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      amount: 1,
      total: data.price * 1.0,
    };
    dispatch(addItem(item));
    toast.success("Thêm sản phẩm vào giỏ hàng thành công", {
      position: "top-right",
    });
  };
  return (
    <div className="basis-1/3 flex flex-col justify-center items-center h-60 my-5 rounded-lg  relative">
      <div className="w-[80%] items-center min-h-full group">
        <img
          className="mx-auto w-auto h-60 rounded-lg "
          src={item.image}
          alt=""
        />
        <div className="bg-white text-orange-500 rounded-lg  opacity-0 m-auto absolute left-0 right-0 top-0 w-44 h-0 group-hover:opacity-100 group-hover:h-full group-hover:transition-all group-hover:ease-in-out group-hover:duration-500 ">
          <p className="uppercase px-5 py-10">{item.name}</p>
          <div className="w-full flex flex-row px-5 justify-between items-center">
            <p>${item.price}</p>
            <button
              className="px-2 py-1 rounded-lg bg-orange-400 text-white flex flex-row"
              onClick={() => handleAdd(item)}
            >
              +
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </button>
          </div>
          <button
            className="border-double border-4 border-orange-400 rounded-lg my-5"
            onClick={() => navigate(`/book/${item.slug}`)}
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
