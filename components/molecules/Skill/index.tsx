import React from "react";
import styled from "@emotion/styled";
import Paragraph from "../../atoms/Paragraph";
import { whiteColor, spacing } from "../../../constrants/style";

const Wrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
});

const ImgWrapper = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: whiteColor,
  height: 200,
  width: 200,
  borderRadius: "50%"
});

const Img = styled.img({
  width: "90%"
});

interface Props {
  src: string;
  title: string;
  style?: React.CSSProperties;
}

const Skill: React.FC<Props> = ({ src, title, style }) => {
  return (
    <Wrapper style={style}>
      <ImgWrapper>
        <Img src={src} />
      </ImgWrapper>
      <Paragraph style={{ marginTop: spacing.XS }}>{title}</Paragraph>
    </Wrapper>
  );
};

export default Skill;
