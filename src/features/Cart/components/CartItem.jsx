import { addItem, subItem, deleteItem } from "../../Cart/cartSlice";
import { useDispatch } from "react-redux";

function CartItem(props) {
  const { index, item } = props;
  const dispatch = useDispatch();
  const handleIncrease = () => {
    const newItem = {
      ...item,
      amount: 1.0,
      total: item.price,
    };
    const action = addItem(newItem);
    dispatch(action);
  };
  const handleReduce = () => {
    const action = subItem(item._id);
    dispatch(action);
  };
  const handleDelete = () => {
    const action = deleteItem(item._id);
    dispatch(action);
  };
  return (
    <tr>
      <th className="text-center">{index}</th>

      <th className="flex gap-x-4 items-center py-4 pl-10 cursor-pointer">
        <img
          src={`${item.image}`}
          class="w-20 rounded-lg object-cover object-top border border-gray-200"
          alt="Image..."
        />
        <div className="flex flex-col">
          <p className="text-lg font-semibold text-gray-700">{item.name}</p>
        </div>
      </th>
      <th>{item.price}</th>
      <th className="text-center">
        <div className="flex flex-row justify-center items-center my-auto"></div>
        <button
          className="px-4 py-1 rounded-lg bg-blue-500 text-white"
          onClick={handleReduce}
        >
          -
        </button>
        <input type="number" value={item.amount} />
        <button
          className="px-4 py-1 rounded-lg bg-blue-500 text-white"
          onClick={handleIncrease}
        >
          +
        </button>
      </th>
      <th>{item.total}</th>
      <th>
        <button
          className="px-4 py-1 rounded-lg bg-red-500 text-white"
          onClick={handleDelete}
        >
          x
        </button>
      </th>
    </tr>
  );
}

export default CartItem;
