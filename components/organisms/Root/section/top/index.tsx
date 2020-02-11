import React from "react";
import styled from "@emotion/styled";
import { darkColor } from "../../../../../constrants/style";
import Container from "../../../../atoms/Container";
import { H2 } from "../../../../atoms/Heading";

const Wrapper = styled.div({
  padding: 40,
  paddingTop: 120,
  position: "relative",
  "&:before": {
    content: "close-quote",
    position: "absolute",
    top: 0,
    left: 0,
    width: 1200,
    height: 180,
    backgroundColor: darkColor,
    transform: "rotate(-15deg)",
    transformOrigin: "left bottom"
  }
});

const TopSection: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <H2>Profile</H2>
      </Container>
    </Wrapper>
  );
};

export default TopSection;
