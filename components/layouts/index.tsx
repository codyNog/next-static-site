import React from "react";
import styled from "@emotion/styled";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

const Wrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  minWidth: "100vw"
});

const Layout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer />
    </Wrapper>
  );
};

export default Layout;
