import Head from "next/head";
import { Box, useColorModeValue } from "@chakra-ui/react";

import Navbar from "../components/Navbar/index";

export default function Pool() {
  const backgroundColor = useColorModeValue("white", "gray.900");
  return (
    <>
      <Head>
        <title>Pools - Klaytn Defi Analytics Dashboard </title>
        <meta name="description" content="Defi Analytics Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box minHeight="100vh" bg={backgroundColor}>
        <Navbar />
      </Box>
    </>
  );
}
