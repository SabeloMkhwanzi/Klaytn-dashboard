import Head from "next/head";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { ClaimswapAnalytics, Navbar } from "../components";

export default function Claimswap() {
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
        <ClaimswapAnalytics />
      </Box>
    </>
  );
}
