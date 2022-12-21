import Head from "next/head";
import { Box, useColorModeValue } from "@chakra-ui/react";
import Navbar from "../components/Navbar/index";
import { Claimswap } from "../components";

export default function Claimswapage() {
  const backgroundColor = useColorModeValue("white", "gray.900");
  return (
    <>
      <Head>
        <title>Claimswap Analytics - Klaytn Defi Analytics Dashboard</title>
        <meta name="description" content="Klaytn Defi Analytics Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box minHeight="100vh" bg={backgroundColor}>
        <Navbar />
        <Claimswap />
      </Box>
    </>
  );
}
