import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import AssetsBox from "../AssetsBox/index";
import LineCharts from "../LineCharts/index";

function GetApi() {
  const [assets, setAssets] = useState([]);
  const [charts, setCharts] = useState([]);
  const [volumeWeighted, setVolumeWeighted] = useState([]);
  const InputTextColorMode = useColorModeValue("gray.900", "white");
  const BoxBgColor = useColorModeValue("#E6E6E6", "#21325E");

  useEffect(() => {
    getKlaytnAssets();
    getKlaytnCharts();
    volumeWeighted;

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

  return (
    <Box>
      <Box>{console.log(volumeWeighted)}</Box>

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
        <AssetsBox data={assets} />
      </Box>
    </Box>
  );
}

export default GetApi;

//https://api.coincap.io/v2/assets/klay

// //history;
// ("https://api.coincap.io/v2/assets/bitcoin/history?interval=d1");

// //markets;
// ("https://api.coincap.io/v2/assets/bitcoin/markets");

// //rates;
// ("https://api.coincap.io/v2/rates/bitcoin");

// //contract metadata
// (https://api.covalenthq.com/v1/8217/tokens/tokenlists/:id/?&key=ckey_4e73d56514984838ab3206fbaf4)

//"https://api.covalenthq.com/v1/56/xy=k/pancakeswap_v2/tokens/address/0xce146236fe4e48240cd8f7d22c38c07c7a6bab0b/?quote-currency=USD&format=JSON&tickers=KLAY&key=ckey_4e73d56514984838ab3206fbaf47"
//"https://api.covalenthq.com/v1/8217/xy=k/pancakeswap_v2/tokens/address/0xce146236fe4e48240cd8f7d22c38c07c7a6bab0b/?quote-currency=USD&format=JSON&tickers=KLAY&key=ckey_4e73d56514984838ab3206fbaf4"
//"https://api.covalenthq.com/v1/8217/xy=k/claimswap/tokens/address/0xce146236fe4e48240cd8f7d22c38c07c7a6bab0b/?&key=ckey_4e73d56514984838ab3206fbaf4"
//"https://api.covalenthq.com/v1/xy=k/supported_dexes/?quote-currency=USD&format=JSON&key=ckey_4e73d56514984838ab3206fbaf4"
