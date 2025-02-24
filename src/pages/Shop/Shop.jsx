import { HelmetComponent, PageHeader } from "../../components/common";
import { ProductList } from "../../components/eCommerce";
import Loading from "../../components/feedback/Loading/Loading";
import useShop from "../../hooks/useShop";
import { MainContainer } from "../../styles/Global.styles";
import {
  FilterBox,
  FilterDataSection,
  FilterHeading,
  FilteringWrapper,
  Option,
  SearchFilter,
  SearchIcon,
  SearchInput,
  SelectBox,
  ShopSection,
} from "./Shop.style";

const Shop = () => {
  const {
    error,
    loading,
    productsData,
    searchValue,
    selectValue,
    setSearchValue,
    setSelectValue,
    products,
  } = useShop();
  return (
    <HelmetComponent title="Shop">
      <PageHeader title={"Products"} />
      <ShopSection>
        <MainContainer>
          <FilteringWrapper>
            <FilterBox>
              <SelectBox onChange={(e) => setSelectValue(e.target.value)}>
                <Option value="all">Filter Products By(All)</Option>
                <Option disabled>Filter By Category</Option>
                <Option value="mobile">Mobile</Option>
                <Option value="watch">Watch</Option>
                <Option value="wireless">Wireless</Option>
                <Option value="chair">Chair</Option>
                <Option value="sofa">Sofa</Option>
              </SelectBox>
            </FilterBox>
            <SearchFilter>
              <SearchInput onChange={(e) => setSearchValue(e.target.value)} />
              <SearchIcon />
            </SearchFilter>
          </FilteringWrapper>
        </MainContainer>
        <FilterDataSection>
          <MainContainer>
            <Loading loading={loading} error={error}>
              {searchValue === "" && selectValue === "all" ? (
                <ProductList data={products} />
              ) : productsData.length === 0 ? (
                <FilterHeading>No products are found!</FilterHeading>
              ) : (
                <ProductList data={productsData} />
              )}
            </Loading>
          </MainContainer>
        </FilterDataSection>
      </ShopSection>
    </HelmetComponent>
  );
};

export default Shop;
