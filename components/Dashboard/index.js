import { useState, useEffect } from "react";
import axios from "axios";
import { Box, useColorModeValue, Text } from "@chakra-ui/react";
import AssetsBox from "../AssetsBox/index";
import LineCharts from "../LineCharts/index";

function GetApi() {
  const [assets, setAssets] = useState([]);
  const [charts, setCharts] = useState([]);
  const [volumeWeighted, setVolumeWeighted] = useState([]);

  const BoxBgColor = useColorModeValue("#FFE5E5", "#142F43");
  const HeadingTextColorMode = useColorModeValue("black", "White");

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

  useEffect(() => {
    getKlaytnAssets();
    volumeWeighted;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getKlaytnCharts()]);

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
          klaytn Analytics
        </Text>
        <Text mx="10%" fontSize="xl" fontWeight="normal" color="gray.400">
          Overview
        </Text>
        <Box
          mx="auto"
          my={5}
          px={5}
          ps={5}
          py={5}
          bg={BoxBgColor}
          rounded="md "
          borderRadius="lg"
          h="450px"
          maxW="950"
          boxShadow="0px 5px 25px 0px rgba(0, 0, 0, .25);"
        >
          <LineCharts data={volumeWeighted} />
        </Box>
        <AssetsBox data={assets} />
      </Box>
    </Box>
  );
}

export default GetApi;
