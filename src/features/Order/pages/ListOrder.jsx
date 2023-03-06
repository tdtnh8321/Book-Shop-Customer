import { useState } from "react";
import orderQuery from "../../../queries/OrderQuery";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toast } from "react-hot-toast";
function ListOrder(props) {
  const [status, setStatus] = useState(1);
  const userSlice = useSelector((slice) => slice.user);

  const { data, isLoading } = orderQuery.getListOrder({
    iduser: userSlice.user._id,
    status: status,
  });
  const { mutateAsync } = orderQuery.updateStatus();
  const handleChangeStatus = async (update) => {
    console.log({ update });
    try {
      const res = await mutateAsync(update);
      toast.success(res.msg, { position: "top-right" });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col my-5">
      <h3 className="py-10 text-xl uppercase font-semibold text-orange-500 text-center">
        Lịch sử mua hàng
      </h3>
      <div className="flex flex-row justify-evenly pb-5">
        <button
          className="mx-5 px-2 py-1 rounded-lg bg-orange-400 text-white"
          onClick={() => setStatus(1)}
        >
          Đã đặt
        </button>
        <button
          className="mx-5 px-2 py-1 rounded-lg bg-orange-400 text-white"
          onClick={() => setStatus(2)}
        >
          Đã duyệt
        </button>
        <button
          className="mx-5 px-2 py-1 rounded-lg bg-orange-400 text-white"
          onClick={() => setStatus(3)}
        >
          Đang giao
        </button>
        <button
          className="mx-5 px-2 py-1 rounded-lg bg-orange-400 text-white"
          onClick={() => setStatus(4)}
        >
          Đã giao
        </button>
        <button
          className="mx-5 px-2 py-1 rounded-lg bg-orange-400 text-white"
          onClick={() => setStatus(0)}
        >
          Đã hủy
        </button>
      </div>
      <div className="">
        <table className="w-full border-b border-gray-200">
          <thead>
            <tr className="text-sm font-medium text-gray-700 border-b border-gray-200">
              <th className="py-4 px-4 text-center">No</th>
              <th className="py-4 px-4 text-center">ID Order</th>
              <th className="py-4 px-4 text-center">Date</th>
              <th className="py-4 px-4 text-center">Total</th>
              <th className="py-4 px-4 text-center">Detail</th>
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
          <tbody className="w-full">
            {data &&
              data.map((item, index) => (
                <tr key={index}>
                  <th className="text-center">{index}</th>
                  <th className="text-center">{item._id}</th>
                  <th className="text-center">{item.date}</th>
                  <th className="text-center">{item.total}</th>
                  <th className="">
                    <div className="flex flex-row justify-center">
                      <NavLink to={`/order/${item._id}`}>
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
                            d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </NavLink>
                    </div>
                  </th>
                  <th>
                    {item.status == 1 ? (
                      <button
                        className="bg-red-500 p-2 rounded-md text-white"
                        onClick={() =>
                          handleChangeStatus({ idOrder: item._id, status: 0 })
                        }
                      >
                        Hủy đơn
                      </button>
                    ) : (
                      ""
                    )}
                    {item.status == 2 ? (
                      <p className="text-blue-500">Đơn hàng đã được duyệt</p>
                    ) : (
                      ""
                    )}
                    {item.status == 3 ? (
                      <button
                        className="bg-red-500 p-2 rounded-md text-white"
                        onClick={() =>
                          handleChangeStatus({ idOrder: item._id, status: 4 })
                        }
                      >
                        Đã nhận hàng
                      </button>
                    ) : (
                      ""
                    )}
                    {item.status == 4 ? (
                      <p className="text-blue-500">
                        Đơn hàng đã giao thành công
                      </p>
                    ) : (
                      ""
                    )}
                    {item.status == 0 ? (
                      <p className="text-red-500">Đơn hàng đã hủy</p>
                    ) : (
                      ""
                    )}
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListOrder;
