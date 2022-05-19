import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import AssetsBox from "../AssetsBox/index";

function GetApi() {
  const [assets, setAssets] = useState([]);
  const [charts, setCharts] = useState([]);
  const InputTextColorMode = useColorModeValue("gray.900", "white");

  useEffect(() => {
    getKlaytnAssets();
    getKlaytnCharts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getKlaytnAssets = async (e) => {
    const response = await axios.get("https://api.coincap.io/v2/assets/klaytn");
    // console.log(response.data);
    setAssets(response.data.data);

    // console.log(assets);
  };

  const getKlaytnCharts = async (e) => {
    const response = await axios.get(
      "https://api.coincap.io/v2/assets/bitcoin/history?interval=h12"
    );
    // console.log(response.data);
    setCharts(response.data.data);

    // console.log(assets);
  };

  return (
    <Box>
      <Box>{console.log(charts)}</Box>

      <Box mx={3} mb={2}>
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
