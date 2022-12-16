import { Box } from "@chakra-ui/react";
import { Center, Notification, Text } from "@mantine/core";
import EvmoswapTransactionsTable from "./EvmoswapTransactionsTable";
import { IconX } from "@tabler/icons";
import { useQuery } from "react-query";
//import LoaderComp from "../../../LoaderComp";

//API Key
const APIKey = process.env.NEXT_PUBLIC_COVALENTKEY;

export default function EvmoswapTransactions() {
  // used React-Query to fetch Covalent API
  const { data, error, isFetching } = useQuery(
    ["evmoswapTransactions"],
    async () => {
      const res = await fetch(
        `https://api.covalenthq.com/v1/8217/xy=k/claimswap/tokens/address/0xcf87f94fd8f6b6f0b479771f10df672f99eada63/transactions/?key=${APIKey}`
      );
      return res.json();
    }
  );

  const items = data?.data?.items;

  //console.log(items.slice(0).reverse());

  if (isFetching) return "Loading..";

  if (error)
    return (
      <Center
        style={{
          width: "100%",
          height: "20%",

          left: "0px",
          top: "0px",
        }}
      >
        <Notification icon={<IconX size={18} />} color="red">
          Error! Failed to Fetch Cronus Transactions API
        </Notification>
      </Center>
    );

  return (
    <Box>
      <Box minWidth="1220" maxW="600" justifyItems="center" mx="auto" mb={20}>
        <Text fw={500}>Transactions</Text>
        <EvmoswapTransactionsTable data={items} />
      </Box>
    </Box>
  );
}
