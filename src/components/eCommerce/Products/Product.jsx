import { motion } from "motion/react";
import {
  AddToCartIcon,
  IconContainer,
  ProductCategory,
  ProductImg,
  ProductImgWrapper,
  ProductInfo,
  ProductItem,
  ProductLink,
  ProductName,
  ProductPrice,
} from "./Products.style";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/cart/cartSlice";
import toast from "react-hot-toast";
const Product = ({ item }) => {
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(
      addToCart({
        id: item.id,
        productName: item.productName,
        imgUrl: item.imgUrl,
        price: item.price,
      })
    );
    toast.success("Item added to cart");
  };
  return (
    <ProductItem>
      <ProductImgWrapper>
        <ProductImg
          as={motion.img}
          whileHover={{ scale: 0.9 }}
          src={item.imgUrl}
          alt=""
        />
      </ProductImgWrapper>
      <ProductName>
        <ProductLink to={`/shop/${item.id}`}>{item.productName}</ProductLink>
      </ProductName>
      <ProductCategory>{item.category}</ProductCategory>
      <ProductInfo>
        <ProductPrice>${item.price}</ProductPrice>
        <IconContainer
          as={motion.span}
          whileTap={{ scale: 1.9 }}
          onClick={addToCartHandler}
        >
          <AddToCartIcon />
        </IconContainer>
      </ProductInfo>
    </ProductItem>
  );
};

export default Product;
