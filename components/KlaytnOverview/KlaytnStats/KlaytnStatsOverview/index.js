import React from "react";
import {
  createStyles,
  Group,
  Paper,
  ThemeIcon,
  Space,
  Text,
  Avatar,
  SimpleGrid,
  Center,
  CopyButton,
  ActionIcon,
  Tooltip,
  Button,
} from "@mantine/core";
import { Box } from "@chakra-ui/react";
import {
  IconArrowUpRight,
  IconArrowDownRight,
  IconCopy,
  IconCheck,
  IconExternalLink,
} from "@tabler/icons";
import moment from "moment";

const useStyles = createStyles((theme) => ({
  root: {
    padding: theme.spacing.xl * 1.5,
  },

  Paper: {
    transition: "transform 150ms ease, box-shadow 150ms ease",

    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.md,
    },
  },

  label: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

export default function KlaytnStatsOverview({ data }) {
  const { classes } = useStyles();

  const DiffIcon =
    data.market_cap_change_percentage_24h > 0
      ? IconArrowUpRight
      : IconArrowDownRight;

  const getEllipsisTxt = (str, n = 4) => {
    if (str) {
      return `${str.slice(0, n)}...${str.slice(str.length - n)}`;
    }
    return "";
  };

  var numbro = require("numbro");
  console.log(data);
  function Copy() {
    return (
      <CopyButton
        value="0x0000000000000000000000000000000000000000"
        timeout={2000}
      >
        {({ copied, copy }) => (
          <Tooltip
            label={copied ? "Copied" : "Copy"}
            withArrow
            position="right"
          >
            <ActionIcon color={copied ? "teal" : "gray"} onClick={copy}>
              {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
            </ActionIcon>
          </Tooltip>
        )}
      </CopyButton>
    );
  }

  return (
    <>
      <Center>
        <Paper
          w={1220}
          py={10}
          px={10}
          withBorder
          radius="md"
          mb={25}
          p="md"
          component="a"
          href="#"
          className={classes.Paper}
        >
          {data.map((index) => (
            <SimpleGrid
              cols={5}
              breakpoints={[
                { maxWidth: 980, cols: 3, spacing: "md" },
                { maxWidth: 755, cols: 2, spacing: "sm" },
                { maxWidth: 600, cols: 1, spacing: "sm" },
              ]}
              key={index.id}
            >
              <Box>
                <Group spacing="xs">
                  <Avatar
                    component="a"
                    radius="md"
                    src={index.image}
                    target="_blank"
                    href="http://evmos.org/"
                    alt="evmos-logo"
                  />
                  <Text fon fw={700}>
                    {index.name}
                  </Text>
                  <Text tt="uppercase" fon>
                    {index.symbol}
                  </Text>
                </Group>
                <Group spacing="xs">
                  <Space h="4xs" />
                  <Text fw={700}>
                    {numbro(index.current_price).formatCurrency({
                      average: true,
                      mantissa: 4,
                      optionalMantissa: true,
                    })}
                  </Text>

                  <Group spacing="2xs">
                    <Text>
                      <Text
                        color={
                          numbro(index.market_cap_change_percentage_24h).format(
                            {
                              thousandSeparated: true,
                              mantissa: 2,
                            }
                          ) > 0
                            ? "teal"
                            : "red"
                        }
                      >
                        {numbro(index.market_cap_change_percentage_24h).format({
                          thousandSeparated: true,
                          mantissa: 2,
                        })}
                        %
                      </Text>
                    </Text>

                    <ThemeIcon
                      color="gray"
                      variant="subtle"
                      sx={(theme) => ({
                        color:
                          numbro(index.market_cap_change_percentage_24h).format(
                            {
                              thousandSeparated: true,
                              mantissa: 2,
                            }
                          ) > 0
                            ? theme.colors.teal[6]
                            : theme.colors.red[6],
                      })}
                      size={30}
                    >
                      <DiffIcon size={28} stroke={1.5} />
                    </ThemeIcon>
                  </Group>
                </Group>
              </Box>
              <Box>
                <Text c="dimmed" fw={500} tt="uppercase">
                  Market Cap
                </Text>
                <Space h="md" />
                <Text fw={700}>
                  {numbro(index.market_cap).formatCurrency({
                    average: true,
                    mantissa: 2,
                    optionalMantissa: true,
                  })}
                </Text>
              </Box>
              <Box>
                <Text c="dimmed" fw={500} tt="uppercase">
                  Trading Volume (24h)
                </Text>
                <Space h="md" />
                <Text fw={700}>
                  {numbro(index.total_volume).formatCurrency({
                    average: true,
                    mantissa: 2,
                    optionalMantissa: true,
                  })}
                </Text>
              </Box>
              <Box>
                <Text c="dimmed" fw={500} tt="uppercase">
                  Circulating Supply
                </Text>
                <Space h="md" />
                <Text fw={700}>
                  {numbro(index.circulating_supply).formatCurrency({
                    average: true,
                    mantissa: 2,
                    optionalMantissa: true,
                  })}
                </Text>
              </Box>
              <Box>
                <Button
                  radius="lg"
                  component="a"
                  href="https://www.klaytn.foundation/"
                  variant="subtle"
                  color="violet"
                  compact
                  rightIcon={<IconExternalLink size={14} />}
                >
                  Visit {index.name}
                </Button>
                <Space h="md" />
                <Group spacing="xs">
                  <Text>
                    {moment(index.last_updated).startOf("hours").fromNow()}
                  </Text>
                  <Copy />
                </Group>
              </Box>
            </SimpleGrid>
          ))}
        </Paper>
      </Center>
    </>
  );
}
