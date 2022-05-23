import React, { useState, useEffect } from "react";
import {
  chakra,
  Flex,
  useColorModeValue,
  Stack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import axios from "axios";

function Markets() {
  const [markets, setMarket] = useState([]);
  const BoxBgColor = useColorModeValue("#FFE5E5", "#142F43");
  const TrColorMode = useColorModeValue("#EEEEEE", "#5F939A");
  const TextColor = useColorModeValue("black", "white");
  const HeadingTextColorMode = useColorModeValue("black", "White");

  const getKlaytnMarket = async (e) => {
    const response = await axios.get(
      "https://api.coincap.io/v2/assets/klaytn/markets"
    );
    setMarket(response.data.data);
  };

  const formatCash = (n) => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1);
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1);
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1);
    if (n >= 1e12) return +(n / 1e12).toFixed(1);
  };

  useEffect(() => {
    getKlaytnMarket();
    markets;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Text
        mt="1%"
        mx="10%"
        fontSize="2xl"
        fontWeight="semibold"
        color={HeadingTextColorMode}
      >
        klaytn Markets
      </Text>
      <Text mx="10%" fontSize="xl" fontWeight="normal" color="gray.400">
        Overview
      </Text>
      <Flex
        bg={BoxBgColor}
        borderRadius="lg"
        minH="200"
        maxW="1000"
        minW="700"
        boxShadow="0px 5px 25px 0px rgba(0, 0, 0, .25);"
        mx="auto"
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          direction={{ base: "column" }}
          w="full"
          bg={BoxBgColor}
          shadow="lg"
          borderRadius="lg"
        >
          return (
          <Flex direction={{ base: "row", md: "column" }}>
            <SimpleGrid
              textAlign="center"
              spacingY={4}
              columns={[1, null, 7]}
              w={{ base: 120, md: "full" }}
              textTransform="uppercase"
              bg={BoxBgColor}
              color={TextColor}
              py={{ base: 1, md: 4 }}
              px={{ base: 2, md: 10 }}
              fontSize="md"
              fontWeight="semibold"
              borderRadius="lg"
            >
              <span>Base ID</span>
              <span>Base Symbol</span>
              <span>Exchange ID</span>
              <span>Price Quote</span>
              <span>Quote ID</span>
              <span>Quote Symbol</span>

              <span>Volume 24Hr</span>
            </SimpleGrid>

            {markets.map((item) => (
              <SimpleGrid
                spacingY={4}
                columns={[1, null, 7]}
                maxWidth="1000"
                py={5}
                px={5}
                as="samp"
                fontSize="lg"
                textAlign="center"
                bg={TrColorMode}
                key={item.volumePercent}
              >
                <Stack direction="row" bg={TrColorMode}>
                  <Text isTruncated fontSize="lg">
                    {item.baseId}
                  </Text>
                </Stack>
                <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                >
                  {item.baseSymbol}
                </chakra.span>
                <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                >
                  <Text fontSize="lg" isTruncated>
                    {item.exchangeId}
                  </Text>
                </chakra.span>
                <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                >
                  $ {formatCash(item.priceUsd)}
                </chakra.span>
                <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                >
                  {item.quoteId}
                </chakra.span>
                <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                >
                  {item.quoteSymbol}
                </chakra.span>

                <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                >
                  $ {formatCash(item.volumeUsd24Hr)}
                </chakra.span>
              </SimpleGrid>
            ))}
          </Flex>
          );
        </Stack>
      </Flex>
    </>
  );
}

export default Markets;
