import React from "react";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";

function Markets() {
  return (
    <Box
      bg={BoxBgColor}
      borderRadius="md"
      minH="350"
      maxW="950"
      boxShadow="0px 5px 25px 0px rgba(0, 0, 0, .25);"
      bgColor="rgba(255, 0, 0, 0.1)"
      mx="auto"
    >
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
            ></Text>
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
            ></Text>
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
            ></Text>
            <Text
              textAlign="center"
              fontWeight="bold"
              fontSize="lg"
              mt={2}
              color={TextColor}
            ></Text>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default Markets;
