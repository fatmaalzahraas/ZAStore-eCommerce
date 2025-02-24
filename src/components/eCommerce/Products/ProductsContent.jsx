import { MainContainer } from "../../../styles/Global.styles";
import ProductList from "./ProductList";
import { ProductsCategorySection, ProductsHeading } from "./Products.style";
import Loading from "../../feedback/Loading/Loading";
import { useSelector } from "react-redux";
const ProductsContent = ({ filteredByCategory, title }) => {
  const { loading, error } = useSelector((state) => state.products);
  return (
    <ProductsCategorySection>
      <MainContainer>
        <ProductsHeading>{title}</ProductsHeading>
        <Loading loading={loading} error={error}>
          <ProductList data={filteredByCategory} />
        </Loading>
      </MainContainer>
    </ProductsCategorySection>
  );
};

export default ProductsContent;
