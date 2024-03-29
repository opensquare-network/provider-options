const definitions = {
  "types": [
    {
      "minmax": [
        0,
        null
      ],
      "types": {
        "ParachainAccountIdOf": "AccountId",
        "Proof": {
          "leafHash": "Hash",
          "sortedHashes": "Vec<Hash>"
        },
        "ProxyType": {
          "_enum": [
            "Any",
            "NonTransfer",
            "Governance",
            "_Staking",
            "NonProxy"
          ]
        },
        "RelayChainAccountId": "AccountId",
        "RootHashOf": "Hash"
      }
    }
  ]
}

const altairOptions = {
  typesBundle: {
    spec: {
      altair: definitions,
    }
  }
}

module.exports = altairOptions;
