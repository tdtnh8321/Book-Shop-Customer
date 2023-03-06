import CartItem from "./CartItem";

function CartList(props) {
  const { data } = props;
  return (
    <>
      {data &&
        data.map((item, index) => (
          <CartItem key={index} index={index + 1} item={item} />
        ))}
    </>
  );
}

export default CartList;
