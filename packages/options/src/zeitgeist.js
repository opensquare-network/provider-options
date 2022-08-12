const zeitgeistOptions = {
  "typesBundle": {
    "spec": {
      "zeitgeist": {
        "alias": {
          "tokens": {
            "AccountData": "TokensAccountData"
          }
        },
        "types": [
          {
            "minmax": [
              0,
              null
            ],
            "types": {
              "Juror": {
                "status": "JurorStatus"
              },
              "JurorStatus": {
                "_enum": [
                  "OK",
                  "Tardy"
                ]
              },
              "OrderSide": {
                "_enum": [
                  "Bid",
                  "Ask"
                ]
              },
              "Order": {
                "side": "OrderSide",
                "maker": "AccountId",
                "taker": "Option<AccountId>",
                "asset": "Asset",
                "total": "Balance",
                "price": "Balance",
                "filled": "Balance"
              },
              "MarketCreation": {
                "_enum": [
                  "Permissionless",
                  "Advised"
                ]
              },
              "MarketPeriod": {
                "_enum": {
                  "Block": "Range<BlockNumber>",
                  "Timestamp": "Range<Moment>"
                }
              },
              "MarketId": "u128",
              "MarketType": {
                "_enum": {
                  "Categorical": "u16",
                  "Scalar": "RangeInclusive<u128>"
                }
              },
              "MarketStatus": {
                "_enum": [
                  "Proposed",
                  "Active",
                  "Suspended",
                  "Closed",
                  "CollectingSubsidy",
                  "InsufficientSubsidy",
                  "Reported",
                  "Disputed",
                  "Resolved"
                ]
              },
              "Market": {
                "creator": "AccountId",
                "creation": "MarketCreation",
                "creatorFee": "u8",
                "oracle": "AccountId",
                "metadata": "Vec<u8>",
                "marketType": "MarketType",
                "period": "MarketPeriod",
                "scoringRule": "ScoringRule",
                "status": "MarketStatus",
                "report": "Option<Report>",
                "resolvedOutcome": "Option<OutcomeReport>",
                "disputeMechanism": "MarketDisputeMechanism"
              },
              "ScoringRule": {
                "_enum": [
                  "CPMM",
                  "RikiddoSigmoidFeeMarketEma"
                ]
              },
              "OutcomeReport": {
                "_enum": {
                  "Categorical": "u16",
                  "Scalar": "u128"
                }
              },
              "Report": {
                "at": "BlockNumber",
                "by": "AccountId",
                "outcome": "OutcomeReport"
              },
              "MarketDispute": {
                "at": "BlockNumber",
                "by": "AccountId",
                "outcome": "OutcomeReport"
              },
              "MarketDisputeMechanism": {
                "_enum": {
                  "Authorized": "AccountId",
                  "Court": null,
                  "SimpleDisputes": null
                }
              },
              "EmaConfig": {
                "emaPeriod": "Timespan",
                "emaPeriodEstimateAfter": "Option<Timespan>",
                "smoothing": "u128"
              },
              "EmaMarketVolume": {
                "config": "EmaConfig",
                "ema": "u128",
                "multiplier": "u128",
                "lastTime": "UnixTimestamp",
                "state": "MarketVolumeState",
                "startTime": "UnixTimestamp",
                "volumesPerPeriod": "u128"
              },
              "FeeSigmoid": {
                "config": "FeeSigmoidConfig"
              },
              "FeeSigmoidConfig": {
                "m": "i128",
                "p": "i128",
                "n": "i128",
                "initialFee": "i128",
                "minRevenue": "i128"
              },
              "MarketVolumeState": {
                "_enum": [
                  "Uninitialized",
                  "DataCollectionStarted",
                  "DataCollected"
                ]
              },
              "Rikiddo": {
                "config": "RikiddoConfig",
                "fees": "FeeSigmoid",
                "maShort": "EmaMarketVolume",
                "maLong": "EmaMarketVolume"
              },
              "RikiddoConfig": {
                "initialFee": "i128",
                "log2E": "i128"
              },
              "Timespan": {
                "_enum": {
                  "Seconds": "u32",
                  "Minutes": "u32",
                  "Hours": "u32",
                  "Days": "u16",
                  "Weeks": "u16"
                }
              },
              "UnixTimestamp": "u64",
              "Pool": {
                "assets": "Vec<Asset>",
                "baseAsset": "Asset",
                "marketId": "MarketId",
                "poolStatus": "PoolStatus",
                "scoringRule": "ScoringRule",
                "swapFee": "Option<Balance>",
                "totalSubsidy": "Option<Balance>",
                "totalWeight": "Option<u128>",
                "weights": "Option<BTreeMap<Asset, u128>>"
              },
              "CommonPoolEventParams": {
                "poolId": "u128",
                "who": "AccountId"
              },
              "PoolAssetEvent": {
                "asset": "Asset",
                "bound": "Balance",
                "cpep": "CommonPoolEventParams<AccountId>",
                "transferred": "Balance"
              },
              "PoolAssetsEvent": {
                "assets": "Vec<Asset>",
                "bounds": "Vec<Balance>",
                "cpep": "CommonPoolEventParams<AccountId>",
                "transferred": "Vec<Balance>"
              },
              "PoolId": "u128",
              "PoolStatus": {
                "_enum": [
                  "Active",
                  "CollectingSubsidy",
                  "Closed",
                  "Clean",
                  "Initialized"
                ]
              },
              "SubsidyUntil": {
                "marketId": "MarketId",
                "period": "MarketPeriod"
              },
              "SwapEvent": {
                "assetAmountIn": "Balance",
                "assetAmountOut": "Balance",
                "assetBound": "Balance",
                "assetIn": "Asset",
                "assetOut": "Asset",
                "cpep": "CommonPoolEventParams<AccountId>",
                "maxPrice": "Balance"
              },
              "Address": "MultiAddress",
              "Amount": "i128",
              "AmountOf": "i128",
              "Asset": {
                "_enum": {
                  "CategoricalOutcome": "(MarketId, CategoryIndex)",
                  "ScalarOutcome": "(MarketId, ScalarPosition)",
                  "CombinatorialOutcome": null,
                  "PoolShare": "u128",
                  "Ztg": null
                }
              },
              "AuthorId": "AccountId",
              "SerdeWrapper": "Balance",
              "BlockNumber": "u64",
              "Bond": {
                "owner": "AccountId",
                "amount": "Balance"
              },
              "CategoryIndex": "u16",
              "Collator2": {
                "id": "AccountId",
                "bond": "Balance",
                "nominators": "Vec<AccountId>",
                "topNominators": "Vec<Bond>",
                "bottomNominators": "Vec<Bond>",
                "totalCounted": "Balance",
                "totalBacking": "Balance",
                "state": "CollatorStatus"
              },
              "CollatorSnapshot": {
                "bond": "Balance",
                "delegations": "Vec<Bond>",
                "total": "Balance"
              },
              "CollatorStatus": {
                "_enum": {
                  "Active": null,
                  "Idle": null,
                  "Leaving": "RoundIndex"
                }
              },
              "Currency": "Asset",
              "CurrencyIdOf": "Asset",
              "CurrencyId": "Asset",
              "DelegatorStatus": {
                "_enum": {
                  "Active": null,
                  "Leaving": "RoundIndex"
                }
              },
              "ExitQ": {
                "candidates": "Vec<AccountId>",
                "nominatorsLeaving": "Vec<AccountId>",
                "candidateSchedule": "Vec<(AccountId, RoundIndex)>",
                "nominatorSchedule": "Vec<(AccountId, Option<AccountId>, RoundIndex)>"
              },
              "Index": "u64",
              "InflationInfo": {
                "expect": "RangeBalance",
                "annual": "RangePerbill",
                "round": "RangePerbill"
              },
              "Lookup": "MultiAddress",
              "MarketIdOf": "u128",
              "MaxRuntimeUsize": "u64",
              "Moment": "u64",
              "MultiHash": {
                "_enum": {
                  "Sha3_384": "[u8; 50]"
                }
              },
              "Nominator2": {
                "delegations": "Vec<Bond>",
                "revocations": "Vec<AccountId>",
                "total": "Balance",
                "scheduledRevocationsCount": "u32",
                "scheduledRevocationsTotal": "Balance",
                "status": "DelegatorStatus"
              },
              "NominatorAdded": {
                "_enum": {
                  "AddedToTop": "Balance",
                  "AddedToBottom": null
                }
              },
              "OrderedSet": "Vec<Bond>",
              "OwnedValuesParams": {
                "participatedBlocks": "BlockNumber",
                "perpetualIncentives": "Balance",
                "totalIncentives": "Balance",
                "totalShares": "Balance"
              },
              "ParachainBondConfig": {
                "account": "AccountId",
                "percent": "Percent"
              },
              "RangeBalance": {
                "min": "Balance",
                "ideal": "Balance",
                "max": "Balance"
              },
              "RangePerbill": {
                "min": "Perbill",
                "ideal": "Perbill",
                "max": "Perbill"
              },
              "RelayChainAccountId": "AccountId32",
              "RewardInfo": {
                "totalReward": "Balance",
                "claimedReward": "Balance"
              },
              "RoundIndex": "u32",
              "RoundInfo": {
                "current": "RoundIndex",
                "first": "BlockNumber",
                "length": "u32"
              },
              "ScalarPosition": {
                "_enum": [
                  "Long",
                  "Short"
                ]
              },
              "VestingBlockNumber": "u32",
              "TokensAccountData": {
                "free": "Balance",
                "frozen": "Balance",
                "reserved": "Balance"
              }
            }
          }
        ]
      }
    }
  }
}

module.exports = zeitgeistOptions;
