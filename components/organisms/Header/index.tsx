import React from "react";
import styled from "@emotion/styled";
import HamburgerButton from "../../atoms/Hamburger";
import ModalStore from "../../../store/global/modal";

const Wrapper = styled.div({
  display: "flex",
  alignItems: "center",
  width: "100vw",
  padding: 40,
  position: "fixed",
  zIndex: 3
});

const Right = styled.div({
  marginLeft: "auto",
  zIndex: 3
});

const Header: React.FC = () => {
  const {
    openMenuModal,
    isMenuModalOpen,
    closeModal
  } = ModalStore.useContainer();

  const toggle = () => {
    if (isMenuModalOpen()) {
      closeModal();
    } else {
      openMenuModal();
    }
  };

  return (
    <Wrapper>
      <Right>
        <HamburgerButton isOpen={isMenuModalOpen()} onClick={toggle} />
      </Right>
    </Wrapper>
  );
};

export default Header;
