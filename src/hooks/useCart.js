import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useCart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return { dispatch, cartItems };
};

export default useCart;
