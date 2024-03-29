const hydradx = {
  "types": [
    {
      "minmax": [
        0,
        null
      ],
      "types": {
        "Amount": "i128",
        "AmountOf": "Amount",
        "Address": "AccountId",
        "OrmlAccountData": {
          "free": "Balance",
          "frozen": "Balance",
          "reserved": "Balance"
        },
        "Fee": {
          "numerator": "u32",
          "denominator": "u32"
        },
        "BalanceInfo": {
          "amount": "Balance",
          "assetId": "AssetId"
        },
        "CurrencyId": "AssetId",
        "CurrencyIdOf": "AssetId",
        "Intention": {
          "who": "AccountId",
          "asset_sell": "AssetId",
          "asset_buy": "AssetId",
          "amount": "Balance",
          "discount": "bool",
          "sell_or_buy": "IntentionType"
        },
        "IntentionId": "u128",
        "IntentionType": {
          "_enum": [
            "SELL",
            "BUY"
          ]
        },
        "LookupSource": "AccountId",
        "OrderedSet": "Vec<AssetId>",
        "Price": "Balance",
        "Chain": {
          "genesisHash": "Vec<u8>",
          "lastBlockHash": "Vec<u8>"
        }
      }
    }
  ]
}

const hydradxOptions = {
  "typesBundle": {
    "spec": {
      "hydra-dx": hydradx,
    }
  }
}

module.exports = hydradxOptions;
