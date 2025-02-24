import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const cartItem = state.cartItems.find((el) => el.id === payload.id);
      if (!cartItem) {
        state.cartItems.push({ ...payload, quantity: 1 });
      } else {
        cartItem.quantity++;
      }
    },
    increaseItemQuantity: (state, { payload }) => {
      const cartItem = state.cartItems.find((el) => el.id === payload);
      if (cartItem) {
        cartItem.quantity += 1;
      }
    },
    decreaseItemQuantity: (state, { payload }) => {
      const cartItem = state.cartItems.find((el) => el.id === payload);
      if (cartItem && cartItem.quantity > 0) {
        cartItem.quantity -= 1;
      }
    },
    removeItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((el) => el.id !== payload);
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  removeItem,
} = cartSlice.actions;
