import React from "react";
import styled from "@emotion/styled";
import { fontSize, whiteColor, spacing } from "../../../constrants/style";

const Wrapper = styled.a({
  width: 300,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: whiteColor,
  fontSize: fontSize.L,
  textDecoration: "none"
});

const Icon = styled.img({
  border: "",
  height: 30
});

const Link = styled.span({ marginLeft: spacing.S });

interface Props {
  src?: string;
  href: string;
  title: string;
  style?: React.CSSProperties;
}

const ContactLink: React.FC<Props> = ({ src, href, title, style }) => {
  return (
    <Wrapper href={href} target={"_blank"} style={style}>
      <Icon src={src} alt={title} />
      <Link>{title}</Link>
    </Wrapper>
  );
};

export default ContactLink;
