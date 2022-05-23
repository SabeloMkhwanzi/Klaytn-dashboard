import React from "react";
import {
  chakra,
  Flex,
  useColorModeValue,
  Stack,
  SimpleGrid,
  Text,
  Avatar,
  VStack,
} from "@chakra-ui/react";
import millify from "millify";

export default function TableToken({ data }) {
  const BoxBgColor = useColorModeValue("#E6E6E6", "#21325E");

  const formatCash = (n) => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1);
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1);
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1);
    if (n >= 1e12) return +(n / 1e12).toFixed(1);
  };

  return (
    <>
      <Flex
        bg={BoxBgColor}
        borderRadius="md"
        minH="350"
        maxW="1200"
        boxShadow="0px 5px 25px 0px rgba(0, 0, 0, .25);"
        bgColor="rgba(255, 0, 0, 0.1)"
        mx="auto"
        alignItems="center"
        justifyContent="center"

        // bg="#243036"
      >
        <Stack
          direction={{ base: "column" }}
          w="full"
          bg={BoxBgColor}
          shadow="lg"
          borderRadius={20}
        >
          return (
          <Flex direction={{ base: "row", md: "column" }}>
            <SimpleGrid
              textAlign="center"
              spacingY={4}
              columns={[1, null, 5]}
              w={{ base: 120, md: "full" }}
              textTransform="uppercase"
              bg={BoxBgColor}
              color={"gray.100"}
              py={{ base: 1, md: 4 }}
              px={{ base: 2, md: 10 }}
              fontSize="md"
              fontWeight="semibold"
            >
              <span>Contract Name</span>
              <span>Quote Rate</span>
              <span>Reserves</span>
              <span>Volume in 7d</span>
              <span>Volume out 7d</span>
            </SimpleGrid>

            {data.map((item) => (
              <>
                <SimpleGrid
                  spacingY={4}
                  columns={[1, null, 5]}
                  w="full"
                  py={10}
                  px={10}
                  as="samp"
                  fontSize="lg"
                  textAlign="center"
                  key={item.logo_url}
                  bg={BoxBgColor}
                >
                  <Stack direction="row" bg={BoxBgColor}>
                    <Avatar
                      size="sm"
                      name={item.token_0.contract_name}
                      src={item.token_0.logo_url}
                    />
                    <Text isTruncated fontSize="lg">
                      {item.token_0.contract_name}
                    </Text>
                  </Stack>
                  <chakra.span
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="nowrap"
                  >
                    {item.token_0.quote_rate}
                  </chakra.span>
                  <chakra.span
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="nowrap"
                  >
                    <Text color="red.500" fontSize="lg" isTruncated>
                      {formatCash(item.token_0.reserve)}
                    </Text>
                  </chakra.span>
                  <chakra.span
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="nowrap"
                    color="green.500"
                  >
                    {formatCash(item.token_0.volume_in_7d)}
                  </chakra.span>
                  <chakra.span
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="nowrap"
                    color="green.500"
                  >
                    {formatCash(item.token_0.volume_out_7d)}
                  </chakra.span>
                </SimpleGrid>
                <SimpleGrid
                  spacingY={4}
                  columns={[1, null, 5]}
                  w="full"
                  py={10}
                  px={10}
                  as="samp"
                  fontSize="lg"
                  textAlign="center"
                  key={item.token_1.logo_url}
                  bg={BoxBgColor}
                >
                  <Stack direction="row" borderRadius={20} bg={BoxBgColor}>
                    <Avatar
                      size="sm"
                      name={item.token_1.contract_name}
                      src={item.token_1.logo_url}
                    />
                    <Text isTruncated fontSize="lg">
                      {item.token_1.contract_name}
                    </Text>
                  </Stack>
                  <chakra.span
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="nowrap"
                  >
                    {item.token_1.quote_rate}
                  </chakra.span>
                  <chakra.span
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="nowrap"
                  >
                    <Text color="red.500" fontSize="lg" isTruncated>
                      {formatCash(item.token_1.reserve)}
                    </Text>
                  </chakra.span>
                  <chakra.span
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="nowrap"
                    color="green.500"
                  >
                    {formatCash(item.token_1.volume_in_7d)}
                  </chakra.span>
                  <chakra.span
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="nowrap"
                    color="green.500"
                  >
                    {formatCash(item.token_1.volume_out_7d)}
                  </chakra.span>
                </SimpleGrid>
              </>
            ))}
          </Flex>
          );
        </Stack>
      </Flex>
    </>
  );
}
