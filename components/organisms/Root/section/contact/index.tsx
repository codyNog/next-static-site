import React from "react";
import Container from "../../../../atoms/Container";
import styled from "@emotion/styled";
import {
  secondaryColor,
  whiteColor,
  spacing
} from "../../../../../constrants/style";
import { H2, H3 } from "../../../../atoms/Heading";
import ContactLink from "../../../../molecules/ContactLink";
import Sloped from "../../../../atoms/Sloped";

const Contact = styled.div({
  marginTop: spacing.S
});

const ContactSection: React.FC = () => {
  return (
    <Sloped
      id={"#contact"}
      color={whiteColor}
      padding={"50px 0"}
      backgroundColor={secondaryColor}
      transform={"skewY(5deg)"}
    >
      <Container>
        <H2>Contact</H2>
        <H3 style={{ marginTop: spacing.M }}>↓ご連絡はこちら↓</H3>
        <Contact>
          <ContactLink
            src={"/static/img/wantedly.svg"}
            href={"https://www.wantedly.com/users/121060845"}
            title={"Kohki Noguchi"}
          />
          <ContactLink
            src={"/static/img/github.svg"}
            href={"https://github.com/codyNog"}
            title={"codyNog"}
            style={{ marginLeft: spacing.XS }}
          />
          <ContactLink
            src={"/static/img/facebook.svg"}
            href={"https://www.facebook.com/kouki.yonemoto"}
            title={"Kohki Noguchi"}
            style={{ marginLeft: spacing.XS }}
          />
        </Contact>
      </Container>
    </Sloped>
  );
};

export default ContactSection;
