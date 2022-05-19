top token on klaytn Bitquery

{
ethereum(network: klaytn) {
transfers(options: {desc: "count", limit: 100}) {
currency {
decimals
name
symbol
address
tokenType
tokenId
}
count
senders: count(uniq: senders)
receivers: count(uniq: receivers)
days: count(uniq: dates)
from_date: minimum(of: date)
till_date: maximum(of: date)
amount
}
}
}

Monthly Transactions
{
ethereum(network: klaytn) {
transactions {
count
date {
date(format: "%y-%m")
}
}
}
}

{
ethereum(network: klaytn) {
transfers {
count
date{
date(format:"%y-%m")
}
}
}
}

Total sending and receivers on klaytn
{
ethereum(network: klaytn) {
transfers {
receivers: count(uniq: receivers)
senders: count(uniq: senders)
count(uniq: currencies)
}
}
}

take and makers

{
ethereum(network: klaytn) {
dexTrades {
count
tradeAmount(calculate: sum, in: USD)
takers: count(uniq: takers)
makers: count(uniq: makers)
}
}
}

https://graphql.bitquery.io/ide/Top-10000-token-on-KLAYTN API-KEY=BQYLQhk94Qs352vFsjgw2Q19aaJuvQRh

Nomics Cryptocurrency & Bitcoin API (1.0.0)
curl "https://api.nomics.com/v1/currencies/ticker?key=bb9cc2c49abd3a08a916e2935007d0758057425b&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&platform-currency=ETH&per-page=100&page=1"
