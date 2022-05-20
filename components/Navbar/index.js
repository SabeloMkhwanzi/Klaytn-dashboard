import React from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  useDisclosure,
  Stack,
  Text,
} from "@chakra-ui/react";

import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { GiTicket } from "react-icons/gi";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

//import WalletButton from "./WalletButton";
import ButtonConnect from "../ButtonConnect/index";

export const ColorModeSwitcher = () => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      aria-label={`Switch to ${text} mode`}
    />
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const backgroundColor = useColorModeValue("white", "gray.900");
  const TextColorMode = useColorModeValue("gray.500", "gray.400");

  return (
    <>
      <Box bg={backgroundColor} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            color="purple.600"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={5} alignItems={"center"}>
            <Text
              fontSize="4xl"
              fontWeight="medium"
              fontFamily="fantasy"
              letterSpacing={5}
              fontStyle="normal"
              bgGradient="linear(to-l, #FC770A, #850000)"
              bgClip="text"
            >
              KLAYTN
            </Text>
            <Text
              fontSize="2xl"
              fontWeight="extrabold"
              fontFamily="monospace"
              letterSpacing={2}
              fontStyle="normal"
              //bgGradient="linear(to-l, #FC770A, #850000)"
              //bgClip="text"
            >
              DEX DASHBOARD
            </Text>
            {/* // #BB0149 // #FC770A // #850000 */}
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Stack direction={"row"} spacing={12} ml="10rem">
                <Link
                  py={3}
                  textAlign="center"
                  color={TextColorMode}
                  fontSize="md"
                  fontWeight="semibold"
                  textTransform="uppercase"
                  letterSpacing={2}
                  _hover={{
                    textDecorationColor: "red.300",
                  }}
                  href={"/"}
                >
                  Home
                </Link>
                <Link
                  py={3}
                  color={TextColorMode}
                  fontSize="md"
                  fontWeight="semibold"
                  textTransform="uppercase"
                  letterSpacing={2}
                  href={"claimswap"}
                >
                  ClaimSwap Analytics
                </Link>
                <Link
                  py={3}
                  color={TextColorMode}
                  fontSize="md"
                  fontWeight="semibold"
                  textTransform="uppercase"
                  letterSpacing={2}
                  href={"pools"}
                >
                  Pools
                </Link>
                <Link
                  py={3}
                  color={TextColorMode}
                  fontSize="md"
                  fontWeight="semibold"
                  textTransform="uppercase"
                  letterSpacing={2}
                  href={"Tokens"}
                >
                  Tokens
                </Link>
                <Link
                  py={3}
                  color={TextColorMode}
                  fontSize="md"
                  fontWeight="semibold"
                  textTransform="uppercase"
                  letterSpacing={2}
                  href={"markets"}
                >
                  klaytn Markets
                </Link>
              </Stack>
            </HStack>
          </HStack>

          <Flex alignItems={"center"}>
            <ButtonConnect />
            <ColorModeSwitcher variant="ghost" size="sm" mr={4} />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link
                px={2}
                py={1}
                color={TextColorMode}
                fontSize="md"
                fontWeight="semibold"
                textTransform="uppercase"
                letterSpacing={2}
                href="/"
              >
                Home
              </Link>
              <Link
                px={2}
                py={1}
                color={TextColorMode}
                fontSize="md"
                fontWeight="semibold"
                textTransform="uppercase"
                letterSpacing={3}
                href={"myassets"}
              >
                ClaimSwap Analytics
              </Link>
              <Link
                px={2}
                py={1}
                color={TextColorMode}
                fontSize="md"
                fontWeight="semibold"
                textTransform="uppercase"
                letterSpacing={3}
                href={"myassets"}
              >
                Pools
              </Link>
              <Link
                px={2}
                py={1}
                color={TextColorMode}
                fontSize="md"
                fontWeight="semibold"
                textTransform="uppercase"
                letterSpacing={3}
                href={"myassets"}
              >
                Tokens
              </Link>
              <Link
                px={2}
                py={1}
                color={TextColorMode}
                fontSize="md"
                fontWeight="semibold"
                textTransform="uppercase"
                letterSpacing={3}
                href={"myassets"}
              >
                klaytn Markets
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
