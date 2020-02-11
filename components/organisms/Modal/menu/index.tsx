import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div({
  position: "fixed",
  top: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 2,
  backgroundColor: "blue",
  height: "100vh",
  width: "100vw"
});

const Window = styled.div({
  backgroundColor: "white",
  padding: 8
});

const MenuModal: React.FC = () => {
  return (
    <Wrapper>
      <Window>modal</Window>
    </Wrapper>
  );
};

export default MenuModal;
