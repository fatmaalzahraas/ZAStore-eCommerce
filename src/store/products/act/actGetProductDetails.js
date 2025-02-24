import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const actGetProductDetails = createAsyncThunk(
  "products/actGetProductDetails",
  async (productId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get(`products/${productId}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
