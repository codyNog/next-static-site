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

const Wrapper = styled.div({
  color: whiteColor,
  position: "relative",
  padding: "50px 0",
  ":before": {
    content: "close-quote",
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    backgroundColor: secondaryColor,
    transform: "skewY(5deg)"
  },
  ":after": {
    content: "close-quote",
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    backgroundColor: secondaryColor,
    transform: "skewY(5deg)"
  }
});

const Contact = styled.div({
  marginTop: spacing.S
});

const ContactSection: React.FC = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default ContactSection;
