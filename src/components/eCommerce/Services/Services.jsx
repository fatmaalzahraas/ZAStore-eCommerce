import {
  ServiceHeading,
  ServiceIcon,
  ServiceInfo,
  ServiceItem,
  ServicesSection,
  ServicesWrapper,
  ServiceText,
} from "./Services.style";
import { MainContainer } from "../../../styles/Global.styles";
import services from "./servicesData";
import { motion } from "motion/react";
const Services = () => {
  return (
    <ServicesSection>
      <MainContainer>
        <ServicesWrapper>
          {services.map((service, index) => (
            <ServiceItem
              as={motion.div}
              whileHover={{ scale: 1.1 }}
              key={index}
              background={service.bgc}
            >
              <ServiceIcon>
                <service.icon />
              </ServiceIcon>
              <ServiceInfo>
                <ServiceHeading>{service.title}</ServiceHeading>
                <ServiceText>{service.subtitle}</ServiceText>
              </ServiceInfo>
            </ServiceItem>
          ))}
        </ServicesWrapper>
      </MainContainer>
    </ServicesSection>
  );
};

export default Services;
