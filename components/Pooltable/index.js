import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Stack, useColorModeValue, Text } from "@chakra-ui/react";
import PoolOverview from "./PoolOverview";
import LiquidityPoolsChart from "./PoolsCharts/LiquidityPoolsChart";
import VolumePoolChart from "./PoolsCharts/VolumePoolChart";
import { Table } from "..";

function PoolTable() {
  const [items, setItems] = useState([]);
  const [liquidGraph, setLiquidGraph] = useState([]);
  const [volumeGraph, setVolumeGraph] = useState([]);
  const BoxBgColor = useColorModeValue("#FFE5E5", "#142F43");
  const HeadingTextColorMode = useColorModeValue("black", "White");

  useEffect(() => {
    getClaimHealth();
    items;
    liquidGraph;
    volumeGraph;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formatCash = (n) => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1);
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1);
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1);
    if (n >= 1e12) return +(n / 1e12).toFixed(1);
  };

  const getClaimHealth = async (e) => {
    const response = await fetch(
      "https://api.covalenthq.com/v1/8217/xy=k/claimswap/pools/address/0x9ddcBC22bEB97899B5ceDCAbbA50A98314c3bAC1/?&key=ckey_4e73d56514984838ab3206fbaf4"
    );
    const data = await response.json();
    setItems(data?.data?.items);
    setLiquidGraph(
      data.data.items[0].liquidity_timeseries_7d
        .map((item) => ({
          x: new Date(item.dt).toLocaleDateString(),
          y: formatCash(item.liquidity_quote),
        }))
        .reverse()
    );
    setVolumeGraph(
      data.data.items[0].volume_timeseries_7d
        .map((item) => ({
          x: new Date(item.dt).toLocaleDateString(),
          y: formatCash(item.volume_quote),
        }))
        .reverse()
    );
  };

  return (
    <Box>
      <Box mx={3} mb={2}>
        <Text
          mt="1%"
          mx="10%"
          fontSize="2xl"
          fontWeight="semibold"
          color={HeadingTextColorMode}
        >
          Claimswap Pools Analytics
        </Text>
        <Text mx="10%" fontSize="xl" fontWeight="normal" color="gray.400">
          Overview
        </Text>
        <Stack direction="row" justifyContent="center" my={10}>
          <Box
            px={5}
            ps={5}
            py={5}
            bg={BoxBgColor}
            rounded="md "
            borderRadius="lg"
            h="450px"
            maxW="950"
            minW="600"
            boxShadow="0px 5px 25px 0px rgba(0, 0, 0, .25);"
          >
            <LiquidityPoolsChart data={liquidGraph} />
          </Box>
          <Box
            px={5}
            ps={5}
            py={5}
            bg={BoxBgColor}
            rounded="md "
            borderRadius="lg"
            h="450px"
            maxW="950"
            minW="600"
            boxShadow="0px 5px 25px 0px rgba(0, 0, 0, .25);"
          >
            <VolumePoolChart data={volumeGraph} />
          </Box>
        </Stack>
        <PoolOverview data={items} />
      </Box>
      <Box mt={3}>
        <Table data={items} />
      </Box>
    </Box>
  );
}

export default PoolTable;
