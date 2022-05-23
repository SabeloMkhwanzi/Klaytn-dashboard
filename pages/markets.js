import Head from "next/head";
import { Box, useColorModeValue } from "@chakra-ui/react";
import Navbar from "../components/Navbar/index";
import Markets from "../components/Markets/index";

export default function Market() {
  const backgroundColor = useColorModeValue("white", "gray.900");
  return (
    <>
      <Head>
        <title>Markets - Klaytn Defi Analytics Dashboard</title>
        <meta name="description" content="Klaytn Defi Analytics Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box minHeight="100vh" bg={backgroundColor}>
        <Navbar />
        <Markets />
      </Box>
    </>
  );
}
