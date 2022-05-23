import { useState, useEffect } from "react";
import { Box, useColorModeValue, Text } from "@chakra-ui/react";
import { TableToken } from "..";
import TokenOverview from "./TokenOverview";

function TokenTable() {
  const [items, setItems] = useState([]);
  const [poolOverviews, setPoolOverviews] = useState([]);
  const HeadingTextColorMode = useColorModeValue("black", "White");

  useEffect(() => {
    getPools();
    getApi();
    items;
    poolOverviews;
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

  const getApi = async (e) => {
    const response = await fetch(
      "https://api.covalenthq.com/v1/8217/xy=k/claimswap/ecosystem/?&key=ckey_4e73d56514984838ab3206fbaf4"
    );
    const data = await response.json();
    setPoolOverviews(data?.data?.items);
  };
  return (
    <Box>
      <Text
        mt="1%"
        mx="10%"
        fontSize="2xl"
        fontWeight="semibold"
        color={HeadingTextColorMode}
      >
        Claimswap Tokens Analytics
      </Text>
      <Text mx="10%" fontSize="xl" fontWeight="normal" color="gray.400">
        Overview
      </Text>
      <Box minWidth="1000" maxW="600" justifyItems="center" mx="auto">
        <TokenOverview data={poolOverviews} />
        <TableToken data={items} rowsPerPage={9} />
      </Box>
    </Box>
  );
}

export default TokenTable;
