import { useState, useEffect } from "react";

import { Box, useColorModeValue, Text } from "@chakra-ui/react";

import LiquidityChart from "./LiquidityChart/index";
import VolumeChart from "./VolumeChart/index";
import ClaimOverview from "./ClaimOverview/index";


const APIKey = process.env.NEXT_PUBLIC_COVALENTKEY;

function ClaimswapAnalytics() {
  const [items, setItems] = useState([]);
  const [liquidGraph, setLiquidGraph] = useState([]);
  const [volumeGraph, setVolumeGraph] = useState([]);
  const BoxBgColor = useColorModeValue("#FFE5E5", "#142F43");
  const HeadingTextColorMode = useColorModeValue("black", "White");

  const formatCash = (n) => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1);
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1);
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1);
    if (n >= 1e12) return +(n / 1e12).toFixed(1);
  };

  useEffect(() => {
    getApi();
    items;
    liquidGraph;
    volumeGraph;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //handle Ecosystem data
  const getApi = async (e) => {
    const response = await fetch(
      `https://api.covalenthq.com/v1/8217/xy=k/claimswap/ecosystem/?&key=${APIKey}`
    );
    const data = await response.json();
    setItems(data.data.items);
    setLiquidGraph(
      data.data.items[0].liquidity_chart_7d
        .map((item) => ({
          x: new Date(item.dt).toLocaleDateString(),
          y: formatCash(item.liquidity_quote),
        }))
        .reverse()
    );
    setVolumeGraph(
      data.data.items[0].volume_chart_7d
        .map((item) => ({
          x: new Date(item.dt).toLocaleDateString(),
          y: formatCash(item.volume_quote),
        }))
        .reverse()
    );
  };

  return (
    <Box minH="100vh">
      <Box mx={3} mb={2}>
        <Text
          mt="1%"
          mx="10%"
          fontSize="2xl"
          fontWeight="semibold"
          color={HeadingTextColorMode}
        >
          Claimswap Analytics
        </Text>
        <Text mx="10%" fontSize="xl" fontWeight="normal" color="gray.400">
          Overview
        </Text>
        <ClaimOverview data={items} />
        <Box
          mx="auto"
          my={5}
          px={5}
          ps={5}
          py={5}
          bg={BoxBgColor}
          rounded="md "
          borderRadius="lg"
          h="450px"
          maxW="1000"
          boxShadow="0px 5px 25px 0px rgba(0, 0, 0, .25);"
        >
          <LiquidityChart data={liquidGraph} />
        </Box>
        <Box
          mx="auto"
          my={5}
          px={5}
          ps={5}
          py={5}
          bg={BoxBgColor}
          rounded="md "
          borderRadius="lg"
          h="450px"
          maxW="1000"
          boxShadow="0px 5px 25px 0px rgba(0, 0, 0, .25);"
        >
          <VolumeChart data={volumeGraph} />
        </Box>
      </Box>
    </Box>
  );
}
export default ClaimswapAnalytics;
