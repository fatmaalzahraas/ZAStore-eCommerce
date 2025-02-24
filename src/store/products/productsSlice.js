import { createSlice } from "@reduxjs/toolkit";
import { actGetProducts } from "./act/actGetProducts";
import { actGetProductDetails } from "./act/actGetProductDetails";

const initialState = {
  products: [],
  productDetails: {},
  loading: false,
  error: null,
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    resetProductDetails: (state) => {
      state.productDetails = {};
    },
  },
  extraReducers: (builder) => {
    //products
    builder.addCase(actGetProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(actGetProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(actGetProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    //product details
    builder.addCase(actGetProductDetails.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(actGetProductDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.productDetails = action.payload;
    });
    builder.addCase(actGetProductDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
export default productsSlice.reducer;
export const { resetProductDetails } = productsSlice.actions;
export { actGetProducts, actGetProductDetails };
