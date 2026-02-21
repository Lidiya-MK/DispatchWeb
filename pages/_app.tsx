import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import "../src/index.css";
import dispatchLogo from "../src/assets/dispatch-logo.png";

const AppNoSSR = dynamic(() => import("../src/App"), { ssr: false });

export default function MyApp(): JSX.Element {
  return (
    <>
      <Head>
        <title>Dispatch</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={dispatchLogo.src} />
      </Head>
      <AppNoSSR />
    </>
  );
}
