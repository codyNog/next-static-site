import App from "next/app";
import Head from "next/head";
import React from "react";
import "ress";
import ModalStore from "../store/global/modal";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Next App</title>
        </Head>
        <ModalStore.Provider>
          <Component {...pageProps} />
        </ModalStore.Provider>
      </>
    );
  }
}
