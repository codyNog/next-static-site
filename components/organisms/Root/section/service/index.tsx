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
import Sloped from "../../../../atoms/Sloped";

const Skills = styled.div({
  marginTop: spacing.S,
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap"
});

const ServiceSection: React.FC = () => {
  const { isMobile } = MediaStore.useContainer();

  return (
    <Sloped
      color={whiteColor}
      padding={"50px 0"}
      backgroundColor={primaryColor}
      transform={"skewY(-5deg)"}
    >
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
    </Sloped>
  );
};

export default ServiceSection;
