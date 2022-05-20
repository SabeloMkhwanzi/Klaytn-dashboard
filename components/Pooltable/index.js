import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Stack, useColorModeValue } from "@chakra-ui/react";
import PoolOverview from "./PoolOverview";
import LiquidityPoolsChart from "./PoolsCharts/LiquidityPoolsChart";
import VolumePoolChart from "./PoolsCharts/VolumePoolChart";
import { Table } from "..";
//import AssetsBox from "../AssetsBox/index";

function PoolTable() {
  const [items, setItems] = useState([]);
  const [liquidGraph, setLiquidGraph] = useState([]);
  const [volumeGraph, setVolumeGraph] = useState([]);
  const BoxBgColor = useColorModeValue("#E6E6E6", "#21325E");

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
      <Box>{console.log(items)}</Box>

      <Box mx={3} mb={2}>
        <Stack direction="row" justifyContent="center" my={10}>
          <Box
            //mx="auto"
            //my={5}
            //mx={10}
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
            bgColor="rgba(255, 0, 0, 0.1)"
          >
            <LiquidityPoolsChart data={liquidGraph} />
          </Box>
          <Box
            //mx="auto"
            //my={5}
            //mx={10}
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
            bgColor="rgba(255, 0, 0, 0.1)"
          >
            <VolumePoolChart data={volumeGraph} />
          </Box>
        </Stack>
        <PoolOverview data={items} />
      </Box>
      <Box mt={20}>
        <Table data={items} />
      </Box>
    </Box>
  );
}

export default PoolTable;

//"https://api.covalenthq.com/v1/xy=k/supported_dexes/?quote-currency=USD&format=JSON&key=ckey_4e73d56514984838ab3206fbaf4"
