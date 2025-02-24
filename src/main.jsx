import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalStyle from "./styles/Global.styles";
import AppRouter from "./routes/AppRouter";
import store from "./store/index";
import { Provider } from "react-redux";
import "./api/axios-global.js";
import { Toaster } from "react-hot-toast";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Toaster />
      <GlobalStyle />
      <AppRouter />
    </Provider>
  </StrictMode>
);
