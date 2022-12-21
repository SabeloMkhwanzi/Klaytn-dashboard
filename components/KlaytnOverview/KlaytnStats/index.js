import React from "react";
import { useQuery } from "react-query";
import EvmosStatsOverview from "./KlaytnStatsOverview";
import { Center, Notification } from "@mantine/core";
import { IconX } from "@tabler/icons";
//import LoaderComp from "../../LoaderComp";

export default function KlaytnStats() {
  // used React-Query to fetch Covalent API
  const { data, error, isFetching } = useQuery(["evmoStats"], async () => {
    const res = await fetch(
      // coingecko API for Market Stats
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=klay-token&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    return res.json();
  });

  //console.log(data);

  if (isFetching) return "Loading...";

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
          Error! Failed to Fetch API
        </Notification>
      </Center>
    );
  return (
    <>
      <EvmosStatsOverview data={data} />
    </>
  );
}
