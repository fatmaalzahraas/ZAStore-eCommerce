import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const actGetCartProducts = createAsyncThunk(
  "cart/actGetCartProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState, fulfillWithValue } = thunkAPI;
    const { cart } = getState();
    const itemsId = Object.keys(cart.items);
    if (!itemsId.length) return fulfillWithValue([]);
    try {
      const concatenatedItemsId = itemsId.map((el) => `id=${el}`).join("&");
      const res = await axios.get(`/products?${concatenatedItemsId}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
