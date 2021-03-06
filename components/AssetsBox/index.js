import React from "react";
import { Box, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";

function AssetsBox({ data, items }) {
  const BoxBgColor = useColorModeValue("#FFE5E5", "#142F43");
  const TextColor = useColorModeValue("#FC770A", "#FC770A");
  const TextColorMode = useColorModeValue("gray.500", "gray.400");

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <>
      <Box borderRadius="md" minH="100" maxW="1000" mx="auto">
        <SimpleGrid columns={[1, null, 3]} spacing={2} key={data.id} mt={7}>
          <Box
            w="md"
            maxW="xs"
            justifyContent="center"
            my={10}
            px={5}
            ps={5}
            py={1}
          >
            <Box>
              <Text
                textAlign="center"
                color={TextColorMode}
                fontSize="md"
                fontWeight="semibold"
                mt={5}
              >
                Circulating Supply
              </Text>
              <Text
                fontSize="lg"
                mt={2}
                textAlign="center"
                color={TextColor}
                fontWeight="bold"
              >
                {data ? formatter.format(data.supply).split(".")[0] : "null"}
              </Text>
            </Box>
          </Box>
          <Box
            my={10}
            w="md"
            maxW="xs"
            justifyContent="center"
            px={5}
            ps={5}
            py={1}
          >
            <Box>
              <Text
                textAlign="center"
                color={TextColorMode}
                fontSize="md"
                fontWeight="semibold"
                mt={5}
              >
                Price Quote
              </Text>
              <Text
                textAlign="center"
                fontWeight="bold"
                fontSize="lg"
                mt={2}
                color={TextColor}
              >
                ${data.priceUsd}
              </Text>
            </Box>
          </Box>
          <Box
            my={10}
            w="md"
            maxW="xs"
            justifyContent="center"
            px={5}
            ps={5}
            py={1}
          >
            <Box>
              <Text
                textAlign="center"
                fontSize="md"
                fontWeight="semibold"
                mt={5}
                color={TextColorMode}
              >
                Volume (24h)
              </Text>
              <Text
                textAlign="center"
                fontWeight="bold"
                fontSize="lg"
                mt={2}
                color={TextColor}
              >
                {data.volumeUsd24Hr
                  ? formatter.format(data.volumeUsd24Hr).split(".")[0]
                  : "null"}
              </Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
      <Box
        bg={BoxBgColor}
        borderRadius="md"
        minH="100"
        maxW="1000"
        boxShadow="0px 5px 25px 0px rgba(0, 0, 0, .25);"
        mx="auto"
      >
        <SimpleGrid columns={[1, null, 3]} spacing={7} key={data.id} mt={7}>
          <Box w="md" maxW="xs" justifyContent="center" px={5} ps={5} py={1}>
            <Box>
              <Text
                textAlign="center"
                color={TextColorMode}
                fontSize="md"
                fontWeight="semibold"
                mt={5}
              >
                Market Cap
              </Text>
              <Text
                fontSize="lg"
                mt={2}
                textAlign="center"
                color={TextColor}
                fontWeight="bold"
              >
                {data.marketCapUsd
                  ? formatter.format(data.volumeUsd24Hr).split(".")[0]
                  : "null"}
              </Text>
            </Box>
          </Box>
          <Box w="md" maxW="xs" justifyContent="center" px={5} ps={5} py={1}>
            <Box>
              <Text
                textAlign="center"
                color={TextColorMode}
                fontSize="md"
                fontWeight="semibold"
                mt={5}
              >
                Volume Weighted Average
              </Text>
              <Text
                textAlign="center"
                fontWeight="bold"
                fontSize="lg"
                mt={2}
                color={TextColor}
              >
                {data.vwap24Hr
                  ? formatter.format(data.volumeUsd24Hr).split(".")[0]
                  : "null"}
              </Text>
            </Box>
          </Box>

          <Box w="md" maxW="xs" justifyContent="center" px={5} ps={5} py={1}>
            <Box>
              <Text
                textAlign="center"
                fontSize="md"
                fontWeight="semibold"
                mt={5}
                color={TextColorMode}
              >
                Value Change (24h)
              </Text>
              <Text
                textAlign="center"
                fontWeight="bold"
                fontSize="lg"
                mt={2}
                color="white"
              >
                {data.changePercent24Hr}%
              </Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}

export default AssetsBox;
