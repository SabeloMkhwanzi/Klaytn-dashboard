import { Box } from "@chakra-ui/react";
import { Center, Notification, Text } from "@mantine/core";
import ClaimswapTokenTable from "./ClaimswapTokenTable";
import { IconX } from "@tabler/icons";
import { useQuery } from "react-query";
//import LoaderComp from "../../../LoaderComp";

//COVALENT API Key
const APIKey = process.env.NEXT_PUBLIC_COVALENTKEY;

export default function ClaimswapTokens() {
  // used React-Query to fetch Covalent API
  const { data, error, isFetching } = useQuery(["evmoswapTokens"], async () => {
    const res = await fetch(
      `https://api.covalenthq.com/v1/8217/xy=k/claimswap/tokens/?key=${APIKey}`
    );
    return res.json();
  });

  const items = data?.data?.items;

  //console.log(items2);

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
          Error! Failed to Fetch Evmoswap Tokens API
        </Notification>
      </Center>
    );

  return (
    <Box>
      <Box minWidth="1220" maxW="600" justifyItems="center" mx="auto" mb={20}>
        <Text fw={500}>Top Tokens</Text>
        <ClaimswapTokenTable data={items} />
      </Box>
    </Box>
  );
}
