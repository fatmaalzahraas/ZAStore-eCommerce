import { HelmetComponent, PageHeader } from "../../components/common";
import useCart from "../../hooks/useCart";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeItem,
} from "../../store/cart/cartSlice";
import { MainContainer } from "../../styles/Global.styles";
import { getTotalPrice } from "../../utils/index";
import {
  CartSection,
  CartContent,
  LeftContainer,
  NoItems,
  Table,
  Thead,
  Tr,
  Th,
  RightContainer,
  Tbody,
  Td,
  CounterWrapper,
  CounterBtn,
  Quantity,
  Div,
  SubTotal,
  ShippingText,
  TotalPrice,
  BtnWrapper,
  BuyBtn,
  Link,
  ProductImg,
  DeleteBtn,
  FlexBox,
  ContinueShopping,
} from "./Cart.style";
const Cart = () => {
  const { dispatch, cartItems } = useCart();
  return (
    <HelmetComponent title={"Cart"}>
      <PageHeader title={"Shopping Cart"} />
      <CartSection>
        <MainContainer>
          {cartItems.length === 0 ? (
            <FlexBox>
              <NoItems>Your cart is empty</NoItems>

              <ContinueShopping>
                <Link to="/shop">Continue Shopping</Link>
              </ContinueShopping>
            </FlexBox>
          ) : (
            <CartContent>
              <LeftContainer>
                <Table>
                  <Thead>
                    <Tr>
                      <Th>Image</Th>
                      <Th>Title</Th>
                      <Th>Price</Th>
                      <Th>Qty</Th>
                      <Th>Delete</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {cartItems.map((item) => (
                      <Tr key={item.id}>
                        <Td>
                          <ProductImg src={item.imgUrl} alt="Product Img" />
                        </Td>
                        <Td>{item.productName}</Td>
                        <Td>${item.price}</Td>
                        <Td>
                          <CounterWrapper>
                            <CounterBtn
                              onClick={() =>
                                dispatch(increaseItemQuantity(item.id))
                              }
                            >
                              +
                            </CounterBtn>
                            <Quantity>{item.quantity}</Quantity>
                            <CounterBtn
                              onClick={() =>
                                dispatch(decreaseItemQuantity(item.id))
                              }
                            >
                              -
                            </CounterBtn>
                          </CounterWrapper>
                        </Td>
                        <Td>
                          <DeleteBtn
                            onClick={() => dispatch(removeItem(item.id))}
                          />
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </LeftContainer>
              <RightContainer>
                <Div>
                  <SubTotal>
                    SubTotal<TotalPrice>${getTotalPrice(cartItems)}</TotalPrice>
                  </SubTotal>
                  <ShippingText>
                    taxes and shipping will calculate in checkout
                  </ShippingText>
                  <BtnWrapper>
                    <BuyBtn>
                      <Link to="/checkout">Checkout</Link>
                    </BuyBtn>
                    <BuyBtn>
                      <Link to="/shop">Continue Shopping</Link>
                    </BuyBtn>
                  </BtnWrapper>
                </Div>
              </RightContainer>
            </CartContent>
          )}
        </MainContainer>
      </CartSection>
    </HelmetComponent>
  );
};

export default Cart;
