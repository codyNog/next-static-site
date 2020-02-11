import React from "react";
import styled from "@emotion/styled";
import { fontSize, whiteColor, spacing } from "../../../constrants/style";
import Paragraph from "../../atoms/Paragraph";

const Wrapper = styled.div({
  paddingTop: 100,
  paddingBottom: spacing.S,
  backgroundColor: whiteColor,
  width: "100vw",
  marginTop: "auto"
});

const Aside = styled.aside({
  marginLeft: 40,
  fontSize: fontSize.M
});

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Aside>
        <Paragraph>Authorized By codyNog</Paragraph>
      </Aside>
    </Wrapper>
  );
};

export default Footer;
