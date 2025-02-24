import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetProducts } from "../store/products/productsSlice";

const useHome = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const filteredProducts = (category) => {
    return products.filter((product) => product.category === category);
  };
  useEffect(() => {
    dispatch(actGetProducts());
  }, [dispatch]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return { filteredProducts };
};

export default useHome;
