import Head from "next/head";
import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import TokenTable from "../components/TokenTable/index";
import Navbar from "../components/Navbar/index";

export default function Tokens() {
  const backgroundColor = useColorModeValue("white", "gray.900");
  return (
    <>
      <Head>
        <title>Tokens - Klaytn Defi Analytics Dashboard</title>
        <meta name="description" content="Klaytn Defi Analytics Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box minHeight="100vh" bg={backgroundColor}>
        <Navbar />
        <TokenTable />
      </Box>
    </>
  );
}
