const definitions = {
  "types": [
    {
      "minmax": [
        0,
        null
      ],
      "types": {
        "AnchorData": {
          "id": "Hash",
          "docRoot": "Hash",
          "anchoredBlock": "u64"
        },
        "ChainId": "u8",
        "chainbridge::ChainId": "u8",
        "DepositNonce": "u64",
        "Fee": {
          "key": "Hash",
          "price": "Balance"
        },
        "ParachainAccountIdOf": "AccountId",
        "PreCommitData": {
          "signingRoot": "Hash",
          "identity": "AccountId",
          "expirationBlock": "u64"
        },
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
        "ResourceId": "[u8; 32]",
        "RelayChainAccountId": "AccountId",
        "RootHashOf": "Hash"
      }
    }
  ]
};

const cfgOptions = {
  typesBundle: {
    spec: {
      centrifuge: definitions,
    }
  }
}

module.exports = cfgOptions;
