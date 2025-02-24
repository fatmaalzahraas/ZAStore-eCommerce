import { configureStore } from "@reduxjs/toolkit";
import products from './products/productsSlice'
import cart from './cart/cartSlice'
const store = configureStore({
    reducer: {
        products,
        cart
    }
   
})
export default store;