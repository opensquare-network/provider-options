const kintsugiOptions = {
  "typesBundle": {
    "spec": {
      "interbtc-parachain": {
        "types": {
          "BalanceWrapper": { "currencyId": "CurrencyId", "amount": "i128" },
          "CurrencyId": { "_enum": { "Token": "TokenSymbol" } },
          "InterbtcPrimitivesCurrencyId": { "_enum": { "Token": "InterbtcPrimitivesTokenSymbol" } },
          "FundAccountJsonRpcRequest": { "account_id": "AccountId", "currency_id": "InterbtcPrimitivesCurrencyId" },
          "H256Le": "H256",
          "SignedFixedPoint": "FixedU128",
          "TokenSymbol": { "_enum": { "DOT": 0, "INTERBTC": 1, "INTR": 2, "KSM": 10, "KBTC": 11, "KINT": 12 } },
          "InterbtcPrimitivesTokenSymbol": {
            "_enum": {
              "DOT": 0,
              "INTERBTC": 1,
              "INTR": 2,
              "KSM": 10,
              "KBTC": 11,
              "KINT": 12
            }
          },
          "UnsignedFixedPoint": "FixedU128",
          "VaultCurrencyPair": { "collateral": "CurrencyId", "wrapped": "CurrencyId" },
          "VaultId": { "account_id": "AccountId", "currencies": "VaultCurrencyPair" }
        }, "rpc": {
          "verifyBlockHeaderInclusion": {
            "description": "Verify that the block with the given hash is included",
            "params": [{ "name": "block_hash", "type": "H256Le" }],
            "type": "void",
            "aliasSection": "btcRelay"
          },
          "getIssueRequests": {
            "description": "Get all issue request IDs for a particular account",
            "params": [{ "name": "account_id", "type": "AccountId" }],
            "type": "Vec<H256>",
            "aliasSection": "issue"
          },
          "getVaultIssueRequests": {
            "description": "Get all issue request IDs for a particular vault",
            "params": [{ "name": "vault_id", "type": "AccountId" }],
            "type": "Vec<H256>",
            "aliasSection": "issue"
          },
          "collateralToWrapped": {
            "description": "Collateral to Wrapped exchange rate",
            "params": [{ "name": "amount", "type": "BalanceWrapper" }, { "name": "currency_id", "type": "CurrencyId" }],
            "type": "BalanceWrapper",
            "aliasSection": "oracle"
          },
          "wrappedToCollateral": {
            "description": "Wrapped to Collateral exchange rate",
            "params": [{ "name": "amount", "type": "BalanceWrapper" }, { "name": "currency_id", "type": "CurrencyId" }],
            "type": "BalanceWrapper",
            "aliasSection": "oracle"
          },
          "getRedeemRequests": {
            "description": "Get all redeem request IDs for a particular account",
            "params": [{ "name": "account_id", "type": "AccountId" }],
            "type": "Vec<H256>",
            "aliasSection": "redeem"
          },
          "getVaultRedeemRequests": {
            "description": "Get all redeem request IDs for a particular vault",
            "params": [{ "name": "vault_id", "type": "AccountId" }],
            "type": "Vec<H256>",
            "aliasSection": "redeem"
          },
          "getRefundRequests": {
            "description": "Get all refund request IDs for a particular account",
            "params": [{ "name": "account_id", "type": "AccountId" }],
            "type": "Vec<H256>",
            "aliasSection": "refund"
          },
          "getRefundRequestsByIssueId": {
            "description": "Get all refund request IDs for a particular issue ID",
            "params": [{ "name": "issue_id", "type": "H256" }],
            "type": "H256",
            "aliasSection": "refund"
          },
          "getVaultRefundRequests": {
            "description": "Get all refund request IDs for a particular vault",
            "params": [{ "name": "account_id", "type": "AccountId" }],
            "type": "Vec<H256>",
            "aliasSection": "refund"
          },
          "isTransactionInvalid": {
            "description": "Determine if the RawTx is invalid for the specified VaultId",
            "params": [{ "name": "vault_id", "type": "VaultId" }, { "name": "raw_tx", "type": "Vec<u8>" }],
            "type": "void",
            "aliasSection": "relay"
          },
          "getNewVaultReplaceRequests": {
            "description": "Get all replace request IDs to a particular vault",
            "params": [{ "name": "account_id", "type": "AccountId" }],
            "type": "Vec<H256>",
            "aliasSection": "replace"
          },
          "getOldVaultReplaceRequests": {
            "description": "Get all replace request IDs from a particular vault",
            "params": [{ "name": "account_id", "type": "AccountId" }],
            "type": "Vec<H256>",
            "aliasSection": "replace"
          },
          "getCollateralizationFromVault": {
            "description": "Returns the collateralization of a specific vault",
            "params": [{ "name": "vault", "type": "VaultId" }, { "name": "only_issued", "type": "bool" }],
            "type": "UnsignedFixedPoint",
            "aliasSection": "vaultRegistry"
          },
          "getCollateralizationFromVaultAndCollateral": {
            "description": "Returns the collateralization of a specific vault and collateral",
            "params": [{ "name": "vault", "type": "VaultId" }, {
              "name": "collateral",
              "type": "BalanceWrapper"
            }, { "name": "only_issued", "type": "bool" }],
            "type": "UnsignedFixedPoint",
            "aliasSection": "vaultRegistry"
          },
          "getIssueableTokensFromVault": {
            "description": "Get the amount of tokens a vault can issue",
            "params": [{ "name": "vault", "type": "VaultId" }],
            "type": "BalanceWrapper",
            "aliasSection": "vaultRegistry"
          },
          "getPremiumRedeemVaults": {
            "description": "Get all vaults below the premium redeem threshold.",
            "params": [],
            "type": "Vec<(VaultId, BalanceWrapper)>",
            "aliasSection": "vaultRegistry"
          },
          "getRequiredCollateralForVault": {
            "description": "Get the amount of collateral required for the given vault to be at the current SecureCollateralThreshold with the current exchange rate",
            "params": [{ "name": "vault_id", "type": "VaultId" }],
            "type": "BalanceWrapper",
            "aliasSection": "vaultRegistry"
          },
          "getRequiredCollateralForWrapped": {
            "description": "Get the amount of collateral required to issue an amount of InterBTC",
            "params": [{ "name": "amount_btc", "type": "BalanceWrapper" }, {
              "name": "currency_id",
              "type": "CurrencyId"
            }],
            "type": "BalanceWrapper",
            "aliasSection": "vaultRegistry"
          },
          "getVaultCollateral": {
            "description": "Get the vault's collateral (excluding nomination)",
            "params": [{ "name": "vault_id", "type": "VaultId" }],
            "type": "BalanceWrapper",
            "aliasSection": "vaultRegistry"
          },
          "getVaultTotalCollateral": {
            "description": "Get the vault's collateral (including nomination)",
            "params": [{ "name": "vault_id", "type": "VaultId" }],
            "type": "BalanceWrapper",
            "aliasSection": "vaultRegistry"
          },
          "getVaultsByAccountId": {
            "description": "Get all vaults that are registered using the given account _id",
            "params": [{ "name": "account_id", "type": "AccountId" }],
            "type": "Vec<VaultId>",
            "aliasSection": "vaultRegistry"
          },
          "getVaultsWithIssuableTokens": {
            "description": "Get all vaults with non-zero issuable tokens, ordered in descending order of this amount",
            "params": [],
            "type": "Vec<(VaultId, BalanceWrapper)>",
            "aliasSection": "vaultRegistry"
          },
          "getVaultsWithRedeemableTokens": {
            "description": "Get all vaults with non-zero redeemable tokens, ordered in descending order of this amount",
            "params": [],
            "type": "Vec<(VaultId, BalanceWrapper)>",
            "aliasSection": "vaultRegistry"
          }
        }, "providerRpc": {
          "btcRelay": {
            "verifyBlockHeaderInclusion": {
              "description": "Verify that the block with the given hash is included",
              "params": [{ "name": "block_hash", "type": "H256Le" }],
              "type": "void"
            }
          },
          "issue": {
            "getIssueRequests": {
              "description": "Get all issue request IDs for a particular account",
              "params": [{ "name": "account_id", "type": "AccountId" }],
              "type": "Vec<H256>"
            },
            "getVaultIssueRequests": {
              "description": "Get all issue request IDs for a particular vault",
              "params": [{ "name": "vault_id", "type": "AccountId" }],
              "type": "Vec<H256>"
            }
          },
          "oracle": {
            "collateralToWrapped": {
              "description": "Collateral to Wrapped exchange rate",
              "params": [{ "name": "amount", "type": "BalanceWrapper" }, {
                "name": "currency_id",
                "type": "CurrencyId"
              }],
              "type": "BalanceWrapper"
            },
            "wrappedToCollateral": {
              "description": "Wrapped to Collateral exchange rate",
              "params": [{ "name": "amount", "type": "BalanceWrapper" }, {
                "name": "currency_id",
                "type": "CurrencyId"
              }],
              "type": "BalanceWrapper"
            }
          },
          "redeem": {
            "getRedeemRequests": {
              "description": "Get all redeem request IDs for a particular account",
              "params": [{ "name": "account_id", "type": "AccountId" }],
              "type": "Vec<H256>"
            },
            "getVaultRedeemRequests": {
              "description": "Get all redeem request IDs for a particular vault",
              "params": [{ "name": "vault_id", "type": "AccountId" }],
              "type": "Vec<H256>"
            }
          },
          "refund": {
            "getRefundRequests": {
              "description": "Get all refund request IDs for a particular account",
              "params": [{ "name": "account_id", "type": "AccountId" }],
              "type": "Vec<H256>"
            },
            "getRefundRequestsByIssueId": {
              "description": "Get all refund request IDs for a particular issue ID",
              "params": [{ "name": "issue_id", "type": "H256" }],
              "type": "H256"
            },
            "getVaultRefundRequests": {
              "description": "Get all refund request IDs for a particular vault",
              "params": [{ "name": "account_id", "type": "AccountId" }],
              "type": "Vec<H256>"
            }
          },
          "relay": {
            "isTransactionInvalid": {
              "description": "Determine if the RawTx is invalid for the specified VaultId",
              "params": [{ "name": "vault_id", "type": "VaultId" }, { "name": "raw_tx", "type": "Vec<u8>" }],
              "type": "void"
            }
          },
          "replace": {
            "getNewVaultReplaceRequests": {
              "description": "Get all replace request IDs to a particular vault",
              "params": [{ "name": "account_id", "type": "AccountId" }],
              "type": "Vec<H256>"
            },
            "getOldVaultReplaceRequests": {
              "description": "Get all replace request IDs from a particular vault",
              "params": [{ "name": "account_id", "type": "AccountId" }],
              "type": "Vec<H256>"
            }
          },
          "vaultRegistry": {
            "getCollateralizationFromVault": {
              "description": "Returns the collateralization of a specific vault",
              "params": [{ "name": "vault", "type": "VaultId" }, { "name": "only_issued", "type": "bool" }],
              "type": "UnsignedFixedPoint"
            },
            "getCollateralizationFromVaultAndCollateral": {
              "description": "Returns the collateralization of a specific vault and collateral",
              "params": [{ "name": "vault", "type": "VaultId" }, {
                "name": "collateral",
                "type": "BalanceWrapper"
              }, { "name": "only_issued", "type": "bool" }],
              "type": "UnsignedFixedPoint"
            },
            "getIssueableTokensFromVault": {
              "description": "Get the amount of tokens a vault can issue",
              "params": [{ "name": "vault", "type": "VaultId" }],
              "type": "BalanceWrapper"
            },
            "getPremiumRedeemVaults": {
              "description": "Get all vaults below the premium redeem threshold.",
              "params": [],
              "type": "Vec<(VaultId, BalanceWrapper)>"
            },
            "getRequiredCollateralForVault": {
              "description": "Get the amount of collateral required for the given vault to be at the current SecureCollateralThreshold with the current exchange rate",
              "params": [{ "name": "vault_id", "type": "VaultId" }],
              "type": "BalanceWrapper"
            },
            "getRequiredCollateralForWrapped": {
              "description": "Get the amount of collateral required to issue an amount of InterBTC",
              "params": [{ "name": "amount_btc", "type": "BalanceWrapper" }, {
                "name": "currency_id",
                "type": "CurrencyId"
              }],
              "type": "BalanceWrapper"
            },
            "getVaultCollateral": {
              "description": "Get the vault's collateral (excluding nomination)",
              "params": [{ "name": "vault_id", "type": "VaultId" }],
              "type": "BalanceWrapper"
            },
            "getVaultTotalCollateral": {
              "description": "Get the vault's collateral (including nomination)",
              "params": [{ "name": "vault_id", "type": "VaultId" }],
              "type": "BalanceWrapper"
            },
            "getVaultsByAccountId": {
              "description": "Get all vaults that are registered using the given account _id",
              "params": [{ "name": "account_id", "type": "AccountId" }],
              "type": "Vec<VaultId>"
            },
            "getVaultsWithIssuableTokens": {
              "description": "Get all vaults with non-zero issuable tokens, ordered in descending order of this amount",
              "params": [],
              "type": "Vec<(VaultId, BalanceWrapper)>"
            },
            "getVaultsWithRedeemableTokens": {
              "description": "Get all vaults with non-zero redeemable tokens, ordered in descending order of this amount",
              "params": [],
              "type": "Vec<(VaultId, BalanceWrapper)>"
            }
          }
        }
      }
    }
  }, "rpc": {
    "btcRelay": {
      "verifyBlockHeaderInclusion": {
        "description": "Verify that the block with the given hash is included",
        "params": [{ "name": "block_hash", "type": "H256Le" }],
        "type": "void"
      }
    },
    "issue": {
      "getIssueRequests": {
        "description": "Get all issue request IDs for a particular account",
        "params": [{ "name": "account_id", "type": "AccountId" }],
        "type": "Vec<H256>"
      },
      "getVaultIssueRequests": {
        "description": "Get all issue request IDs for a particular vault",
        "params": [{ "name": "vault_id", "type": "AccountId" }],
        "type": "Vec<H256>"
      }
    },
    "oracle": {
      "collateralToWrapped": {
        "description": "Collateral to Wrapped exchange rate",
        "params": [{ "name": "amount", "type": "BalanceWrapper" }, { "name": "currency_id", "type": "CurrencyId" }],
        "type": "BalanceWrapper"
      },
      "wrappedToCollateral": {
        "description": "Wrapped to Collateral exchange rate",
        "params": [{ "name": "amount", "type": "BalanceWrapper" }, { "name": "currency_id", "type": "CurrencyId" }],
        "type": "BalanceWrapper"
      }
    },
    "redeem": {
      "getRedeemRequests": {
        "description": "Get all redeem request IDs for a particular account",
        "params": [{ "name": "account_id", "type": "AccountId" }],
        "type": "Vec<H256>"
      },
      "getVaultRedeemRequests": {
        "description": "Get all redeem request IDs for a particular vault",
        "params": [{ "name": "vault_id", "type": "AccountId" }],
        "type": "Vec<H256>"
      }
    },
    "refund": {
      "getRefundRequests": {
        "description": "Get all refund request IDs for a particular account",
        "params": [{ "name": "account_id", "type": "AccountId" }],
        "type": "Vec<H256>"
      },
      "getRefundRequestsByIssueId": {
        "description": "Get all refund request IDs for a particular issue ID",
        "params": [{ "name": "issue_id", "type": "H256" }],
        "type": "H256"
      },
      "getVaultRefundRequests": {
        "description": "Get all refund request IDs for a particular vault",
        "params": [{ "name": "account_id", "type": "AccountId" }],
        "type": "Vec<H256>"
      }
    },
    "relay": {
      "isTransactionInvalid": {
        "description": "Determine if the RawTx is invalid for the specified VaultId",
        "params": [{ "name": "vault_id", "type": "VaultId" }, { "name": "raw_tx", "type": "Vec<u8>" }],
        "type": "void"
      }
    },
    "replace": {
      "getNewVaultReplaceRequests": {
        "description": "Get all replace request IDs to a particular vault",
        "params": [{ "name": "account_id", "type": "AccountId" }],
        "type": "Vec<H256>"
      },
      "getOldVaultReplaceRequests": {
        "description": "Get all replace request IDs from a particular vault",
        "params": [{ "name": "account_id", "type": "AccountId" }],
        "type": "Vec<H256>"
      }
    },
    "vaultRegistry": {
      "getCollateralizationFromVault": {
        "description": "Returns the collateralization of a specific vault",
        "params": [{ "name": "vault", "type": "VaultId" }, { "name": "only_issued", "type": "bool" }],
        "type": "UnsignedFixedPoint"
      },
      "getCollateralizationFromVaultAndCollateral": {
        "description": "Returns the collateralization of a specific vault and collateral",
        "params": [{ "name": "vault", "type": "VaultId" }, {
          "name": "collateral",
          "type": "BalanceWrapper"
        }, { "name": "only_issued", "type": "bool" }],
        "type": "UnsignedFixedPoint"
      },
      "getIssueableTokensFromVault": {
        "description": "Get the amount of tokens a vault can issue",
        "params": [{ "name": "vault", "type": "VaultId" }],
        "type": "BalanceWrapper"
      },
      "getPremiumRedeemVaults": {
        "description": "Get all vaults below the premium redeem threshold.",
        "params": [],
        "type": "Vec<(VaultId, BalanceWrapper)>"
      },
      "getRequiredCollateralForVault": {
        "description": "Get the amount of collateral required for the given vault to be at the current SecureCollateralThreshold with the current exchange rate",
        "params": [{ "name": "vault_id", "type": "VaultId" }],
        "type": "BalanceWrapper"
      },
      "getRequiredCollateralForWrapped": {
        "description": "Get the amount of collateral required to issue an amount of InterBTC",
        "params": [{ "name": "amount_btc", "type": "BalanceWrapper" }, { "name": "currency_id", "type": "CurrencyId" }],
        "type": "BalanceWrapper"
      },
      "getVaultCollateral": {
        "description": "Get the vault's collateral (excluding nomination)",
        "params": [{ "name": "vault_id", "type": "VaultId" }],
        "type": "BalanceWrapper"
      },
      "getVaultTotalCollateral": {
        "description": "Get the vault's collateral (including nomination)",
        "params": [{ "name": "vault_id", "type": "VaultId" }],
        "type": "BalanceWrapper"
      },
      "getVaultsByAccountId": {
        "description": "Get all vaults that are registered using the given account _id",
        "params": [{ "name": "account_id", "type": "AccountId" }],
        "type": "Vec<VaultId>"
      },
      "getVaultsWithIssuableTokens": {
        "description": "Get all vaults with non-zero issuable tokens, ordered in descending order of this amount",
        "params": [],
        "type": "Vec<(VaultId, BalanceWrapper)>"
      },
      "getVaultsWithRedeemableTokens": {
        "description": "Get all vaults with non-zero redeemable tokens, ordered in descending order of this amount",
        "params": [],
        "type": "Vec<(VaultId, BalanceWrapper)>"
      }
    }
  }
}

module.exports = kintsugiOptions;
