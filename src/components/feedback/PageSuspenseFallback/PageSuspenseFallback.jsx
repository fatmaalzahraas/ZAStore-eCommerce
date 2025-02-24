import Lottie from "lottie-react";
import { Suspense } from "react";
import loading from "../../../assets/LottieFiles/loading.json";
const PageSuspenseFallback = ({ children }) => {
  return (
    <Suspense
      fallback={
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Lottie animationData={loading} style={{ width: "340px" }} />
          <h4 style={{ margin: "0px" }}>Loading Please Wait...</h4>
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

export default PageSuspenseFallback;
