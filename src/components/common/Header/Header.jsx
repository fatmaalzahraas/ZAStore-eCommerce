import { useRef, useEffect } from "react";
import {
  CartBagContainer,
  CartBagIcon,
  LogoContainer,
  MainHeader,
  Wrapper,
  MobileContainer,
  MobileToggleIcon,
  Navbar,
  NavIconsContainer,
  NavMenu,
  NavMenuItem,
  NavMenuLink,
  SpanContainer,
  UserImage,
  CartBagItemsNumber,
  HeaderLogo,
  Navigation,
  ImageContainer,
  LinksContainer,
  Links,
  Logout,
} from "./Header.style";
import { motion } from "motion/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase.config";
import { toast } from "react-hot-toast";
import UserIcon from "../../../assets/imgs/user-icon-main.avif";
import { getQuantity } from "../../../utils/index";
const navLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];
const Header = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navbarRef = useRef(null);
  const navigationRef = useRef(null);
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const profileActions = useRef(null);
  const toggleProfileActions = () => {
    profileActions.current.classList.toggle("show");
  };
  const logout = async () => {
    await signOut(auth)
      .then(() => {
        navigate("/");
        toast.success("Logged out");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const navigationMenuToggling = () => {
    navigationRef.current.classList.toggle("menu-active");
  };
  const stickyNavbar = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        navbarRef.current?.classList?.add("sticky");
      } else {
        navbarRef.current?.classList?.remove("sticky");
      }
    });
  };
  useEffect(() => {
    stickyNavbar();
    return () => window.removeEventListener("scroll", stickyNavbar);
  });
  return (
    <>
      <MainHeader ref={navbarRef}>
        <Wrapper>
          <Navbar>
            <LogoContainer>
              <HeaderLogo>ZAStore</HeaderLogo>
            </LogoContainer>
            <Navigation ref={navigationRef} onClick={navigationMenuToggling}>
              <NavMenu>
                {navLinks.map((link, index) => (
                  <NavMenuItem key={index}>
                    <NavMenuLink to={link.path}>{link.display}</NavMenuLink>
                  </NavMenuItem>
                ))}
              </NavMenu>
            </Navigation>
            <NavIconsContainer>
              <CartBagContainer onClick={() => navigate("cart")}>
                <CartBagIcon></CartBagIcon>
                <CartBagItemsNumber>
                  {getQuantity(cartItems)}
                </CartBagItemsNumber>
              </CartBagContainer>
              <ImageContainer>
                <UserImage
                  as={motion.img}
                  whileTap={{ scale: 1.2 }}
                  src={currentUser ? currentUser.photoURL : UserIcon}
                  alt=""
                  onClick={toggleProfileActions}
                />
                <LinksContainer
                  ref={profileActions}
                  onClick={toggleProfileActions}
                >
                  {currentUser ? (
                    <>
                      <Logout onClick={logout}>LogOut</Logout>
                    </>
                  ) : (
                    <>
                      <Links to="login">Login</Links>
                      <Links to="register">Signup</Links>
                    </>
                  )}
                </LinksContainer>
              </ImageContainer>
              <MobileContainer onClick={navigationMenuToggling}>
                <SpanContainer>
                  <MobileToggleIcon></MobileToggleIcon>
                </SpanContainer>
              </MobileContainer>
            </NavIconsContainer>
          </Navbar>
        </Wrapper>
      </MainHeader>
    </>
  );
};

export default Header;
