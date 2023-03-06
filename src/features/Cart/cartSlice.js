import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    totalPrice: 0, //tổng tiền
    totalAmount: 0, //tổng số sp
    items: [], //danh sách sp{_id,đơn giá,số lượng,số tiền}
  },
  reducers: {
    addItem: (state, action) => {
      const oldItem = state.items.find((p) => p._id === action.payload._id);
      if (!oldItem) {
        state.items.push(action.payload);
        state.totalAmount += 1;
      } else {
        const oldIndex = state.items.findIndex(
          (p) => p._id === action.payload._id
        );
        state.items[oldIndex].amount += action.payload.amount * 1.0;
        state.items[oldIndex].total =
          state.items[oldIndex].amount * action.payload.price;
      }
      state.totalPrice += action.payload.total;
    },
    subItem: (state, action) => {
      const index = state.items.findIndex((p) => p._id === action.payload);
      if (state.items[index].amount > 1) {
        state.items[index].amount -= 1;
        state.items[index].total -= state.items[index].price;
        state.totalPrice -= state.items[index].price;
      } else {
        const deleItem = state.items[index];
        state.totalAmount -= 1;
        state.totalPrice -= deleItem.total;
        state.items.splice(index, 1);
      }
    },
    deleteItem: (state, action) => {
      const index = state.items.findIndex((p) => p._id === action.payload);
      const deleItem = state.items[index];
      state.totalAmount -= 1;
      state.totalPrice -= deleItem.total;
      state.items.splice(index, 1);
    },
    clearCart: (state, action) => {
      return {
        totalPrice: 0,
        totalAmount: 0,
        items: [],
      };
    },
  },
});
const { actions, reducer } = cartSlice;
export const { addItem, subItem, deleteItem, clearCart } = actions;
export default reducer;
