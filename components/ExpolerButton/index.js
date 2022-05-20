import React from "react";
import { Button, useColorModeValue } from "@chakra-ui/react";
import { IoNavigateCircleSharp } from "react-icons/gi";

function ExploreButton() {
  const ButtonColorMode = useColorModeValue("#FC770A", "#FC770A");
  const ButtonTextColor = useColorModeValue("gray.700", "gray.700");
  return (
    <>
      <Button
        textColor={ButtonTextColor}
        borderRadius="lg"
        borderColor="gray.500"
        bgColor={ButtonColorMode}
        leftIcon={<IoNavigateCircleSharp />}
        boxShadow="0px 5px 25px 0px rgba(0, 0, 0, .25);"
        fontSize="m"
        textTransform="uppercase"
        fontWeight="normal"
        as="kbd"
        letterSpacing={1}
      >
        Explore
      </Button>
    </>
  );
}

export default ExploreButton;
