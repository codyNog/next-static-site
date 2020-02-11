import React from "react";
import styled from "@emotion/styled";
import ModalStore from "../../../store/global/modal";

const Wrapper = styled.div({
  display: "flex",
  alignItems: "center",
  width: "100vw",
  position: "fixed"
  //opacity: 0
});

const OpenMenuModal = styled.button({
  outline: "none"
});

const Header: React.FC = () => {
  const { openMenuModal } = ModalStore.useContainer();

  return (
    <Wrapper>
      <OpenMenuModal onClick={openMenuModal} style={{ marginLeft: "auto" }}>
        open
      </OpenMenuModal>
    </Wrapper>
  );
};

export default Header;
