import { Outlet } from "react-router-dom";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/Global.styles";
const RootLayout = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <div style={{ minHeight: "70vh" }}>
          <Outlet />
        </div>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default RootLayout;
