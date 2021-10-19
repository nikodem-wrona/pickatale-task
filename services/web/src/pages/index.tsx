import type { NextPage } from "next";
import Head from "next/head";
import Box from "@mui/material/Box";

import { Game } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <Box
        sx={{
          position: "absolute",
          pt: 2,
          pb: 2,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Game />
      </Box>
    </>
  );
};

export default Home;
