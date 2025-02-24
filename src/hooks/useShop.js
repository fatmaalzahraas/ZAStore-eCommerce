import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetProducts } from "../store/products/productsSlice";
const useShop = () => {
  const { products, loading, error } = useSelector((state) => state.products);
  const [productsData, setProductsData] = useState(products);
  const [searchValue, setSearchValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actGetProducts());
  }, [dispatch]);
  useEffect(() => {
    const applyFilters = () => {
      let filteredProducts = products;

      if (searchValue) {
        const regx = new RegExp(searchValue, "i");
        filteredProducts = filteredProducts.filter(
          (product) =>
            regx.test(product.productName) || regx.test(product.category)
        );
      }

      if (selectValue && selectValue !== "all") {
        filteredProducts = filteredProducts.filter(
          (product) => product.category === selectValue
        );
      }

      setProductsData(filteredProducts);
    };

    applyFilters();
  }, [products, searchValue, selectValue]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return {
    productsData,
    searchValue,
    selectValue,
    setSearchValue,
    setSelectValue,
    loading,
    error,
    products,
  };
};

export default useShop;
