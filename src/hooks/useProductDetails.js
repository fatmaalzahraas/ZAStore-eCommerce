import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  actGetProducts,
  actGetProductDetails,
  resetProductDetails,
} from "../store/products/productsSlice";
import toast from "react-hot-toast";
import { addToCart } from "../store/cart/cartSlice";
const useProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [tab, setTab] = useState("desc");
  const [rate, setRate] = useState(null);
  const userReviewName = useRef();
  const userReviewMsg = useRef();
  const { loading, error, productDetails, products } = useSelector(
    (state) => state.products
  );
  const {
    productName,
    imgUrl,
    description,
    price,
    avgRating,
    reviews,
    shortDesc,
    category,
  } = productDetails;
  const addToCartFn = () => {
    dispatch(addToCart({ id, productName, imgUrl, price }));
    toast.success("Item added to cart");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userNameReview = userReviewName.current.value;
    const userMsgReview = userReviewMsg.current.value;
    const obj = {
      userNameOfReview: userNameReview,
      userMsgOfReview: userMsgReview,
      startRate: rate,
    };
    console.log(obj);
    toast.success("Review Added Successfully");
    userReviewName.current.value = "";
    userReviewMsg.current.value = "";
  };

  const similarProducts = products.filter((el) => el.category === category);
  useEffect(() => {
    dispatch(actGetProducts());
  }, [dispatch]);
  useEffect(() => {
    if (id) {
      dispatch(actGetProductDetails(id));
    }
    return () => {
      dispatch(resetProductDetails());
    };
  }, [dispatch, id]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productDetails]);
  return {
    tab,
    loading,
    error,
    productName,
    productDetails,
    imgUrl,
    avgRating,
    price,
    category,
    shortDesc,
    addToCartFn,
    setTab,
    reviews,
    description,
    handleSubmit,
    userReviewName,
    setRate,
    userReviewMsg,
    similarProducts,
  };
};
export default useProductDetails;
