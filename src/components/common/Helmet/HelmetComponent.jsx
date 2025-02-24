import { useEffect } from "react";

const HelmetComponent = ({ children, title }) => {
  useEffect(() => {
    document.title = `ZAStore ${title ? "- " + title : ""}`;
  }, [title]);
  return <div>{children}</div>;
};

export default HelmetComponent;
