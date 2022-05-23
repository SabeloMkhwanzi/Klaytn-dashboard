import { useState, useEffect } from "react";
import axios from "axios";
import { Box, useColorModeValue } from "@chakra-ui/react";

import { TableToken } from "..";

function TokenTable() {
  const [items, setItems] = useState([]);
  const BoxBgColor = useColorModeValue("#E6E6E6", "#21325E");

  console.log(items);

  useEffect(() => {
    getPools();
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

  const getPools = async (e) => {
    const response = await fetch(
      "https://api.covalenthq.com/v1/8217/xy=k/claimswap/tokens/?&key=ckey_4e73d56514984838ab3206fbaf4"
    );
    const data = await response.json();
    setItems(data?.data?.items);
  };

  return (
    <Box>
      <Box mb={2} pt={10}></Box>

      <Box minWidth="1000" maxW="600" justifyItems="center" mx="auto">
        <TableToken data={items} rowsPerPage={9} />
      </Box>
    </Box>
  );
}

export default TokenTable;

//https://api.covalenthq.com/v1/:chain_id/xy=k/:dexname/pools/address/:address/transactions/?&key=ckey_4e73d56514984838ab3206fbaf4

//https://api.covalenthq.com/v1/:chain_id/xy=k/:dexname/health/?&key=ckey_4e73d56514984838ab3206fbaf4

///https://api.covalenthq.com/v1/:chain_id/xy=k/:dexname/ecosystem/?&key=ckey_4e73d56514984838ab3206fbaf4

//https://api.coincap.io/v2/assets/klay

// //history;
// ("https://api.coincap.io/v2/assets/bitcoin/history?interval=d1");

// //markets;
//("https://api.coincap.io/v2/assets/bitcoin/markets");

// //rates;
// ("https://api.coincap.io/v2/rates/bitcoin");

// //contract metadata
// (https://api.covalenthq.com/v1/8217/tokens/tokenlists/:id/?&key=ckey_4e73d56514984838ab3206fbaf4)

//"https://api.covalenthq.com/v1/56/xy=k/pancakeswap_v2/tokens/address/0xce146236fe4e48240cd8f7d22c38c07c7a6bab0b/?quote-currency=USD&format=JSON&tickers=KLAY&key=ckey_4e73d56514984838ab3206fbaf47"
//"https://api.covalenthq.com/v1/8217/xy=k/pancakeswap_v2/tokens/address/0xce146236fe4e48240cd8f7d22c38c07c7a6bab0b/?quote-currency=USD&format=JSON&tickers=KLAY&key=ckey_4e73d56514984838ab3206fbaf4"
//"https://api.covalenthq.com/v1/8217/xy=k/claimswap/tokens/address/0xce146236fe4e48240cd8f7d22c38c07c7a6bab0b/?&key=ckey_4e73d56514984838ab3206fbaf4"
//"https://api.covalenthq.com/v1/xy=k/supported_dexes/?quote-currency=USD&format=JSON&key=ckey_4e73d56514984838ab3206fbaf4"
