import React from "react";
import styled from "@emotion/styled";
import { fontSize, whiteColor } from "../../../constrants/style";

const Wrapper = styled.a({
  color: whiteColor,
  fontSize: fontSize.L,
  textDecoration: "none"
});

const Icon = styled.img({
  border: "",
  height: 50
});

interface Props {
  src?: string;
  href: string;
  title: string;
  style?: React.CSSProperties;
}

const ContactLink: React.FC<Props> = ({ src, href, title, style }) => {
  return (
    <Wrapper href={href} target={"_blank"} rel={"noopener"} style={style}>
      <Icon src={src} alt={title} />
    </Wrapper>
  );
};

export default ContactLink;
