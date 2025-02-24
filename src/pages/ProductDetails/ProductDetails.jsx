import { HelmetComponent, PageHeader } from "../../components/common";
import { MainContainer } from "../../styles/Global.styles";
import {
  AddToCartBtn,
  AvgRating,
  Description,
  Form,
  FormGroup,
  FormText,
  FullStarIcon,
  Input,
  LeftContainer,
  Li,
  NavTabsContent,
  NavTabsWrapper,
  NoProduct,
  ProductCategory,
  ProductDetailsImg,
  ProductDetailsInfo,
  ProductDetailsNavWrapper,
  ProductDetailsSection,
  ProductDetailsWrapper,
  ProductName,
  ProductPrice,
  ProductRating,
  RatingContainer,
  RatingIconsWrapper,
  ReviewName,
  ReviewsForm,
  ReviewSubmit,
  ReviewsWrapper,
  ReviewText,
  RightContainer,
  SimilarProducts,
  SimilarProductsTitle,
  Span,
  StarHalfIcon,
  StarIcon,
  StarSpan,
  TabTitle,
  TabWrapper,
  TextArea,
  Ul,
} from "./ProductDetails.style";
import Loading from "../../components/feedback/Loading/Loading";
import { motion } from "motion/react";
import ProductList from "../../components/eCommerce/Products/ProductList";
import useProductDetails from "../../hooks/useProductDetails";
import { useMemo } from "react";
const ProductDetails = () => {
  const {
    tab,
    productName,
    loading,
    error,
    productDetails,
    imgUrl,
    avgRating,
    price,
    category,
    shortDesc,
    addToCartFn,
    description,
    reviews,
    handleSubmit,
    setRate,
    setTab,
    similarProducts,
    userReviewMsg,
    userReviewName,
  } = useProductDetails();
  const ratingStars = useMemo(() => {
    return Array.from({ length: 5 }, (el, index) => {
      let number = index + 0.5;
      return (
        <StarSpan key={index}>
          {avgRating >= index + 1 ? (
            <FullStarIcon />
          ) : avgRating >= number ? (
            <StarHalfIcon />
          ) : (
            <StarIcon />
          )}
        </StarSpan>
      );
    });
  }, [avgRating]);
  return (
    <HelmetComponent title={productName || "Product Details"}>
      <PageHeader title={productName} />
      <ProductDetailsSection>
        <MainContainer>
          <Loading loading={loading} error={error}>
            {Object.keys(productDetails).length > 0 ? (
              <>
                <ProductDetailsWrapper>
                  <LeftContainer>
                    <ProductDetailsImg src={imgUrl} alt="Product Details Img" />
                  </LeftContainer>
                  <RightContainer>
                    <ProductDetailsInfo>
                      <ProductName>{productName}</ProductName>
                      <ProductRating>
                        <RatingIconsWrapper>{ratingStars}</RatingIconsWrapper>
                        <AvgRating>
                          (<RatingContainer>{avgRating || ""}</RatingContainer>{" "}
                          ratings)
                        </AvgRating>
                      </ProductRating>
                      <ProductPrice>${price}</ProductPrice>
                      <ProductCategory>Category: {category}</ProductCategory>
                      <Description>{shortDesc}</Description>
                      <AddToCartBtn
                        as={motion.button}
                        whileTap={{ scale: 1.2 }}
                        onClick={addToCartFn}
                      >
                        Add To Cart
                      </AddToCartBtn>
                    </ProductDetailsInfo>
                  </RightContainer>
                </ProductDetailsWrapper>
                <ProductDetailsNavWrapper>
                  <MainContainer>
                    <NavTabsWrapper>
                      <TabWrapper>
                        <TabTitle
                          className={`${tab === "desc" ? "active" : ""}`}
                          onClick={() => setTab("desc")}
                        >
                          Description
                        </TabTitle>
                        <TabTitle
                          className={`${tab === "rev" ? "active" : ""}`}
                          onClick={() => setTab("rev")}
                        >
                          Reviews ({reviews ? reviews.length : 0})
                        </TabTitle>
                      </TabWrapper>

                      {tab === "desc" ? (
                        <NavTabsContent>
                          <Description>{description}</Description>
                        </NavTabsContent>
                      ) : (
                        <NavTabsContent>
                          <ReviewsWrapper>
                            <Ul>
                              {reviews?.map((el, index) => (
                                <Li key={index}>
                                  <ReviewName>Jhon Deo</ReviewName>
                                  <RatingContainer>
                                    {el.rating} ( rating)
                                  </RatingContainer>
                                  <ReviewText>{el.text}</ReviewText>
                                </Li>
                              ))}
                            </Ul>
                            <ReviewsForm>
                              <FormText>Leave your experience</FormText>
                              <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                  <Input
                                    placeholder="Enter Name"
                                    ref={userReviewName}
                                    required
                                  />
                                </FormGroup>
                                <FormGroup>
                                  <Span
                                    onClick={() => setRate(1)}
                                    as={motion.span}
                                    whileTap={{ scale: 1.2 }}
                                  >
                                    1<FullStarIcon />
                                  </Span>
                                  <Span
                                    onClick={() => setRate(2)}
                                    as={motion.span}
                                    whileTap={{ scale: 1.2 }}
                                  >
                                    2<FullStarIcon />
                                  </Span>
                                  <Span
                                    onClick={() => setRate(3)}
                                    as={motion.span}
                                    whileTap={{ scale: 1.2 }}
                                  >
                                    3<FullStarIcon />
                                  </Span>
                                  <Span
                                    onClick={() => setRate(4)}
                                    as={motion.span}
                                    whileTap={{ scale: 1.2 }}
                                  >
                                    4<FullStarIcon />
                                  </Span>
                                  <Span
                                    onClick={() => setRate(5)}
                                    as={motion.span}
                                    whileTap={{ scale: 1.2 }}
                                  >
                                    5<FullStarIcon />
                                  </Span>
                                </FormGroup>
                                <FormGroup>
                                  <TextArea
                                    placeholder="Review Message..."
                                    ref={userReviewMsg}
                                    required
                                  />
                                </FormGroup>
                                <ReviewSubmit
                                  as={motion.button}
                                  whileTap={{ scale: 1.2 }}
                                >
                                  Submit
                                </ReviewSubmit>
                              </Form>
                            </ReviewsForm>
                          </ReviewsWrapper>
                        </NavTabsContent>
                      )}
                    </NavTabsWrapper>
                    <SimilarProducts>
                      <SimilarProductsTitle>
                        You might also like
                      </SimilarProductsTitle>
                      <ProductList data={similarProducts} />
                    </SimilarProducts>
                  </MainContainer>
                </ProductDetailsNavWrapper>
              </>
            ) : (
              <NoProduct>Sorry This Item Not Found</NoProduct>
            )}
          </Loading>
        </MainContainer>
      </ProductDetailsSection>
    </HelmetComponent>
  );
};

export default ProductDetails;
