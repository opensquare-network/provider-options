const shibuya = {
  "types": [
    {
      "minmax": [
        0,
        null
      ],
      "types": {
        "Keys": "AccountId",
        "Address": "MultiAddress",
        "LookupSource": "MultiAddress",
        "AmountOf": "Amount",
        "Amount": "i128",
        "SmartContract": {
          "_enum": {
            "Evm": "H160",
            "Wasm": "AccountId"
          }
        },
        "EraStakingPoints": {
          "total": "Balance",
          "stakers": "BTreeMap<AccountId, Balance>",
          "formerStakedEra": "EraIndex",
          "claimedRewards": "Balance"
        },
        "PalletDappsStakingEraStakingPoints": {
          "total": "Balance",
          "stakers": "BTreeMap<AccountId, Balance>",
          "formerStakedEra": "EraIndex",
          "claimedRewards": "Balance"
        },
        "EraRewardAndStake": {
          "rewards": "Balance",
          "staked": "Balance"
        },
        "PalletDappsStakingEraRewardAndStake": {
          "rewards": "Balance",
          "staked": "Balance"
        },
        "EraIndex": "u32"
      }
    }
  ]
}

const shibuyaOptions = {
  "typesBundle": {
    "spec": {
      shibuya,
    }
  }
}

module.exports = shibuyaOptions;
