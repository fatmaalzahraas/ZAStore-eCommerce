import { MainContainer } from "../../../styles/Global.styles";
import { ContentWrapper, HeadingTitle } from "./PageHeader.style";

const PageHeader = ({ title }) => {
  return (
    <ContentWrapper>
      <MainContainer>
        <HeadingTitle>{title}</HeadingTitle>
      </MainContainer>
    </ContentWrapper>
  );
};

export default PageHeader;
