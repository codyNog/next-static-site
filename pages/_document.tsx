import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import styled from "@emotion/styled";
import { blackColor, whiteColor, darkColor } from "../constrants/style";

const Html = styled.html({
  backgroundColor: darkColor
});

const Body = styled.body({
  width: "100vw",
  overflow: "hidden scroll",
  color: blackColor,
  backgroundColor: whiteColor,
  margin: 0
});

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang={"ja"}>
        <Head></Head>
        <Body>
          <Main />
          <NextScript />
        </Body>
      </Html>
    );
  }
}
