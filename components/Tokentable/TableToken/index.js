import {
  Avatar,
  Stack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import React, { useState } from "react";

import useTable from "../../../hooks/useTable";
import TableFooter from "./TableFooter";

const TableToken = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  return (
    <>
      <Table variant="simple">
        <Thead bgColor="gray.500" transition="all 0.25s ease" borderRadius="md">
          <Tr>
            <Th
              color="gray.300"
              p="12px"
              fontWeight="md"
              textAlight="left"
              fontSize="md"
              borderTopLeftRadius="lg"
            >
              Contract Name
            </Th>
            <Th
              color="gray.300"
              p="12px"
              fontWeight="md"
              textAlight="left"
              fontSize="md"
              bgColor
            >
              Ticker Symbol
            </Th>
            <Th
              color="gray.300"
              p="12px"
              fontWeight="md"
              textAlight="left"
              fontSize="md"
              bgColor
            >
              Quote Rate
            </Th>
            <Th
              color="gray.300"
              p="12px"
              fontWeight="md"
              textAlight="left"
              fontSize="md"
              bgColor
            >
              Swap Count (24h)
            </Th>
            <Th
              color="gray.300"
              p="12px"
              fontWeight="md"
              textAlight="left"
              fontSize="md"
              bgColor
              borderTopRightRadius="lg"
            >
              Total Liquidity
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {slice.map((el) => (
            <Tr bg="#f9f9f9" cursor="auto" key={el.id}>
              <Td p="12px" fontSize="md" color="GrayText">
                <Stack direction="row">
                  <Avatar name={el.logo_url} src={el.logo_url} />
                  {el.contract_name}
                </Stack>
              </Td>
              <Td P="12px" fontSize="sm" color="GrayText">
                {el.contract_ticker_symbol}
              </Td>
              <Td P="12px" fontSize="sm" color="GrayText">
                {el.quote_rate}
              </Td>
              <Td P="12px" fontSize="sm" color="GrayText">
                {el.swap_count_24h}
              </Td>
              <Td P="12px" fontSize="sm" color="GrayText">
                {el.total_liquidity_quote}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
};

export default TableToken;
