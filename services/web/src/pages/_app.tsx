import "../styles/normalize.css";
import "../styles/globals.css";

import { pipe } from "ramda";
import CssBaseline from "@mui/material/CssBaseline";
import type { AppProps } from "next/app";

import { withApiClient } from "../infrastructure";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline /> <Component {...pageProps} />
    </>
  );
}

const withDependencies = pipe(withApiClient());

export default withDependencies(MyApp);
