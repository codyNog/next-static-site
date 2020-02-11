import React from "react";
import styled from "@emotion/styled";
import {
  primaryColor,
  spacing,
  whiteColor
} from "../../../../../constrants/style";
import { H2, H3 } from "../../../../atoms/Heading";
import Skill from "../../../../molecules/Skill";
import MediaStore from "../../../../../store/global/media";
import Container from "../../../../atoms/Container";

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
    backgroundColor: primaryColor,
    transform: "skewY(-5deg)"
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
    backgroundColor: primaryColor,
    transform: "skewY(-5deg)"
  }
});

const Skills = styled.div({
  marginTop: spacing.S,
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap"
});

const ServiceSection: React.FC = () => {
  const { isMobile } = MediaStore.useContainer();

  return (
    <Wrapper>
      <Container>
        <H2>Service</H2>
        <H3 style={{ marginTop: spacing.M }}>FrontEnd</H3>
        <Skills style={isMobile ? { flexDirection: "column" } : {}}>
          <Skill
            src={"/static/img/react.svg"}
            title={"React"}
            style={isMobile ? { marginBottom: spacing.S } : {}}
          />
          <Skill
            src={"/static/img/nextjs.svg"}
            title={"Next.js"}
            style={
              isMobile ? { marginBottom: spacing.S } : { marginLeft: spacing.S }
            }
          />
          <Skill
            src={"/static/img/gatsby.svg"}
            title={"Gatsby"}
            style={isMobile ? {} : { marginLeft: spacing.S }}
          />
        </Skills>
        <H3 style={{ marginTop: spacing.M }}>Mobile</H3>
        <Skills style={isMobile ? { flexDirection: "column" } : {}}>
          <Skill
            src={"/static/img/react.svg"}
            title={"React Native"}
            style={isMobile ? { marginBottom: spacing.S } : {}}
          />
          <Skill
            src={"/static/img/android.svg"}
            title={"Android"}
            style={
              isMobile ? { marginBottom: spacing.S } : { marginLeft: spacing.S }
            }
          />
        </Skills>
        <H3 style={{ marginTop: spacing.M }}>Desktop</H3>
        <Skills style={isMobile ? { flexDirection: "column" } : {}}>
          <Skill
            src={"/static/img/electron.svg"}
            title={"Electron"}
            style={isMobile ? { marginBottom: spacing.S } : {}}
          />
        </Skills>
      </Container>
    </Wrapper>
  );
};

export default ServiceSection;
