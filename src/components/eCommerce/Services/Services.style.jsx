import styled from "styled-components";
import { H3, TextWrapper } from "../../../styles/Global.styles";

export const ServicesSection = styled.section`
  padding: 45px 0;
`;
export const ServicesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem 1.2rem;
  @media (min-width: 768px) and (max-width: 1199.98px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
export const ServiceItem = styled.div`
  padding: 20px;
  background-color: ${(props) => props.background && props.background};
  display: flex;
  align-items: center;
  column-gap: 0.7rem;
  border-radius: 5px;
  cursor: pointer;
`;
export const ServiceIcon = styled.div`
  color: #fff;
  font-size: 1.5rem;
  background-color: ${props => props.theme.colors.primaryColor};
  padding: 10px;
  border-radius: 50%;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 576px) {
    font-size: 2.4rem;
    padding: 7px;
  }
`;
export const ServiceInfo = styled.div``;
export const ServiceHeading = styled(H3)`
  margin-bottom: 0.4rem;
  @media (max-width: 576px) {
    font-size: 0.9rem;
  }
`;
export const ServiceText = styled(TextWrapper)`
  font-size: 0.8rem;
  color: #222;
  @media (max-width: 576px) {
    font-size: 0.7rem;
  }
`;
