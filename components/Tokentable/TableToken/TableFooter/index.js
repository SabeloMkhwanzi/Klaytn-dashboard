import React, { useEffect } from "react";

import { Box, Button } from "@chakra-ui/react";

const TableFooter = ({ range, setPage, page, slice }) => {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);
  return (
    <Box
      bgColor="white"
      padding="8px 0px"
      width="100%"
      font-weight="500"
      text-align="16px"
      color="gray.700"
      borderBottomLeftRadius="lg"
      borderBottomRightRadius="lg"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {range.map((el, index) => (
        <Button
          p="7px 14px"
          border="2px"
          cursor="pointer"
          margin-right="4px"
          margin-left="4px"
          key={index}
          onClick={() => setPage(el)}
          isAttached
          _hover={{ bg: "orange" }}
          _active={{
            bg: "blue",
            transform: "scale(0.98)",
            borderColor: "red",
          }}
          _focus={{
            boxShadow:
              "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
          }}
        >
          {el}
        </Button>
      ))}
    </Box>
  );
};

export default TableFooter;
