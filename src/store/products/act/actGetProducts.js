import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const actGetProducts = createAsyncThunk(
  "products/actGetProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get("/products");
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
