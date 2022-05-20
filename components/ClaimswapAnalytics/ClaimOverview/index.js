import React from "react";
import { Box, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import millify from "millify";

function ClaimOverview({ data }) {
  const BoxBgColor = useColorModeValue("#E6E6E6", "#21325E");
  const TextColor = useColorModeValue("#FC770A", "#FC770A");
  const TextColorMode = useColorModeValue("gray.500", "gray.400");

  const formatCash = (n) => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1);
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1);
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1);
    if (n >= 1e12) return +(n / 1e12).toFixed(1);
  };

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <>
      {data.map((item) => (
        <Box
          bg={BoxBgColor}
          borderRadius="md"
          minH="350"
          maxW="950"
          boxShadow="0px 5px 25px 0px rgba(0, 0, 0, .25);"
          bgColor="rgba(255, 0, 0, 0.1)"
          mx="auto"
          key={item.id}
        >
          <SimpleGrid columns={[1, null, 3]} spacing={2} mt={7}>
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
                  Chain ID
                </Text>
                <Text
                  fontSize="lg"
                  mt={2}
                  textAlign="center"
                  color={TextColor}
                  fontWeight="bold"
                >
                  {item.chain_id}
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
                  Dex Name
                </Text>
                <Text
                  textAlign="center"
                  fontWeight="bold"
                  fontSize="lg"
                  mt={2}
                  color={TextColor}
                >
                  {item.dex_name}
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
                  Price Quote
                </Text>
                <Text
                  textAlign="center"
                  fontWeight="bold"
                  fontSize="lg"
                  mt={2}
                  color={TextColor}
                >
                  ${numberWithCommas(item.gas_token_price_quote)}
                </Text>
              </Box>
            </Box>
          </SimpleGrid>
          <SimpleGrid columns={[1, null, 3]} spacing={7} mt={7}>
            <Box w="md" maxW="xs" justifyContent="center" px={5} ps={5} py={1}>
              <Box>
                <Text
                  textAlign="center"
                  color={TextColorMode}
                  fontSize="md"
                  fontWeight="semibold"
                  mt={5}
                >
                  Total Fees (24h)
                </Text>
                <Text
                  fontSize="lg"
                  mt={2}
                  textAlign="center"
                  color={TextColor}
                  fontWeight="bold"
                >
                  $
                  {item.total_fees_24h
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
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
                  Total Swaps (24h)
                </Text>
                <Text
                  textAlign="center"
                  fontWeight="bold"
                  fontSize="lg"
                  mt={2}
                  color={TextColor}
                >
                  {item.total_swaps_24h}
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
                  Total Pairs (7d)
                </Text>
                <Text
                  textAlign="center"
                  fontWeight="bold"
                  fontSize="lg"
                  mt={2}
                  color={TextColor}
                >
                  {item.total_active_pairs_7d}
                </Text>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>
      ))}
    </>
  );
}

export default ClaimOverview;
