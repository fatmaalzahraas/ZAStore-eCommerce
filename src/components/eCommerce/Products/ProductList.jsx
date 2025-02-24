import Product from "./Product";
import { ProductListWrapper } from "./Products.style";
const ProductList = ({ data }) => {
  return (
    <ProductListWrapper>
      {data?.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </ProductListWrapper>
  );
};

export default ProductList;
