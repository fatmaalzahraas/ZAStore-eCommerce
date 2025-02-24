import { Form } from "react-router-dom";
import { HelmetComponent, PageHeader } from "../../components/common/index";
import { MainContainer } from "../../styles/Global.styles";
import {
  BillingTitle,
  CheckoutCart,
  CheckoutCartData,
  CheckoutContent,
  CheckoutSection,
  FormGroup,
  Input,
  LeftContainer,
  PlaceOrderBtn,
  RightContainer,
  Span,
} from "./Checkout.style";
import { useSelector } from "react-redux";
import { getQuantity, getTotalPrice } from "../../utils";
const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <HelmetComponent title={"Checkout"}>
      <PageHeader title={"Checkout"} />
      <CheckoutSection>
        <MainContainer>
          <CheckoutContent>
            <LeftContainer>
              <BillingTitle>Billing Address</BillingTitle>
              <Form>
                <FormGroup>
                  <Input type="text" placeholder="Enter your name" />
                </FormGroup>
                <FormGroup>
                  <Input type="email" placeholder="Enter your email" />
                </FormGroup>
                <FormGroup>
                  <Input type="number" placeholder="Phone number" />
                </FormGroup>
                <FormGroup>
                  <Input type="text" placeholder="Street address" />
                </FormGroup>
                <FormGroup>
                  <Input type="text" placeholder="City" />
                </FormGroup>
                <FormGroup>
                  <Input type="text" placeholder="Postal code" />
                </FormGroup>
                <FormGroup>
                  <Input type="text" placeholder="Country" />
                </FormGroup>
              </Form>
            </LeftContainer>
            <RightContainer>
              <CheckoutCart>
                <CheckoutCartData>
                  Total Qty: <Span>{getQuantity(cartItems)} items</Span>
                </CheckoutCartData>
                <CheckoutCartData>
                  Subtotal: <Span>${getTotalPrice(cartItems)}</Span>
                </CheckoutCartData>
                <CheckoutCartData>
                  Shipping: <Span>$0</Span>
                </CheckoutCartData>
                <CheckoutCartData>Free Shipping</CheckoutCartData>
                <CheckoutCartData>
                  Total: <Span>${getTotalPrice(cartItems)}</Span>
                </CheckoutCartData>
              </CheckoutCart>
              <PlaceOrderBtn>Place Order Now</PlaceOrderBtn>
            </RightContainer>
          </CheckoutContent>
        </MainContainer>
      </CheckoutSection>
    </HelmetComponent>
  );
};

export default Checkout;
