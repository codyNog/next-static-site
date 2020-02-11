import React from "react";
import styled from "@emotion/styled";
import ModalStore from "../../../store/global/modal";
import { whiteColor } from "../../../constrants/style";

const Wrapper = styled.div({
  display: "flex",
  alignItems: "center",
  width: "100vw",
  padding: 40,
  position: "fixed",
  zIndex: 1
});

const OpenMenuModal = styled.button({
  outline: "none"
});

const Title = styled.div({
  color: whiteColor
});

const Header: React.FC = () => {
  const { openMenuModal } = ModalStore.useContainer();

  return (
    <Wrapper>
      <Title>codyNog{"'"}s Website</Title>
      <OpenMenuModal onClick={openMenuModal} style={{ marginLeft: "auto" }}>
        open
      </OpenMenuModal>
    </Wrapper>
  );
};

export default Header;
