import Head from "next/head";
import { Box, useColorModeValue } from "@chakra-ui/react";
import Dashboard from "../components/Dashboard/index";
import Navbar from "../components/Navbar/index";

export default function Home() {
  const backgroundColor = useColorModeValue("white", "gray.900");
  return (
    <>
      <Head>
        <title>Klaytn - Defi Analytics Dashboard</title>
        <meta
          name="description"
          content="Klaytn Defi Analytics Dashboard Build with nextjs, chakra-ui, covalent API."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box minHeight="100vh" bg={backgroundColor}>
        <Navbar />
        <Dashboard />
      </Box>
    </>
  );
}
