import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Stack, useColorModeValue } from "@chakra-ui/react";
import AssetsBox from "../AssetsBox/index";
import LineCharts from "../LineCharts/index";
import ExploreButton from "../ExploreButton/index";

function GetApi() {
  const [assets, setAssets] = useState([]);
  const [charts, setCharts] = useState([]);
  const [volumeWeighted, setVolumeWeighted] = useState([]);
  const [market, setMarket] = useState([]);
  const [items, setItems] = useState([]);
  const BoxBgColor = useColorModeValue("#E6E6E6", "#21325E");

  useEffect(() => {
    getKlaytnAssets();
    getKlaytnCharts();
    volumeWeighted;
    getKlaytnMarket();
    market;
    getKlaytnPools();
    items;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formatCash = (n) => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1);
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1);
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1);
    if (n >= 1e12) return +(n / 1e12).toFixed(1);
  };

  const getKlaytnAssets = async (e) => {
    const response = await axios.get("https://api.coincap.io/v2/assets/klaytn");
    setAssets(response.data.data);
  };

  const getKlaytnCharts = async (e) => {
    const response = await axios.get(
      "https://api.coincap.io/v2/assets/klaytn/history?interval=d1"
    );
    setCharts(response.data.data);

    setVolumeWeighted(
      charts
        .map((item) => ({
          x: new Date(item.date).toLocaleDateString(),
          y: formatCash(item.priceUsd),
        }))
        .reverse()
    );
  };

  const getKlaytnMarket = async (e) => {
    const response = await axios.get(
      "https://api.coincap.io/v2/assets/klaytn/markets"
    );
    setMarket(response.data.data);
  };

  const getKlaytnPools = async (e) => {
    const response = await fetch(
      //Pools Transaction
      //"https://api.covalenthq.com/v1/8217/xy=k/claimswap/pools/address/0x9ddcBC22bEB97899B5ceDCAbbA50A98314c3bAC1/transactions/?&key=ckey_4e73d56514984838ab3206fbaf4"

      //healt
      //"https://api.covalenthq.com/v1/8217/xy=k/claimswap/health/?&key=ckey_4e73d56514984838ab3206fbaf4"

      //ecosystem claimswap on Klaytn net
      "https://api.covalenthq.com/v1/8217/xy=k/claimswap/ecosystem/?&key=ckey_4e73d56514984838ab3206fbaf4"
    );
    const data = await response.json();
    setItems(data?.data?.items);
  };

  return (
    <Box>
      {/* {assets.map((item) => ( */}
      <Box key={assets.chain_id}>{console.log(items)}</Box>
      {/* ))} */}
      <Box mx={3} mb={2}>
        <Box
          mx="auto"
          my={5}
          //mx={10}
          px={5}
          ps={5}
          py={5}
          bg={BoxBgColor}
          rounded="md "
          borderRadius="lg"
          h="450px"
          maxW="950"
          boxShadow="0px 5px 25px 0px rgba(0, 0, 0, .25);"
          bgColor="rgba(255, 0, 0, 0.1)"
        >
          <LineCharts data={volumeWeighted} />
        </Box>
        <AssetsBox data={assets} items={items} />
      </Box>
    </Box>
  );
}

export default GetApi;
