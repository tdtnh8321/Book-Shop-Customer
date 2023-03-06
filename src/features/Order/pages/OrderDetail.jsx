import { useParams } from "react-router-dom";
import orderQuery from "../../../queries/OrderQuery";

function OrderDetail(props) {
  const { id } = useParams();
  const listOrderDetail = orderQuery.getOrderDetail(id).data;
  const orderInfo = orderQuery.getOrderInfo(id).data;
  return (
    <div className="flex flex-col mx-10 font-semibold">
      <h3 className="py-10 text-xl uppercase text-orange-500 text-center">
        Chi tiết đơn hàng
      </h3>
      <div className="flex flex-row justify-between pb-10">
        <div className="basis-1/3 mr-5 flex- flex-col border-dotted border-2 border-red-300">
          {orderInfo && (
            <>
              <div className="">User: {orderInfo.idUser.name}</div>
              <div className="">Date: {orderInfo.date}</div>
              <div className="">Note: {orderInfo.note}</div>
            </>
          )}
        </div>
        <div className="basis-2/3 ml-5 flex flex-col">
          {orderInfo && (
            <>
              <div className="">Voucher: {orderInfo.idVoucher.name}</div>
              <div className="">Total: {orderInfo.total}</div>
            </>
          )}

          <table className="">
            <thead>
              <tr>
                <th>Tên sản phẩm</th>
                <th>Đơn giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
              </tr>
            </thead>
            <tbody>
              {listOrderDetail &&
                listOrderDetail.map((item, index) => (
                  <tr>
                    <th>{item.idBook.name}</th>
                    <th>{item.price}</th>
                    <th>{item.amount}</th>
                    <th>{item.total}</th>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;
