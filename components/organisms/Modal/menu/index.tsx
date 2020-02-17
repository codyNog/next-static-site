import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { whiteColor, fontSize, spacing } from "../../../../constrants/style";
import ModalStore from "../../../../store/global/modal";
import Paragraph from "../../../atoms/Paragraph";

const Wrapper = styled.div({
  position: "fixed",
  backgroundColor: whiteColor,
  top: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 2,
  //backgroundColor: "rgba(0, 0, 0, 0.26)",
  height: "100vh",
  width: "100vw"
});

const Window = styled.div({
  backgroundColor: whiteColor,
  padding: 8
});

const Ul = styled.ul({
  padding: spacing.L,
  listStyle: "none"
});

const Li = styled.li({
  fontSize: fontSize.L
});

const A = styled.a({ textDecoration: "none" });

interface MenuLink {
  href: string;
  title: string;
}

const menuLinks: MenuLink[] = [
  { href: "#profile", title: "Profile" },
  { href: "#service", title: "Service" },
  { href: "#works", title: "Works" },
  { href: "#contact", title: "Contact" }
];

const MenuModal: React.FC = () => {
  const { closeModal } = ModalStore.useContainer();

  return (
    <Wrapper>
      <Window>
        <Paragraph>codyNog{"'"}s Website</Paragraph>
        <Ul>
          {menuLinks.map((elem, i) => {
            const { href, title } = elem;
            return (
              <Li key={href} style={i === 0 ? {} : { marginTop: spacing.M }}>
                <Link href={href}>
                  <A onClick={closeModal}>{title}</A>
                </Link>
              </Li>
            );
          })}
        </Ul>
      </Window>
    </Wrapper>
  );
};

export default MenuModal;
