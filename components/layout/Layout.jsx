import React from "react";
import { Footer, Header } from "../../components";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div className="page">
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="Radius.uz" />
        <meta name="robots" content="index, follow, noodp" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />

        {/* favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/icons/favicon/apple-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/icons/favicon/favicona.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/icons/favicon/favicona.png"
        />
        {/* <link rel="manifest" href="/img/icons/favicon/site.webmanifest" /> */}
        <link
          rel="mask-icon"
          href="/img/icons/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        {/* <link rel="shortcut icon" href="/img/icons/favicon/favicon.ico" /> */}
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta
          name="msapplication-config"
          content="/img/icons/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>

      <Header />

      <div className="container">{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
