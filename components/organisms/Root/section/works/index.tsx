import React from "react";
import Container from "../../../../atoms/Container";
import { H2, H3 } from "../../../../atoms/Heading";
import styled from "@emotion/styled";
import { spacing } from "../../../../../constrants/style";

const Wrapper = styled.div({
  paddingTop: 60,
  marginBottom: 60
});

const WorksSection: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <H2>Works</H2>
        <H3 style={{ marginTop: spacing.M }}>To Be Released...</H3>
      </Container>
    </Wrapper>
  );
};

export default WorksSection;
