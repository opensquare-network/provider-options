const acala = {
  "rpc": {
    "oracle": {
      "getValue": {
        "description": "Retrieves the oracle value for a given key.",
        "params": [
          {
            "name": "providerId",
            "type": "RpcDataProviderId"
          },
          {
            "name": "key",
            "type": "OracleKey"
          },
          {
            "name": "at",
            "type": "BlockHash",
            "isHistoric": true,
            "isOptional": true
          }
        ],
        "type": "Option<TimestampedValue>",
        "isSubscription": false,
        "jsonrpc": "oracle_getValue",
        "method": "getValue",
        "section": "oracle"
      },
      "getAllValues": {
        "description": "Retrieves all oracle values.",
        "params": [
          {
            "name": "providerId",
            "type": "RpcDataProviderId"
          },
          {
            "name": "at",
            "type": "BlockHash",
            "isHistoric": true,
            "isOptional": true
          }
        ],
        "type": "Vec<(OracleKey, Option<TimestampedValue>)>",
        "isSubscription": false,
        "jsonrpc": "oracle_getAllValues",
        "method": "getAllValues",
        "section": "oracle"
      }
    },
    "tokens": {
      "queryExistentialDeposit": {
        "description": "Query Existential Deposit for a given currency.",
        "params": [
          {
            "name": "currencyId",
            "type": "CurrencyId"
          },
          {
            "name": "at",
            "type": "BlockHash",
            "isHistoric": true,
            "isOptional": true
          }
        ],
        "type": "NumberOrHex",
        "isSubscription": false,
        "jsonrpc": "tokens_queryExistentialDeposit",
        "method": "queryExistentialDeposit",
        "section": "tokens"
      }
    },
    "dex": {
      "getSupplyAmount": {
        "description": "Get supply amount",
        "params": [
          {
            "name": "supplyCurrencyId",
            "type": "CurrencyId"
          },
          {
            "name": "targetCurrencyId",
            "type": "CurrencyId"
          },
          {
            "name": "targetCurrencyAmount",
            "type": "BalanceRequest"
          }
        ],
        "type": "BalanceWrapper",
        "isSubscription": false,
        "jsonrpc": "dex_getSupplyAmount",
        "method": "getSupplyAmount",
        "section": "dex"
      },
      "getTargetAmount": {
        "description": "Get target amount",
        "params": [
          {
            "name": "supplyCurrencyId",
            "type": "CurrencyId"
          },
          {
            "name": "targetCurrencyId",
            "type": "CurrencyId"
          },
          {
            "name": "supplyCurrencyAmount",
            "type": "BalanceRequest"
          }
        ],
        "type": "BalanceWrapper",
        "isSubscription": false,
        "jsonrpc": "dex_getTargetAmount",
        "method": "getTargetAmount",
        "section": "dex"
      }
    },
    "evm": {
      "call": {
        "description": "eth call",
        "params": [
          {
            "name": "data",
            "type": "CallRequest"
          },
          {
            "name": "at",
            "type": "BlockHash",
            "isHistoric": true,
            "isOptional": true
          }
        ],
        "type": "Raw",
        "isSubscription": false,
        "jsonrpc": "evm_call",
        "method": "call",
        "section": "evm"
      },
      "estimateResources": {
        "description": "eth estimateResources",
        "params": [
          {
            "name": "from",
            "type": "H160"
          },
          {
            "name": "unsignedExtrinsic",
            "type": "Bytes"
          },
          {
            "name": "at",
            "type": "BlockHash",
            "isHistoric": true,
            "isOptional": true
          }
        ],
        "type": "EstimateResourcesResponse",
        "isSubscription": false,
        "jsonrpc": "evm_estimateResources",
        "method": "estimateResources",
        "section": "evm"
      }
    },
    "stakingPool": {
      "getAvailableUnbonded": {
        "description": "Get Available Unbonded",
        "params": [
          {
            "name": "account",
            "type": "AccountId"
          }
        ],
        "type": "BalanceInfo",
        "isSubscription": false,
        "jsonrpc": "stakingPool_getAvailableUnbonded",
        "method": "getAvailableUnbonded",
        "section": "stakingPool"
      },
      "getLiquidStakingExchangeRate": {
        "description": "get liquid staking exchange rate",
        "params": [],
        "type": "ExchangeRate",
        "isSubscription": false,
        "jsonrpc": "stakingPool_getLiquidStakingExchangeRate",
        "method": "getLiquidStakingExchangeRate",
        "section": "stakingPool"
      }
    }
  },
  "instances": {
    "council": [
      "generalCouncil"
    ]
  },
  "types": [
    {
      "minmax": [
        600,
        699
      ],
      "types": {
        "CallOf": "Call",
        "DispatchTime": {
          "_enum": {
            "At": "BlockNumber",
            "After": "BlockNumber"
          }
        },
        "ScheduleTaskIndex": "u32",
        "DelayedOrigin": {
          "delay": "BlockNumber",
          "origin": "PalletsOrigin"
        },
        "AuthorityOrigin": "DelayedOrigin",
        "StorageValue": "Vec<u8>",
        "GraduallyUpdate": {
          "key": "StorageKey",
          "targetValue": "StorageValue",
          "perBlock": "StorageValue"
        },
        "StorageKeyBytes": "Vec<u8>",
        "StorageValueBytes": "Vec<u8>",
        "RpcDataProviderId": "Text",
        "DataProviderId": "u8",
        "TimestampedValue": {
          "value": "OracleValue",
          "timestamp": "Moment"
        },
        "TimestampedValueOf": "TimestampedValue",
        "OrderedSet": "Vec<AccountId>",
        "OrmlAccountData": {
          "free": "Balance",
          "reserved": "Balance",
          "frozen": "Balance"
        },
        "OrmlBalanceLock": {
          "amount": "Balance",
          "id": "LockIdentifier"
        },
        "AuctionInfo": {
          "bid": "Option<(AccountId, Balance)>",
          "start": "BlockNumber",
          "end": "Option<BlockNumber>"
        },
        "DelayedDispatchTime": {
          "_enum": {
            "At": "BlockNumber",
            "After": "BlockNumber"
          }
        },
        "DispatchId": "u32",
        "Price": "FixedU128",
        "OrmlVestingSchedule": {
          "start": "BlockNumber",
          "period": "BlockNumber",
          "periodCount": "u32",
          "perPeriod": "Compact<Balance>"
        },
        "VestingScheduleOf": "OrmlVestingSchedule",
        "OrmlCurrencyId": "CurrencyId",
        "PoolInfo": {
          "totalShares": "Share",
          "rewards": "BTreeMap<OrmlCurrencyId, (Balance, Balance)>"
        },
        "CompactBalance": "Compact<Balance>",
        "PoolInfoV0": {
          "totalShares": "Compact<Share>",
          "totalRewards": "CompactBalance",
          "totalWithdrawnRewards": "CompactBalance"
        },
        "Share": "u128",
        "OracleValue": "Price",
        "Amount": "i128",
        "AmountOf": "Amount",
        "AuctionId": "u32",
        "AuctionIdOf": "AuctionId",
        "TokenSymbol": {
          "_enum": [
            "ACA",
            "AUSD",
            "DOT",
            "XBTC",
            "LDOT",
            "RENBTC"
          ]
        },
        "DexShare": {
          "_enum": {
            "Token": "TokenSymbol",
            "Erc20": "EvmAddress"
          }
        },
        "CurrencyId": {
          "_enum": {
            "Token": "TokenSymbol",
            "DEXShare": "(DexShare, DexShare)",
            "ERC20": "EvmAddress",
            "StableAssetPoolToken": "u32",
            "LiquidCrowdloan": "u32",
            "ForeignAsset": "u32"
          }
        },
        "CurrencyIdOf": "CurrencyId",
        "AirDropCurrencyId": {
          "_enum": [
            "KAR",
            "ACA"
          ]
        },
        "AuthoritysOriginId": {
          "_enum": [
            "Root",
            "Treasury",
            "HonzonTreasury",
            "HomaTreasury",
            "TreasuryReserve"
          ]
        },
        "AcalaDataProviderId": {
          "_enum": [
            "Aggregated",
            "Acala",
            "Band"
          ]
        },
        "TradingPair": "(CurrencyId,  CurrencyId)",
        "ChainBridgeChainId": "u8",
        "AcalaAssetMetadata": {
          "name": "Vec<u8>",
          "symbol": "Vec<u8>",
          "decimals": "u8",
          "minimalBalance": "Balance"
        },
        "NumberOrHex": "u128",
        "PalletBalanceOf": "Balance",
        "CollateralAuctionItem": {
          "refundRecipient": "AccountId",
          "currencyId": "CurrencyId",
          "initialAmount": "Compact<Balance>",
          "amount": "Compact<Balance>",
          "target": "Compact<Balance>",
          "startTime": "BlockNumber"
        },
        "DebitAuctionItem": {
          "initialAmount": "Compact<Balance>",
          "amount": "Compact<Balance>",
          "fix": "Compact<Balance>",
          "startTime": "BlockNumber"
        },
        "SurplusAuctionItem": {
          "amount": "Compact<Balance>",
          "startTime": "BlockNumber"
        },
        "LiquidationStrategy": {
          "_enum": [
            "Auction",
            "Exchange"
          ]
        },
        "OptionRate": "Option<Rate>",
        "OptionRatio": "Option<Ratio>",
        "ChangeOptionRate": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "OptionRate"
          }
        },
        "ChangeOptionRatio": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "OptionRatio"
          }
        },
        "ChangeBalance": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "Balance"
          }
        },
        "RiskManagementParams": {
          "maximumTotalDebitValue": "Balance",
          "interestRatePerSec": "Option<Rate>",
          "liquidationRatio": "Option<Rate>",
          "liquidationPenalty": "Option<Rate>",
          "requiredCollateralRatio": "Option<Rate>"
        },
        "CandidateInfoOf": "CandidateInfo",
        "TradingPairProvisionParameters": {
          "minContribution": "(Balance, Balance)",
          "targetProvision": "(Balance, Balance)",
          "accumulatedProvision": "(Balance, Balance)",
          "notBefore": "BlockNumber"
        },
        "BalanceWrapper": {
          "amount": "Balance"
        },
        "BalanceRequest": {
          "amount": "Balance"
        },
        "TradingPairStatus": {
          "_enum": {
            "Disabled": "Null",
            "Provisioning": "TradingPairProvisionParameters",
            "Enabled": "Null"
          }
        },
        "Erc20Info": {
          "address": "EvmAddress",
          "name": "Vec<u8>",
          "symbol": "Vec<u8>",
          "decimals": "u8"
        },
        "EstimateResourcesResponse": {
          "gas": "u256",
          "storage": "i32",
          "weightFee": "u256"
        },
        "EvmAccountInfo": {
          "nonce": "Index",
          "contractInfo": "Option<EvmContractInfo>"
        },
        "CodeInfo": {
          "codeSize": "u32",
          "refCount": "u32"
        },
        "EvmContractInfo": {
          "codeHash": "H256",
          "maintainer": "H160",
          "deployed": "bool"
        },
        "EvmAddress": "H160",
        "CallRequest": {
          "from": "Option<H160>",
          "to": "Option<H160>",
          "gasLimit": "Option<u32>",
          "storageLimit": "Option<u32>",
          "value": "Option<U128>",
          "data": "Option<Bytes>"
        },
        "CallInfo": {
          "exit_reason": "EvmCoreErrorExitReason",
          "value": "Vec<u8>",
          "used_gas": "U256",
          "used_storage": "i32",
          "logs": "Vec<EthereumLog>"
        },
        "CreateInfo": {
          "exit_reason": "EvmCoreErrorExitReason",
          "value": "H160",
          "used_gas": "U256",
          "used_storage": "i32",
          "logs": "Vec<EthereumLog>"
        },
        "EthereumLog": {
          "address": "H160",
          "topics": "Vec<H256>",
          "data": "Bytes"
        },
        "EvmCoreErrorExitReason": {
          "_enum": {
            "Succeed": "EvmCoreErrorExitSucceed",
            "Error": "EvmCoreErrorExitError",
            "Revert": "EvmCoreErrorExitRevert",
            "Fatal": "EvmCoreErrorExitFatal"
          }
        },
        "EvmCoreErrorExitSucceed": {
          "_enum": [
            "Stopped",
            "Returned",
            "Suicided"
          ]
        },
        "EvmCoreErrorExitError": {
          "_enum": {
            "StackUnderflow": "Null",
            "StackOverflow": "Null",
            "InvalidJump": "Null",
            "InvalidRange": "Null",
            "DesignatedInvalid": "Null",
            "CallTooDeep": "Null",
            "CreateCollision": "Null",
            "CreateContractLimit": "Null",
            "OutOfOffset": "Null",
            "OutOfGas": "Null",
            "OutOfFund": "Null",
            "PCUnderflow": "Null",
            "CreateEmpty": "Null",
            "Other": "Text",
            "InvalidCode": "Null"
          }
        },
        "EvmCoreErrorExitRevert": {
          "_enum": [
            "Reverted"
          ]
        },
        "EvmCoreErrorExitFatal": {
          "_enum": {
            "NotSupported": "Null",
            "UnhandledInterrupt": "Null",
            "CallErrorAsFatal": "EvmCoreErrorExitError",
            "Other": "Text"
          }
        },
        "AcalaStakingLedge": {
          "bonded": "Compact<Balance>",
          "unlocking": "Vec<UnlockChunk>"
        },
        "AcalaUnlockChunk": {
          "value": "Compact<Balance>",
          "era": "Compact<EraIndex>"
        },
        "RelaychainAccountId": "AccountId",
        "SlashInfo": {
          "validator": "RelaychainAccountId",
          "relaychainTokenAmount": "Balance"
        },
        "ValidatorBacking": {
          "totalInsurance": "Balance",
          "isFrozen": "bool"
        },
        "Guarantee": {
          "total": "Balance",
          "bonded": "Balance",
          "unbonding": "Option<(Balance, BlockNumber)>"
        },
        "PoolId": {
          "_enum": {
            "Loans": "CurrencyId",
            "DexIncentive": "CurrencyId",
            "DexSaving": "CurrencyId",
            "Homa": "Null"
          }
        },
        "PoolIdV0": {
          "_enum": {
            "LoansIncentive": "CurrencyId",
            "DexIncentive": "CurrencyId",
            "HomaIncentive": "Null",
            "DexSaving": "CurrencyId",
            "HomaValidatorAllowance": "AccountId"
          }
        },
        "Position": {
          "collateral": "Balance",
          "debit": "Balance"
        },
        "CID": "Vec<u8>",
        "Attributes": "BTreeMap<Vec<u8>, Vec<u8>>",
        "TokenInfoOf": {
          "metadata": "CID",
          "owner": "AccountId",
          "data": "TokenData"
        },
        "Properties": {
          "_set": {
            "_bitLength": 8,
            "Transferable": 1,
            "Burnable": 2,
            "Mintable": 4,
            "ClassPropertiesMutable": 8
          }
        },
        "ClassData": {
          "deposit": "Balance",
          "properties": "Properties",
          "attributes": "Attributes"
        },
        "TokenData": {
          "deposit": "Balance",
          "attributes": "Attributes"
        },
        "TokenId": "u64",
        "TokenIdOf": "TokenId",
        "NFTClassId": "u32",
        "ClassIdOf": "ClassId",
        "NFTBalance": "u128",
        "NFTBalanceOf": "NFTBalance",
        "ClassInfoOf": {
          "metadata": "CID",
          "totalIssuance": "TokenId",
          "owner": "AccountId",
          "data": "ClassData"
        },
        "NomineeId": "AccountId",
        "HomaUnlockChunk": {
          "value": "Balance",
          "era": "EraIndex"
        },
        "BondingLedger": {
          "total": "Balance",
          "active": "Balance",
          "unlocking": "Vec<HomaUnlockChunk>"
        },
        "OracleKey": "CurrencyId",
        "AsOriginId": "AuthoritysOriginId",
        "ProxyType": {
          "_enum": [
            "Any",
            "CancelProxy",
            "Governance",
            "Auction",
            "Swap",
            "Loan"
          ]
        },
        "AtLeast64BitUnsigned": "u128",
        "StableAssetPoolId": "u32",
        "RelayChainBlockNumberOf": "RelayChainBlockNumber",
        "SubAccountStatus": {
          "bonded": "Balance",
          "available": "Balance",
          "unbonding": "Vec<(EraIndex,Balance)>",
          "mockRewardRate": "Rate"
        },
        "Params": {
          "targetMaxFreeUnbondedRatio": "Ratio",
          "targetMinFreeUnbondedRatio": "Ratio",
          "targetUnbondingToFreeRatio": "Ratio",
          "unbondingToFreeAdjustment": "Ratio",
          "baseFeeRate": "Rate"
        },
        "StakingPoolPhase": {
          "_enum": [
            "Started",
            "RelaychainUpdated",
            "LedgerUpdated",
            "Finished"
          ]
        },
        "Ledger": {
          "bonded": "Balance",
          "unbondingToFree": "Balance",
          "freePool": "Balance",
          "toUnbondNextEra": "(Balance, Balance)"
        },
        "ChangeRate": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "Rate"
          }
        },
        "ChangeRatio": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "Ratio"
          }
        },
        "BalanceInfo": {
          "amount": "Balance"
        },
        "PolkadotAccountId": "AccountId",
        "PolkadotAccountIdOf": "PolkadotAccountId",
        "ExchangeRate": "FixedU128",
        "Rate": "FixedU128",
        "Ratio": "FixedU128",
        "PublicKey": "[u8; 20]",
        "DestAddress": "Vec<u8>",
        "PoolTokenIndex": "u32",
        "AssetId": "CurrencyId",
        "Keys": "SessionKeys1",
        "CompactAssignments": "CompactAssignmentsWith16",
        "DispatchErrorModule": "DispatchErrorModuleU8",
        "RawSolution": "RawSolutionWith16",
        "Weight": "WeightV1",
        "MultiLocation": "MultiLocationV0",
        "MultiAsset": "MultiAssetV0",
        "Xcm": "XcmV0",
        "XcmOrder": "XcmOrderV0",
        "XcmError": "XcmErrorV0",
        "Response": "ResponseV0",
        "Address": "LookupSource",
        "LookupSource": "IndicesLookupSource"
      }
    },
    {
      "minmax": [
        700,
        719
      ],
      "types": {
        "CallOf": "Call",
        "DispatchTime": {
          "_enum": {
            "At": "BlockNumber",
            "After": "BlockNumber"
          }
        },
        "ScheduleTaskIndex": "u32",
        "DelayedOrigin": {
          "delay": "BlockNumber",
          "origin": "PalletsOrigin"
        },
        "AuthorityOrigin": "DelayedOrigin",
        "StorageValue": "Vec<u8>",
        "GraduallyUpdate": {
          "key": "StorageKey",
          "targetValue": "StorageValue",
          "perBlock": "StorageValue"
        },
        "StorageKeyBytes": "Vec<u8>",
        "StorageValueBytes": "Vec<u8>",
        "RpcDataProviderId": "Text",
        "DataProviderId": "u8",
        "TimestampedValue": {
          "value": "OracleValue",
          "timestamp": "Moment"
        },
        "TimestampedValueOf": "TimestampedValue",
        "OrderedSet": "Vec<AccountId>",
        "OrmlAccountData": {
          "free": "Balance",
          "reserved": "Balance",
          "frozen": "Balance"
        },
        "OrmlBalanceLock": {
          "amount": "Balance",
          "id": "LockIdentifier"
        },
        "AuctionInfo": {
          "bid": "Option<(AccountId, Balance)>",
          "start": "BlockNumber",
          "end": "Option<BlockNumber>"
        },
        "DelayedDispatchTime": {
          "_enum": {
            "At": "BlockNumber",
            "After": "BlockNumber"
          }
        },
        "DispatchId": "u32",
        "Price": "FixedU128",
        "OrmlVestingSchedule": {
          "start": "BlockNumber",
          "period": "BlockNumber",
          "periodCount": "u32",
          "perPeriod": "Compact<Balance>"
        },
        "VestingScheduleOf": "OrmlVestingSchedule",
        "OrmlCurrencyId": "CurrencyId",
        "PoolInfo": {
          "totalShares": "Share",
          "rewards": "BTreeMap<OrmlCurrencyId, (Balance, Balance)>"
        },
        "CompactBalance": "Compact<Balance>",
        "PoolInfoV0": {
          "totalShares": "Compact<Share>",
          "totalRewards": "CompactBalance",
          "totalWithdrawnRewards": "CompactBalance"
        },
        "Share": "u128",
        "OracleValue": "Price",
        "Amount": "i128",
        "AmountOf": "Amount",
        "AuctionId": "u32",
        "AuctionIdOf": "AuctionId",
        "TokenSymbol": {
          "_enum": [
            "ACA",
            "AUSD",
            "DOT",
            "XBTC",
            "LDOT",
            "RENBTC"
          ]
        },
        "DexShare": {
          "_enum": {
            "Token": "TokenSymbol",
            "Erc20": "EvmAddress"
          }
        },
        "CurrencyId": {
          "_enum": {
            "Token": "TokenSymbol",
            "DEXShare": "(DexShare, DexShare)",
            "ERC20": "EvmAddress",
            "StableAssetPoolToken": "u32",
            "LiquidCrowdloan": "u32",
            "ForeignAsset": "u32"
          }
        },
        "CurrencyIdOf": "CurrencyId",
        "AirDropCurrencyId": {
          "_enum": [
            "KAR",
            "ACA"
          ]
        },
        "AuthoritysOriginId": {
          "_enum": [
            "Root",
            "Treasury",
            "HonzonTreasury",
            "HomaTreasury",
            "TreasuryReserve"
          ]
        },
        "AcalaDataProviderId": {
          "_enum": [
            "Aggregated",
            "Acala",
            "Band"
          ]
        },
        "TradingPair": "(CurrencyId,  CurrencyId)",
        "ChainBridgeChainId": "u8",
        "AcalaAssetMetadata": {
          "name": "Vec<u8>",
          "symbol": "Vec<u8>",
          "decimals": "u8",
          "minimalBalance": "Balance"
        },
        "NumberOrHex": "u128",
        "PalletBalanceOf": "Balance",
        "CollateralAuctionItem": {
          "refundRecipient": "AccountId",
          "currencyId": "CurrencyId",
          "initialAmount": "Compact<Balance>",
          "amount": "Compact<Balance>",
          "target": "Compact<Balance>",
          "startTime": "BlockNumber"
        },
        "DebitAuctionItem": {
          "initialAmount": "Compact<Balance>",
          "amount": "Compact<Balance>",
          "fix": "Compact<Balance>",
          "startTime": "BlockNumber"
        },
        "SurplusAuctionItem": {
          "amount": "Compact<Balance>",
          "startTime": "BlockNumber"
        },
        "LiquidationStrategy": {
          "_enum": [
            "Auction",
            "Exchange"
          ]
        },
        "OptionRate": "Option<Rate>",
        "OptionRatio": "Option<Ratio>",
        "ChangeOptionRate": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "OptionRate"
          }
        },
        "ChangeOptionRatio": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "OptionRatio"
          }
        },
        "ChangeBalance": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "Balance"
          }
        },
        "RiskManagementParams": {
          "maximumTotalDebitValue": "Balance",
          "interestRatePerSec": "Option<Rate>",
          "liquidationRatio": "Option<Rate>",
          "liquidationPenalty": "Option<Rate>",
          "requiredCollateralRatio": "Option<Rate>"
        },
        "CandidateInfoOf": "CandidateInfo",
        "TradingPairProvisionParameters": {
          "minContribution": "(Balance, Balance)",
          "targetProvision": "(Balance, Balance)",
          "accumulatedProvision": "(Balance, Balance)",
          "notBefore": "BlockNumber"
        },
        "BalanceWrapper": {
          "amount": "Balance"
        },
        "BalanceRequest": {
          "amount": "Balance"
        },
        "TradingPairStatus": {
          "_enum": {
            "Disabled": "Null",
            "Provisioning": "TradingPairProvisionParameters",
            "Enabled": "Null"
          }
        },
        "Erc20Info": {
          "address": "EvmAddress",
          "name": "Vec<u8>",
          "symbol": "Vec<u8>",
          "decimals": "u8"
        },
        "EstimateResourcesResponse": {
          "gas": "u256",
          "storage": "i32",
          "weightFee": "u256"
        },
        "EvmAccountInfo": {
          "nonce": "Index",
          "contractInfo": "Option<EvmContractInfo>"
        },
        "CodeInfo": {
          "codeSize": "u32",
          "refCount": "u32"
        },
        "EvmContractInfo": {
          "codeHash": "H256",
          "maintainer": "H160",
          "deployed": "bool"
        },
        "EvmAddress": "H160",
        "CallRequest": {
          "from": "Option<H160>",
          "to": "Option<H160>",
          "gasLimit": "Option<u32>",
          "storageLimit": "Option<u32>",
          "value": "Option<U128>",
          "data": "Option<Bytes>"
        },
        "CallInfo": {
          "exit_reason": "EvmCoreErrorExitReason",
          "value": "Vec<u8>",
          "used_gas": "U256",
          "used_storage": "i32",
          "logs": "Vec<EthereumLog>"
        },
        "CreateInfo": {
          "exit_reason": "EvmCoreErrorExitReason",
          "value": "H160",
          "used_gas": "U256",
          "used_storage": "i32",
          "logs": "Vec<EthereumLog>"
        },
        "EthereumLog": {
          "address": "H160",
          "topics": "Vec<H256>",
          "data": "Bytes"
        },
        "EvmCoreErrorExitReason": {
          "_enum": {
            "Succeed": "EvmCoreErrorExitSucceed",
            "Error": "EvmCoreErrorExitError",
            "Revert": "EvmCoreErrorExitRevert",
            "Fatal": "EvmCoreErrorExitFatal"
          }
        },
        "EvmCoreErrorExitSucceed": {
          "_enum": [
            "Stopped",
            "Returned",
            "Suicided"
          ]
        },
        "EvmCoreErrorExitError": {
          "_enum": {
            "StackUnderflow": "Null",
            "StackOverflow": "Null",
            "InvalidJump": "Null",
            "InvalidRange": "Null",
            "DesignatedInvalid": "Null",
            "CallTooDeep": "Null",
            "CreateCollision": "Null",
            "CreateContractLimit": "Null",
            "OutOfOffset": "Null",
            "OutOfGas": "Null",
            "OutOfFund": "Null",
            "PCUnderflow": "Null",
            "CreateEmpty": "Null",
            "Other": "Text",
            "InvalidCode": "Null"
          }
        },
        "EvmCoreErrorExitRevert": {
          "_enum": [
            "Reverted"
          ]
        },
        "EvmCoreErrorExitFatal": {
          "_enum": {
            "NotSupported": "Null",
            "UnhandledInterrupt": "Null",
            "CallErrorAsFatal": "EvmCoreErrorExitError",
            "Other": "Text"
          }
        },
        "AcalaStakingLedge": {
          "bonded": "Compact<Balance>",
          "unlocking": "Vec<UnlockChunk>"
        },
        "AcalaUnlockChunk": {
          "value": "Compact<Balance>",
          "era": "Compact<EraIndex>"
        },
        "RelaychainAccountId": "AccountId",
        "SlashInfo": {
          "validator": "RelaychainAccountId",
          "relaychainTokenAmount": "Balance"
        },
        "ValidatorBacking": {
          "totalInsurance": "Balance",
          "isFrozen": "bool"
        },
        "Guarantee": {
          "total": "Balance",
          "bonded": "Balance",
          "unbonding": "Option<(Balance, BlockNumber)>"
        },
        "PoolId": {
          "_enum": {
            "Loans": "CurrencyId",
            "DexIncentive": "CurrencyId",
            "DexSaving": "CurrencyId",
            "Homa": "Null"
          }
        },
        "PoolIdV0": {
          "_enum": {
            "LoansIncentive": "CurrencyId",
            "DexIncentive": "CurrencyId",
            "HomaIncentive": "Null",
            "DexSaving": "CurrencyId",
            "HomaValidatorAllowance": "AccountId"
          }
        },
        "Position": {
          "collateral": "Balance",
          "debit": "Balance"
        },
        "CID": "Vec<u8>",
        "Attributes": "BTreeMap<Vec<u8>, Vec<u8>>",
        "TokenInfoOf": {
          "metadata": "CID",
          "owner": "AccountId",
          "data": "TokenData"
        },
        "Properties": {
          "_set": {
            "_bitLength": 8,
            "Transferable": 1,
            "Burnable": 2,
            "Mintable": 4,
            "ClassPropertiesMutable": 8
          }
        },
        "ClassData": {
          "deposit": "Balance",
          "properties": "Properties",
          "attributes": "Attributes"
        },
        "TokenData": {
          "deposit": "Balance",
          "attributes": "Attributes"
        },
        "TokenId": "u64",
        "TokenIdOf": "TokenId",
        "NFTClassId": "u32",
        "ClassIdOf": "ClassId",
        "NFTBalance": "u128",
        "NFTBalanceOf": "NFTBalance",
        "ClassInfoOf": {
          "metadata": "CID",
          "totalIssuance": "TokenId",
          "owner": "AccountId",
          "data": "ClassData"
        },
        "NomineeId": "AccountId",
        "HomaUnlockChunk": {
          "value": "Balance",
          "era": "EraIndex"
        },
        "BondingLedger": {
          "total": "Balance",
          "active": "Balance",
          "unlocking": "Vec<HomaUnlockChunk>"
        },
        "OracleKey": "CurrencyId",
        "AsOriginId": "AuthoritysOriginId",
        "ProxyType": {
          "_enum": [
            "Any",
            "CancelProxy",
            "Governance",
            "Auction",
            "Swap",
            "Loan"
          ]
        },
        "AtLeast64BitUnsigned": "u128",
        "StableAssetPoolId": "u32",
        "RelayChainBlockNumberOf": "RelayChainBlockNumber",
        "SubAccountStatus": {
          "bonded": "Balance",
          "available": "Balance",
          "unbonding": "Vec<(EraIndex,Balance)>",
          "mockRewardRate": "Rate"
        },
        "Params": {
          "targetMaxFreeUnbondedRatio": "Ratio",
          "targetMinFreeUnbondedRatio": "Ratio",
          "targetUnbondingToFreeRatio": "Ratio",
          "unbondingToFreeAdjustment": "Ratio",
          "baseFeeRate": "Rate"
        },
        "StakingPoolPhase": {
          "_enum": [
            "Started",
            "RelaychainUpdated",
            "LedgerUpdated",
            "Finished"
          ]
        },
        "Ledger": {
          "bonded": "Balance",
          "unbondingToFree": "Balance",
          "freePool": "Balance",
          "toUnbondNextEra": "(Balance, Balance)"
        },
        "ChangeRate": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "Rate"
          }
        },
        "ChangeRatio": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "Ratio"
          }
        },
        "BalanceInfo": {
          "amount": "Balance"
        },
        "PolkadotAccountId": "AccountId",
        "PolkadotAccountIdOf": "PolkadotAccountId",
        "ExchangeRate": "FixedU128",
        "Rate": "FixedU128",
        "Ratio": "FixedU128",
        "PublicKey": "[u8; 20]",
        "DestAddress": "Vec<u8>",
        "PoolTokenIndex": "u32",
        "AssetId": "CurrencyId",
        "Keys": "SessionKeys1",
        "CompactAssignments": "CompactAssignmentsWith16",
        "DispatchErrorModule": "DispatchErrorModuleU8",
        "RawSolution": "RawSolutionWith16",
        "Weight": "WeightV1",
        "MultiLocation": "MultiLocationV0",
        "MultiAsset": "MultiAssetV0",
        "Xcm": "XcmV0",
        "XcmOrder": "XcmOrderV0",
        "XcmError": "XcmErrorV0",
        "Response": "ResponseV0",
        "Address": "GenericMultiAddress",
        "LookupSource": "GenericMultiAddress"
      }
    },
    {
      "minmax": [
        720,
        722
      ],
      "types": {
        "CallOf": "Call",
        "DispatchTime": {
          "_enum": {
            "At": "BlockNumber",
            "After": "BlockNumber"
          }
        },
        "ScheduleTaskIndex": "u32",
        "DelayedOrigin": {
          "delay": "BlockNumber",
          "origin": "PalletsOrigin"
        },
        "AuthorityOrigin": "DelayedOrigin",
        "StorageValue": "Vec<u8>",
        "GraduallyUpdate": {
          "key": "StorageKey",
          "targetValue": "StorageValue",
          "perBlock": "StorageValue"
        },
        "StorageKeyBytes": "Vec<u8>",
        "StorageValueBytes": "Vec<u8>",
        "RpcDataProviderId": "Text",
        "DataProviderId": "u8",
        "TimestampedValue": {
          "value": "OracleValue",
          "timestamp": "Moment"
        },
        "TimestampedValueOf": "TimestampedValue",
        "OrderedSet": "Vec<AccountId>",
        "OrmlAccountData": {
          "free": "Balance",
          "reserved": "Balance",
          "frozen": "Balance"
        },
        "OrmlBalanceLock": {
          "amount": "Balance",
          "id": "LockIdentifier"
        },
        "AuctionInfo": {
          "bid": "Option<(AccountId, Balance)>",
          "start": "BlockNumber",
          "end": "Option<BlockNumber>"
        },
        "DelayedDispatchTime": {
          "_enum": {
            "At": "BlockNumber",
            "After": "BlockNumber"
          }
        },
        "DispatchId": "u32",
        "Price": "FixedU128",
        "OrmlVestingSchedule": {
          "start": "BlockNumber",
          "period": "BlockNumber",
          "periodCount": "u32",
          "perPeriod": "Compact<Balance>"
        },
        "VestingScheduleOf": "OrmlVestingSchedule",
        "OrmlCurrencyId": "CurrencyId",
        "PoolInfo": {
          "totalShares": "Share",
          "rewards": "BTreeMap<OrmlCurrencyId, (Balance, Balance)>"
        },
        "CompactBalance": "Compact<Balance>",
        "PoolInfoV0": {
          "totalShares": "Compact<Share>",
          "totalRewards": "CompactBalance",
          "totalWithdrawnRewards": "CompactBalance"
        },
        "Share": "u128",
        "OracleValue": "Price",
        "Amount": "i128",
        "AmountOf": "Amount",
        "AuctionId": "u32",
        "AuctionIdOf": "AuctionId",
        "TokenSymbol": {
          "_enum": {
            "ACA": 0,
            "AUSD": 1,
            "DOT": 2,
            "LDOT": 3,
            "XBTC": 4,
            "RENBTC": 5,
            "POLKABTC": 6,
            "PLM": 7,
            "PHA": 8,
            "HDT": 9,
            "BCG": 11,
            "KAR": 128,
            "KUSD": 129,
            "KSM": 130,
            "LKSM": 131,
            "SDN": 135,
            "KILT": 138
          }
        },
        "DexShare": {
          "_enum": {
            "Token": "TokenSymbol",
            "Erc20": "EvmAddress"
          }
        },
        "CurrencyId": {
          "_enum": {
            "Token": "TokenSymbol",
            "DEXShare": "(TokenSymbol, TokenSymbol)",
            "ERC20": "EvmAddress"
          }
        },
        "CurrencyIdOf": "CurrencyId",
        "AirDropCurrencyId": {
          "_enum": [
            "KAR",
            "ACA"
          ]
        },
        "AuthoritysOriginId": {
          "_enum": [
            "Root",
            "Treasury",
            "HonzonTreasury",
            "HomaTreasury",
            "TreasuryReserve"
          ]
        },
        "AcalaDataProviderId": {
          "_enum": [
            "Aggregated",
            "Acala",
            "Band"
          ]
        },
        "TradingPair": "(CurrencyId,  CurrencyId)",
        "ChainBridgeChainId": "u8",
        "AcalaAssetMetadata": {
          "name": "Vec<u8>",
          "symbol": "Vec<u8>",
          "decimals": "u8",
          "minimalBalance": "Balance"
        },
        "NumberOrHex": "u128",
        "PalletBalanceOf": "Balance",
        "CollateralAuctionItem": {
          "refundRecipient": "AccountId",
          "currencyId": "CurrencyId",
          "initialAmount": "Compact<Balance>",
          "amount": "Compact<Balance>",
          "target": "Compact<Balance>",
          "startTime": "BlockNumber"
        },
        "DebitAuctionItem": {
          "initialAmount": "Compact<Balance>",
          "amount": "Compact<Balance>",
          "fix": "Compact<Balance>",
          "startTime": "BlockNumber"
        },
        "SurplusAuctionItem": {
          "amount": "Compact<Balance>",
          "startTime": "BlockNumber"
        },
        "LiquidationStrategy": {
          "_enum": [
            "Auction",
            "Exchange"
          ]
        },
        "OptionRate": "Option<Rate>",
        "OptionRatio": "Option<Ratio>",
        "ChangeOptionRate": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "OptionRate"
          }
        },
        "ChangeOptionRatio": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "OptionRatio"
          }
        },
        "ChangeBalance": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "Balance"
          }
        },
        "RiskManagementParams": {
          "maximumTotalDebitValue": "Balance",
          "interestRatePerSec": "Option<Rate>",
          "liquidationRatio": "Option<Rate>",
          "liquidationPenalty": "Option<Rate>",
          "requiredCollateralRatio": "Option<Rate>"
        },
        "CandidateInfoOf": "CandidateInfo",
        "TradingPairProvisionParameters": {
          "minContribution": "(Balance, Balance)",
          "targetProvision": "(Balance, Balance)",
          "accumulatedProvision": "(Balance, Balance)",
          "notBefore": "BlockNumber"
        },
        "BalanceWrapper": {
          "amount": "Balance"
        },
        "BalanceRequest": {
          "amount": "Balance"
        },
        "TradingPairStatus": {
          "_enum": {
            "Disabled": "Null",
            "Provisioning": "TradingPairProvisionParameters",
            "Enabled": "Null"
          }
        },
        "Erc20Info": {
          "address": "EvmAddress",
          "name": "Vec<u8>",
          "symbol": "Vec<u8>",
          "decimals": "u8"
        },
        "EstimateResourcesResponse": {
          "gas": "u256",
          "storage": "i32",
          "weightFee": "u256"
        },
        "EvmAccountInfo": {
          "nonce": "Index",
          "contractInfo": "Option<EvmContractInfo>"
        },
        "CodeInfo": {
          "codeSize": "u32",
          "refCount": "u32"
        },
        "EvmContractInfo": {
          "codeHash": "H256",
          "maintainer": "H160",
          "deployed": "bool"
        },
        "EvmAddress": "H160",
        "CallRequest": {
          "from": "Option<H160>",
          "to": "Option<H160>",
          "gasLimit": "Option<u32>",
          "storageLimit": "Option<u32>",
          "value": "Option<U128>",
          "data": "Option<Bytes>"
        },
        "CallInfo": {
          "exit_reason": "EvmCoreErrorExitReason",
          "value": "Vec<u8>",
          "used_gas": "U256",
          "used_storage": "i32",
          "logs": "Vec<EthereumLog>"
        },
        "CreateInfo": {
          "exit_reason": "EvmCoreErrorExitReason",
          "value": "H160",
          "used_gas": "U256",
          "used_storage": "i32",
          "logs": "Vec<EthereumLog>"
        },
        "EthereumLog": {
          "address": "H160",
          "topics": "Vec<H256>",
          "data": "Bytes"
        },
        "EvmCoreErrorExitReason": {
          "_enum": {
            "Succeed": "EvmCoreErrorExitSucceed",
            "Error": "EvmCoreErrorExitError",
            "Revert": "EvmCoreErrorExitRevert",
            "Fatal": "EvmCoreErrorExitFatal"
          }
        },
        "EvmCoreErrorExitSucceed": {
          "_enum": [
            "Stopped",
            "Returned",
            "Suicided"
          ]
        },
        "EvmCoreErrorExitError": {
          "_enum": {
            "StackUnderflow": "Null",
            "StackOverflow": "Null",
            "InvalidJump": "Null",
            "InvalidRange": "Null",
            "DesignatedInvalid": "Null",
            "CallTooDeep": "Null",
            "CreateCollision": "Null",
            "CreateContractLimit": "Null",
            "OutOfOffset": "Null",
            "OutOfGas": "Null",
            "OutOfFund": "Null",
            "PCUnderflow": "Null",
            "CreateEmpty": "Null",
            "Other": "Text",
            "InvalidCode": "Null"
          }
        },
        "EvmCoreErrorExitRevert": {
          "_enum": [
            "Reverted"
          ]
        },
        "EvmCoreErrorExitFatal": {
          "_enum": {
            "NotSupported": "Null",
            "UnhandledInterrupt": "Null",
            "CallErrorAsFatal": "EvmCoreErrorExitError",
            "Other": "Text"
          }
        },
        "AcalaStakingLedge": {
          "bonded": "Compact<Balance>",
          "unlocking": "Vec<UnlockChunk>"
        },
        "AcalaUnlockChunk": {
          "value": "Compact<Balance>",
          "era": "Compact<EraIndex>"
        },
        "RelaychainAccountId": "AccountId",
        "SlashInfo": {
          "validator": "RelaychainAccountId",
          "relaychainTokenAmount": "Balance"
        },
        "ValidatorBacking": {
          "totalInsurance": "Balance",
          "isFrozen": "bool"
        },
        "Guarantee": {
          "total": "Balance",
          "bonded": "Balance",
          "unbonding": "Option<(Balance, BlockNumber)>"
        },
        "PoolId": {
          "_enum": {
            "Loans": "CurrencyId",
            "DexIncentive": "CurrencyId",
            "DexSaving": "CurrencyId",
            "Homa": "Null"
          }
        },
        "PoolIdV0": {
          "_enum": {
            "LoansIncentive": "CurrencyId",
            "DexIncentive": "CurrencyId",
            "HomaIncentive": "Null",
            "DexSaving": "CurrencyId",
            "HomaValidatorAllowance": "AccountId"
          }
        },
        "Position": {
          "collateral": "Balance",
          "debit": "Balance"
        },
        "CID": "Vec<u8>",
        "Attributes": "BTreeMap<Vec<u8>, Vec<u8>>",
        "TokenInfoOf": {
          "metadata": "CID",
          "owner": "AccountId",
          "data": "TokenData"
        },
        "Properties": {
          "_set": {
            "_bitLength": 8,
            "Transferable": 1,
            "Burnable": 2,
            "Mintable": 4,
            "ClassPropertiesMutable": 8
          }
        },
        "ClassData": {
          "deposit": "Balance",
          "properties": "Properties",
          "attributes": "Attributes"
        },
        "TokenData": {
          "deposit": "Balance",
          "attributes": "Attributes"
        },
        "TokenId": "u64",
        "TokenIdOf": "TokenId",
        "NFTClassId": "u32",
        "ClassIdOf": "ClassId",
        "NFTBalance": "u128",
        "NFTBalanceOf": "NFTBalance",
        "ClassInfoOf": {
          "metadata": "CID",
          "totalIssuance": "TokenId",
          "owner": "AccountId",
          "data": "ClassData"
        },
        "NomineeId": "AccountId",
        "HomaUnlockChunk": {
          "value": "Balance",
          "era": "EraIndex"
        },
        "BondingLedger": {
          "total": "Balance",
          "active": "Balance",
          "unlocking": "Vec<HomaUnlockChunk>"
        },
        "OracleKey": "CurrencyId",
        "AsOriginId": "AuthoritysOriginId",
        "ProxyType": {
          "_enum": [
            "Any",
            "CancelProxy",
            "Governance",
            "Auction",
            "Swap",
            "Loan"
          ]
        },
        "AtLeast64BitUnsigned": "u128",
        "StableAssetPoolId": "u32",
        "RelayChainBlockNumberOf": "RelayChainBlockNumber",
        "SubAccountStatus": {
          "bonded": "Balance",
          "available": "Balance",
          "unbonding": "Vec<(EraIndex,Balance)>",
          "mockRewardRate": "Rate"
        },
        "Params": {
          "targetMaxFreeUnbondedRatio": "Ratio",
          "targetMinFreeUnbondedRatio": "Ratio",
          "targetUnbondingToFreeRatio": "Ratio",
          "unbondingToFreeAdjustment": "Ratio",
          "baseFeeRate": "Rate"
        },
        "StakingPoolPhase": {
          "_enum": [
            "Started",
            "RelaychainUpdated",
            "LedgerUpdated",
            "Finished"
          ]
        },
        "Ledger": {
          "bonded": "Balance",
          "unbondingToFree": "Balance",
          "freePool": "Balance",
          "toUnbondNextEra": "(Balance, Balance)"
        },
        "ChangeRate": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "Rate"
          }
        },
        "ChangeRatio": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "Ratio"
          }
        },
        "BalanceInfo": {
          "amount": "Balance"
        },
        "PolkadotAccountId": "AccountId",
        "PolkadotAccountIdOf": "PolkadotAccountId",
        "ExchangeRate": "FixedU128",
        "Rate": "FixedU128",
        "Ratio": "FixedU128",
        "PublicKey": "[u8; 20]",
        "DestAddress": "Vec<u8>",
        "PoolTokenIndex": "u32",
        "AssetId": "CurrencyId",
        "Keys": "SessionKeys1",
        "CompactAssignments": "CompactAssignmentsWith16",
        "DispatchErrorModule": "DispatchErrorModuleU8",
        "RawSolution": "RawSolutionWith16",
        "Weight": "WeightV1",
        "Address": "GenericMultiAddress",
        "LookupSource": "GenericMultiAddress",
        "MultiLocation": "MultiLocationV0",
        "MultiAsset": "MultiAssetV0",
        "Xcm": "XcmV0",
        "XcmOrder": "XcmOrderV0",
        "XcmError": "XcmErrorV0",
        "Response": "ResponseV0"
      }
    },
    {
      "minmax": [
        723,
        729
      ],
      "types": {
        "CallOf": "Call",
        "DispatchTime": {
          "_enum": {
            "At": "BlockNumber",
            "After": "BlockNumber"
          }
        },
        "ScheduleTaskIndex": "u32",
        "DelayedOrigin": {
          "delay": "BlockNumber",
          "origin": "PalletsOrigin"
        },
        "AuthorityOrigin": "DelayedOrigin",
        "StorageValue": "Vec<u8>",
        "GraduallyUpdate": {
          "key": "StorageKey",
          "targetValue": "StorageValue",
          "perBlock": "StorageValue"
        },
        "StorageKeyBytes": "Vec<u8>",
        "StorageValueBytes": "Vec<u8>",
        "RpcDataProviderId": "Text",
        "DataProviderId": "u8",
        "TimestampedValue": {
          "value": "OracleValue",
          "timestamp": "Moment"
        },
        "TimestampedValueOf": "TimestampedValue",
        "OrderedSet": "Vec<AccountId>",
        "OrmlAccountData": {
          "free": "Balance",
          "reserved": "Balance",
          "frozen": "Balance"
        },
        "OrmlBalanceLock": {
          "amount": "Balance",
          "id": "LockIdentifier"
        },
        "AuctionInfo": {
          "bid": "Option<(AccountId, Balance)>",
          "start": "BlockNumber",
          "end": "Option<BlockNumber>"
        },
        "DelayedDispatchTime": {
          "_enum": {
            "At": "BlockNumber",
            "After": "BlockNumber"
          }
        },
        "DispatchId": "u32",
        "Price": "FixedU128",
        "OrmlVestingSchedule": {
          "start": "BlockNumber",
          "period": "BlockNumber",
          "periodCount": "u32",
          "perPeriod": "Compact<Balance>"
        },
        "VestingScheduleOf": "OrmlVestingSchedule",
        "OrmlCurrencyId": "CurrencyId",
        "PoolInfo": {
          "totalShares": "Compact<Share>",
          "totalRewards": "Compact<Balance>",
          "totalWithdrawnRewards": "Compact<Balance>"
        },
        "CompactBalance": "Compact<Balance>",
        "PoolInfoV0": {
          "totalShares": "Compact<Share>",
          "totalRewards": "CompactBalance",
          "totalWithdrawnRewards": "CompactBalance"
        },
        "Share": "u128",
        "OracleValue": "Price",
        "Amount": "i128",
        "AmountOf": "Amount",
        "AuctionId": "u32",
        "AuctionIdOf": "AuctionId",
        "TokenSymbol": {
          "_enum": {
            "ACA": 0,
            "AUSD": 1,
            "DOT": 2,
            "LDOT": 3,
            "XBTC": 4,
            "RENBTC": 5,
            "POLKABTC": 6,
            "PLM": 7,
            "PHA": 8,
            "HDT": 9,
            "BCG": 11,
            "KAR": 128,
            "KUSD": 129,
            "KSM": 130,
            "LKSM": 131,
            "SDN": 135,
            "KILT": 138
          }
        },
        "DexShare": {
          "_enum": {
            "Token": "TokenSymbol",
            "Erc20": "EvmAddress"
          }
        },
        "CurrencyId": {
          "_enum": {
            "Token": "TokenSymbol",
            "DEXShare": "(TokenSymbol, TokenSymbol)",
            "ERC20": "EvmAddress"
          }
        },
        "CurrencyIdOf": "CurrencyId",
        "AirDropCurrencyId": {
          "_enum": [
            "KAR",
            "ACA"
          ]
        },
        "AuthoritysOriginId": {
          "_enum": [
            "Root",
            "Treasury",
            "HonzonTreasury",
            "HomaTreasury",
            "TreasuryReserve"
          ]
        },
        "AcalaDataProviderId": {
          "_enum": [
            "Aggregated",
            "Acala",
            "Band"
          ]
        },
        "TradingPair": "(CurrencyId,  CurrencyId)",
        "ChainBridgeChainId": "u8",
        "AcalaAssetMetadata": {
          "name": "Vec<u8>",
          "symbol": "Vec<u8>",
          "decimals": "u8",
          "minimalBalance": "Balance"
        },
        "NumberOrHex": "u128",
        "PalletBalanceOf": "Balance",
        "CollateralAuctionItem": {
          "refundRecipient": "AccountId",
          "currencyId": "CurrencyId",
          "initialAmount": "Compact<Balance>",
          "amount": "Compact<Balance>",
          "target": "Compact<Balance>",
          "startTime": "BlockNumber"
        },
        "DebitAuctionItem": {
          "initialAmount": "Compact<Balance>",
          "amount": "Compact<Balance>",
          "fix": "Compact<Balance>",
          "startTime": "BlockNumber"
        },
        "SurplusAuctionItem": {
          "amount": "Compact<Balance>",
          "startTime": "BlockNumber"
        },
        "LiquidationStrategy": {
          "_enum": [
            "Auction",
            "Exchange"
          ]
        },
        "OptionRate": "Option<Rate>",
        "OptionRatio": "Option<Ratio>",
        "ChangeOptionRate": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "OptionRate"
          }
        },
        "ChangeOptionRatio": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "OptionRatio"
          }
        },
        "ChangeBalance": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "Balance"
          }
        },
        "RiskManagementParams": {
          "maximumTotalDebitValue": "Balance",
          "interestRatePerSec": "Option<Rate>",
          "liquidationRatio": "Option<Rate>",
          "liquidationPenalty": "Option<Rate>",
          "requiredCollateralRatio": "Option<Rate>"
        },
        "CandidateInfoOf": "CandidateInfo",
        "TradingPairProvisionParameters": {
          "minContribution": "(Balance, Balance)",
          "targetProvision": "(Balance, Balance)",
          "accumulatedProvision": "(Balance, Balance)",
          "notBefore": "BlockNumber"
        },
        "BalanceWrapper": {
          "amount": "Balance"
        },
        "BalanceRequest": {
          "amount": "Balance"
        },
        "TradingPairStatus": {
          "_enum": {
            "Disabled": "Null",
            "Provisioning": "TradingPairProvisionParameters",
            "Enabled": "Null"
          }
        },
        "Erc20Info": {
          "address": "EvmAddress",
          "name": "Vec<u8>",
          "symbol": "Vec<u8>",
          "decimals": "u8"
        },
        "EstimateResourcesResponse": {
          "gas": "u256",
          "storage": "i32",
          "weightFee": "u256"
        },
        "EvmAccountInfo": {
          "nonce": "Index",
          "contractInfo": "Option<EvmContractInfo>"
        },
        "CodeInfo": {
          "codeSize": "u32",
          "refCount": "u32"
        },
        "EvmContractInfo": {
          "codeHash": "H256",
          "maintainer": "H160",
          "deployed": "bool"
        },
        "EvmAddress": "H160",
        "CallRequest": {
          "from": "Option<H160>",
          "to": "Option<H160>",
          "gasLimit": "Option<u32>",
          "storageLimit": "Option<u32>",
          "value": "Option<U128>",
          "data": "Option<Bytes>"
        },
        "CallInfo": {
          "exit_reason": "EvmCoreErrorExitReason",
          "value": "Vec<u8>",
          "used_gas": "U256",
          "used_storage": "i32",
          "logs": "Vec<EthereumLog>"
        },
        "CreateInfo": {
          "exit_reason": "EvmCoreErrorExitReason",
          "value": "H160",
          "used_gas": "U256",
          "used_storage": "i32",
          "logs": "Vec<EthereumLog>"
        },
        "EthereumLog": {
          "address": "H160",
          "topics": "Vec<H256>",
          "data": "Bytes"
        },
        "EvmCoreErrorExitReason": {
          "_enum": {
            "Succeed": "EvmCoreErrorExitSucceed",
            "Error": "EvmCoreErrorExitError",
            "Revert": "EvmCoreErrorExitRevert",
            "Fatal": "EvmCoreErrorExitFatal"
          }
        },
        "EvmCoreErrorExitSucceed": {
          "_enum": [
            "Stopped",
            "Returned",
            "Suicided"
          ]
        },
        "EvmCoreErrorExitError": {
          "_enum": {
            "StackUnderflow": "Null",
            "StackOverflow": "Null",
            "InvalidJump": "Null",
            "InvalidRange": "Null",
            "DesignatedInvalid": "Null",
            "CallTooDeep": "Null",
            "CreateCollision": "Null",
            "CreateContractLimit": "Null",
            "OutOfOffset": "Null",
            "OutOfGas": "Null",
            "OutOfFund": "Null",
            "PCUnderflow": "Null",
            "CreateEmpty": "Null",
            "Other": "Text",
            "InvalidCode": "Null"
          }
        },
        "EvmCoreErrorExitRevert": {
          "_enum": [
            "Reverted"
          ]
        },
        "EvmCoreErrorExitFatal": {
          "_enum": {
            "NotSupported": "Null",
            "UnhandledInterrupt": "Null",
            "CallErrorAsFatal": "EvmCoreErrorExitError",
            "Other": "Text"
          }
        },
        "AcalaStakingLedge": {
          "bonded": "Compact<Balance>",
          "unlocking": "Vec<UnlockChunk>"
        },
        "AcalaUnlockChunk": {
          "value": "Compact<Balance>",
          "era": "Compact<EraIndex>"
        },
        "RelaychainAccountId": "AccountId",
        "SlashInfo": {
          "validator": "RelaychainAccountId",
          "relaychainTokenAmount": "Balance"
        },
        "ValidatorBacking": {
          "totalInsurance": "Balance",
          "isFrozen": "bool"
        },
        "Guarantee": {
          "total": "Balance",
          "bonded": "Balance",
          "unbonding": "Option<(Balance, BlockNumber)>"
        },
        "PoolId": {
          "_enum": {
            "LoansIncentive": "CurrencyId",
            "DexIncentive": "CurrencyId",
            "HomaIncentive": "Null",
            "DexSaving": "CurrencyId",
            "HomaValidatorAllowance": "AccountId"
          }
        },
        "PoolIdV0": {
          "_enum": {
            "LoansIncentive": "CurrencyId",
            "DexIncentive": "CurrencyId",
            "HomaIncentive": "Null",
            "DexSaving": "CurrencyId",
            "HomaValidatorAllowance": "AccountId"
          }
        },
        "Position": {
          "collateral": "Balance",
          "debit": "Balance"
        },
        "CID": "Vec<u8>",
        "Attributes": "BTreeMap<Vec<u8>, Vec<u8>>",
        "TokenInfoOf": {
          "metadata": "CID",
          "owner": "AccountId",
          "data": "TokenData"
        },
        "Properties": {
          "_set": {
            "_bitLength": 8,
            "Transferable": 1,
            "Burnable": 2,
            "Mintable": 4,
            "ClassPropertiesMutable": 8
          }
        },
        "ClassData": {
          "deposit": "Balance",
          "properties": "Properties",
          "attributes": "Attributes"
        },
        "TokenData": {
          "deposit": "Balance",
          "attributes": "Attributes"
        },
        "TokenId": "u64",
        "TokenIdOf": "TokenId",
        "NFTClassId": "u32",
        "ClassIdOf": "ClassId",
        "NFTBalance": "u128",
        "NFTBalanceOf": "NFTBalance",
        "ClassInfoOf": {
          "metadata": "CID",
          "totalIssuance": "TokenId",
          "owner": "AccountId",
          "data": "ClassData"
        },
        "NomineeId": "AccountId",
        "HomaUnlockChunk": {
          "value": "Balance",
          "era": "EraIndex"
        },
        "BondingLedger": {
          "total": "Balance",
          "active": "Balance",
          "unlocking": "Vec<HomaUnlockChunk>"
        },
        "OracleKey": "CurrencyId",
        "AsOriginId": "AuthoritysOriginId",
        "ProxyType": {
          "_enum": [
            "Any",
            "CancelProxy",
            "Governance",
            "Auction",
            "Swap",
            "Loan"
          ]
        },
        "AtLeast64BitUnsigned": "u128",
        "StableAssetPoolId": "u32",
        "RelayChainBlockNumberOf": "RelayChainBlockNumber",
        "SubAccountStatus": {
          "bonded": "Balance",
          "available": "Balance",
          "unbonding": "Vec<(EraIndex,Balance)>",
          "mockRewardRate": "Rate"
        },
        "Params": {
          "targetMaxFreeUnbondedRatio": "Ratio",
          "targetMinFreeUnbondedRatio": "Ratio",
          "targetUnbondingToFreeRatio": "Ratio",
          "unbondingToFreeAdjustment": "Ratio",
          "baseFeeRate": "Rate"
        },
        "StakingPoolPhase": {
          "_enum": [
            "Started",
            "RelaychainUpdated",
            "LedgerUpdated",
            "Finished"
          ]
        },
        "Ledger": {
          "bonded": "Balance",
          "unbondingToFree": "Balance",
          "freePool": "Balance",
          "toUnbondNextEra": "(Balance, Balance)"
        },
        "ChangeRate": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "Rate"
          }
        },
        "ChangeRatio": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "Ratio"
          }
        },
        "BalanceInfo": {
          "amount": "Balance"
        },
        "PolkadotAccountId": "AccountId",
        "PolkadotAccountIdOf": "PolkadotAccountId",
        "ExchangeRate": "FixedU128",
        "Rate": "FixedU128",
        "Ratio": "FixedU128",
        "PublicKey": "[u8; 20]",
        "DestAddress": "Vec<u8>",
        "PoolTokenIndex": "u32",
        "AssetId": "CurrencyId",
        "Keys": "SessionKeys1",
        "CompactAssignments": "CompactAssignmentsWith16",
        "DispatchErrorModule": "DispatchErrorModuleU8",
        "RawSolution": "RawSolutionWith16",
        "Weight": "WeightV1",
        "Address": "GenericMultiAddress",
        "LookupSource": "GenericMultiAddress",
        "MultiLocation": "MultiLocationV0",
        "MultiAsset": "MultiAssetV0",
        "Xcm": "XcmV0",
        "XcmOrder": "XcmOrderV0",
        "XcmError": "XcmErrorV0",
        "Response": "ResponseV0"
      }
    },
    {
      "minmax": [
        730,
        1007
      ],
      "types": {
        "CallOf": "Call",
        "DispatchTime": {
          "_enum": {
            "At": "BlockNumber",
            "After": "BlockNumber"
          }
        },
        "ScheduleTaskIndex": "u32",
        "DelayedOrigin": {
          "delay": "BlockNumber",
          "origin": "PalletsOrigin"
        },
        "AuthorityOrigin": "DelayedOrigin",
        "StorageValue": "Vec<u8>",
        "GraduallyUpdate": {
          "key": "StorageKey",
          "targetValue": "StorageValue",
          "perBlock": "StorageValue"
        },
        "StorageKeyBytes": "Vec<u8>",
        "StorageValueBytes": "Vec<u8>",
        "RpcDataProviderId": "Text",
        "DataProviderId": "u8",
        "TimestampedValue": {
          "value": "OracleValue",
          "timestamp": "Moment"
        },
        "TimestampedValueOf": "TimestampedValue",
        "OrderedSet": "Vec<AccountId>",
        "OrmlAccountData": {
          "free": "Balance",
          "reserved": "Balance",
          "frozen": "Balance"
        },
        "OrmlBalanceLock": {
          "amount": "Balance",
          "id": "LockIdentifier"
        },
        "AuctionInfo": {
          "bid": "Option<(AccountId, Balance)>",
          "start": "BlockNumber",
          "end": "Option<BlockNumber>"
        },
        "DelayedDispatchTime": {
          "_enum": {
            "At": "BlockNumber",
            "After": "BlockNumber"
          }
        },
        "DispatchId": "u32",
        "Price": "FixedU128",
        "OrmlVestingSchedule": {
          "start": "BlockNumber",
          "period": "BlockNumber",
          "periodCount": "u32",
          "perPeriod": "Compact<Balance>"
        },
        "VestingScheduleOf": "OrmlVestingSchedule",
        "OrmlCurrencyId": "CurrencyId",
        "PoolInfo": {
          "totalShares": "Compact<Share>",
          "totalRewards": "Compact<Balance>",
          "totalWithdrawnRewards": "Compact<Balance>"
        },
        "CompactBalance": "Compact<Balance>",
        "PoolInfoV0": {
          "totalShares": "Compact<Share>",
          "totalRewards": "CompactBalance",
          "totalWithdrawnRewards": "CompactBalance"
        },
        "Share": "u128",
        "OracleValue": "Price",
        "Amount": "i128",
        "AmountOf": "Amount",
        "AuctionId": "u32",
        "AuctionIdOf": "AuctionId",
        "TokenSymbol": {
          "_enum": {
            "ACA": 0,
            "AUSD": 1,
            "DOT": 2,
            "LDOT": 3,
            "RENBTC": 4,
            "KAR": 128,
            "KUSD": 129,
            "KSM": 130,
            "LKSM": 131,
            "CASH": 140
          }
        },
        "DexShare": {
          "_enum": {
            "Token": "TokenSymbol",
            "Erc20": "EvmAddress"
          }
        },
        "CurrencyId": {
          "_enum": {
            "Token": "TokenSymbol",
            "DEXShare": "(DexShare, DexShare)",
            "ERC20": "EvmAddress",
            "StableAssetPoolToken": "u32",
            "LiquidCrowdloan": "u32",
            "ForeignAsset": "u32"
          }
        },
        "CurrencyIdOf": "CurrencyId",
        "AirDropCurrencyId": {
          "_enum": [
            "KAR",
            "ACA"
          ]
        },
        "AuthoritysOriginId": {
          "_enum": [
            "Root",
            "Treasury",
            "HonzonTreasury",
            "HomaTreasury",
            "TreasuryReserve"
          ]
        },
        "AcalaDataProviderId": {
          "_enum": [
            "Aggregated",
            "Acala",
            "Band"
          ]
        },
        "TradingPair": "(CurrencyId,  CurrencyId)",
        "ChainBridgeChainId": "u8",
        "AcalaAssetMetadata": {
          "name": "Vec<u8>",
          "symbol": "Vec<u8>",
          "decimals": "u8",
          "minimalBalance": "Balance"
        },
        "NumberOrHex": "u128",
        "PalletBalanceOf": "Balance",
        "CollateralAuctionItem": {
          "refundRecipient": "AccountId",
          "currencyId": "CurrencyId",
          "initialAmount": "Compact<Balance>",
          "amount": "Compact<Balance>",
          "target": "Compact<Balance>",
          "startTime": "BlockNumber"
        },
        "DebitAuctionItem": {
          "initialAmount": "Compact<Balance>",
          "amount": "Compact<Balance>",
          "fix": "Compact<Balance>",
          "startTime": "BlockNumber"
        },
        "SurplusAuctionItem": {
          "amount": "Compact<Balance>",
          "startTime": "BlockNumber"
        },
        "LiquidationStrategy": {
          "_enum": [
            "Auction",
            "Exchange"
          ]
        },
        "OptionRate": "Option<Rate>",
        "OptionRatio": "Option<Ratio>",
        "ChangeOptionRate": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "OptionRate"
          }
        },
        "ChangeOptionRatio": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "OptionRatio"
          }
        },
        "ChangeBalance": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "Balance"
          }
        },
        "RiskManagementParams": {
          "maximumTotalDebitValue": "Balance",
          "interestRatePerSec": "Option<Rate>",
          "liquidationRatio": "Option<Rate>",
          "liquidationPenalty": "Option<Rate>",
          "requiredCollateralRatio": "Option<Rate>"
        },
        "CandidateInfoOf": "CandidateInfo",
        "TradingPairProvisionParameters": {
          "minContribution": "(Balance, Balance)",
          "targetProvision": "(Balance, Balance)",
          "accumulatedProvision": "(Balance, Balance)",
          "notBefore": "BlockNumber"
        },
        "BalanceWrapper": {
          "amount": "Balance"
        },
        "BalanceRequest": {
          "amount": "Balance"
        },
        "TradingPairStatus": {
          "_enum": {
            "Disabled": "Null",
            "Provisioning": "TradingPairProvisionParameters",
            "Enabled": "Null"
          }
        },
        "Erc20Info": {
          "address": "EvmAddress",
          "name": "Vec<u8>",
          "symbol": "Vec<u8>",
          "decimals": "u8"
        },
        "EstimateResourcesResponse": {
          "gas": "u256",
          "storage": "i32",
          "weightFee": "u256"
        },
        "EvmAccountInfo": {
          "nonce": "Index",
          "contractInfo": "Option<EvmContractInfo>"
        },
        "CodeInfo": {
          "codeSize": "u32",
          "refCount": "u32"
        },
        "EvmContractInfo": {
          "codeHash": "H256",
          "maintainer": "H160",
          "deployed": "bool"
        },
        "EvmAddress": "H160",
        "CallRequest": {
          "from": "Option<H160>",
          "to": "Option<H160>",
          "gasLimit": "Option<u32>",
          "storageLimit": "Option<u32>",
          "value": "Option<U128>",
          "data": "Option<Bytes>"
        },
        "CallInfo": {
          "exit_reason": "EvmCoreErrorExitReason",
          "value": "Vec<u8>",
          "used_gas": "U256",
          "used_storage": "i32",
          "logs": "Vec<EthereumLog>"
        },
        "CreateInfo": {
          "exit_reason": "EvmCoreErrorExitReason",
          "value": "H160",
          "used_gas": "U256",
          "used_storage": "i32",
          "logs": "Vec<EthereumLog>"
        },
        "EthereumLog": {
          "address": "H160",
          "topics": "Vec<H256>",
          "data": "Bytes"
        },
        "EvmCoreErrorExitReason": {
          "_enum": {
            "Succeed": "EvmCoreErrorExitSucceed",
            "Error": "EvmCoreErrorExitError",
            "Revert": "EvmCoreErrorExitRevert",
            "Fatal": "EvmCoreErrorExitFatal"
          }
        },
        "EvmCoreErrorExitSucceed": {
          "_enum": [
            "Stopped",
            "Returned",
            "Suicided"
          ]
        },
        "EvmCoreErrorExitError": {
          "_enum": {
            "StackUnderflow": "Null",
            "StackOverflow": "Null",
            "InvalidJump": "Null",
            "InvalidRange": "Null",
            "DesignatedInvalid": "Null",
            "CallTooDeep": "Null",
            "CreateCollision": "Null",
            "CreateContractLimit": "Null",
            "OutOfOffset": "Null",
            "OutOfGas": "Null",
            "OutOfFund": "Null",
            "PCUnderflow": "Null",
            "CreateEmpty": "Null",
            "Other": "Text",
            "InvalidCode": "Null"
          }
        },
        "EvmCoreErrorExitRevert": {
          "_enum": [
            "Reverted"
          ]
        },
        "EvmCoreErrorExitFatal": {
          "_enum": {
            "NotSupported": "Null",
            "UnhandledInterrupt": "Null",
            "CallErrorAsFatal": "EvmCoreErrorExitError",
            "Other": "Text"
          }
        },
        "AcalaStakingLedge": {
          "bonded": "Compact<Balance>",
          "unlocking": "Vec<UnlockChunk>"
        },
        "AcalaUnlockChunk": {
          "value": "Compact<Balance>",
          "era": "Compact<EraIndex>"
        },
        "RelaychainAccountId": "AccountId",
        "SlashInfo": {
          "validator": "RelaychainAccountId",
          "relaychainTokenAmount": "Balance"
        },
        "ValidatorBacking": {
          "totalInsurance": "Balance",
          "isFrozen": "bool"
        },
        "Guarantee": {
          "total": "Balance",
          "bonded": "Balance",
          "unbonding": "Option<(Balance, BlockNumber)>"
        },
        "PoolId": {
          "_enum": {
            "LoansIncentive": "CurrencyId",
            "DexIncentive": "CurrencyId",
            "HomaIncentive": "Null",
            "DexSaving": "CurrencyId",
            "HomaValidatorAllowance": "AccountId"
          }
        },
        "PoolIdV0": {
          "_enum": {
            "LoansIncentive": "CurrencyId",
            "DexIncentive": "CurrencyId",
            "HomaIncentive": "Null",
            "DexSaving": "CurrencyId",
            "HomaValidatorAllowance": "AccountId"
          }
        },
        "Position": {
          "collateral": "Balance",
          "debit": "Balance"
        },
        "CID": "Vec<u8>",
        "Attributes": "BTreeMap<Vec<u8>, Vec<u8>>",
        "TokenInfoOf": {
          "metadata": "CID",
          "owner": "AccountId",
          "data": "TokenData"
        },
        "Properties": {
          "_set": {
            "_bitLength": 8,
            "Transferable": 1,
            "Burnable": 2,
            "Mintable": 4,
            "ClassPropertiesMutable": 8
          }
        },
        "ClassData": {
          "deposit": "Balance",
          "properties": "Properties",
          "attributes": "Attributes"
        },
        "TokenData": {
          "deposit": "Balance",
          "attributes": "Attributes"
        },
        "TokenId": "u64",
        "TokenIdOf": "TokenId",
        "NFTClassId": "u32",
        "ClassIdOf": "ClassId",
        "NFTBalance": "u128",
        "NFTBalanceOf": "NFTBalance",
        "ClassInfoOf": {
          "metadata": "CID",
          "totalIssuance": "TokenId",
          "owner": "AccountId",
          "data": "ClassData"
        },
        "NomineeId": "AccountId",
        "HomaUnlockChunk": {
          "value": "Balance",
          "era": "EraIndex"
        },
        "BondingLedger": {
          "total": "Balance",
          "active": "Balance",
          "unlocking": "Vec<HomaUnlockChunk>"
        },
        "OracleKey": "CurrencyId",
        "AsOriginId": "AuthoritysOriginId",
        "ProxyType": {
          "_enum": [
            "Any",
            "CancelProxy",
            "Governance",
            "Auction",
            "Swap",
            "Loan"
          ]
        },
        "AtLeast64BitUnsigned": "u128",
        "StableAssetPoolId": "u32",
        "RelayChainBlockNumberOf": "RelayChainBlockNumber",
        "SubAccountStatus": {
          "bonded": "Balance",
          "available": "Balance",
          "unbonding": "Vec<(EraIndex,Balance)>",
          "mockRewardRate": "Rate"
        },
        "Params": {
          "targetMaxFreeUnbondedRatio": "Ratio",
          "targetMinFreeUnbondedRatio": "Ratio",
          "targetUnbondingToFreeRatio": "Ratio",
          "unbondingToFreeAdjustment": "Ratio",
          "baseFeeRate": "Rate"
        },
        "StakingPoolPhase": {
          "_enum": [
            "Started",
            "RelaychainUpdated",
            "LedgerUpdated",
            "Finished"
          ]
        },
        "Ledger": {
          "bonded": "Balance",
          "unbondingToFree": "Balance",
          "freePool": "Balance",
          "toUnbondNextEra": "(Balance, Balance)"
        },
        "ChangeRate": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "Rate"
          }
        },
        "ChangeRatio": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "Ratio"
          }
        },
        "BalanceInfo": {
          "amount": "Balance"
        },
        "PolkadotAccountId": "AccountId",
        "PolkadotAccountIdOf": "PolkadotAccountId",
        "ExchangeRate": "FixedU128",
        "Rate": "FixedU128",
        "Ratio": "FixedU128",
        "PublicKey": "[u8; 20]",
        "DestAddress": "Vec<u8>",
        "PoolTokenIndex": "u32",
        "AssetId": "CurrencyId",
        "Keys": "SessionKeys1",
        "CompactAssignments": "CompactAssignmentsWith16",
        "DispatchErrorModule": "DispatchErrorModuleU8",
        "RawSolution": "RawSolutionWith16",
        "Weight": "WeightV1",
        "Address": "GenericMultiAddress",
        "LookupSource": "GenericMultiAddress",
        "MultiLocation": "MultiLocationV0",
        "MultiAsset": "MultiAssetV0",
        "Xcm": "XcmV0",
        "XcmOrder": "XcmOrderV0",
        "XcmError": "XcmErrorV0",
        "Response": "ResponseV0"
      }
    },
    {
      "minmax": [
        1008,
        1008
      ],
      "types": {
        "CallOf": "Call",
        "DispatchTime": {
          "_enum": {
            "At": "BlockNumber",
            "After": "BlockNumber"
          }
        },
        "ScheduleTaskIndex": "u32",
        "DelayedOrigin": {
          "delay": "BlockNumber",
          "origin": "PalletsOrigin"
        },
        "AuthorityOrigin": "DelayedOrigin",
        "StorageValue": "Vec<u8>",
        "GraduallyUpdate": {
          "key": "StorageKey",
          "targetValue": "StorageValue",
          "perBlock": "StorageValue"
        },
        "StorageKeyBytes": "Vec<u8>",
        "StorageValueBytes": "Vec<u8>",
        "RpcDataProviderId": "Text",
        "DataProviderId": "u8",
        "TimestampedValue": {
          "value": "OracleValue",
          "timestamp": "Moment"
        },
        "TimestampedValueOf": "TimestampedValue",
        "OrderedSet": "Vec<AccountId>",
        "OrmlAccountData": {
          "free": "Balance",
          "reserved": "Balance",
          "frozen": "Balance"
        },
        "OrmlBalanceLock": {
          "amount": "Balance",
          "id": "LockIdentifier"
        },
        "AuctionInfo": {
          "bid": "Option<(AccountId, Balance)>",
          "start": "BlockNumber",
          "end": "Option<BlockNumber>"
        },
        "DelayedDispatchTime": {
          "_enum": {
            "At": "BlockNumber",
            "After": "BlockNumber"
          }
        },
        "DispatchId": "u32",
        "Price": "FixedU128",
        "OrmlVestingSchedule": {
          "start": "BlockNumber",
          "period": "BlockNumber",
          "periodCount": "u32",
          "perPeriod": "Compact<Balance>"
        },
        "VestingScheduleOf": "OrmlVestingSchedule",
        "OrmlCurrencyId": "CurrencyId",
        "PoolInfo": {
          "totalShares": "Compact<Share>",
          "totalRewards": "Compact<Balance>",
          "totalWithdrawnRewards": "Compact<Balance>"
        },
        "CompactBalance": "Compact<Balance>",
        "PoolInfoV0": {
          "totalShares": "Compact<Share>",
          "totalRewards": "CompactBalance",
          "totalWithdrawnRewards": "CompactBalance"
        },
        "Share": "u128",
        "OracleValue": "Price",
        "Amount": "i128",
        "AmountOf": "Amount",
        "AuctionId": "u32",
        "AuctionIdOf": "AuctionId",
        "TokenSymbol": {
          "_enum": {
            "ACA": 0,
            "AUSD": 1,
            "DOT": 2,
            "LDOT": 3,
            "RENBTC": 20,
            "CASH": 21,
            "KAR": 128,
            "KUSD": 129,
            "KSM": 130,
            "LKSM": 131
          }
        },
        "DexShare": {
          "_enum": {
            "Token": "TokenSymbol",
            "Erc20": "EvmAddress"
          }
        },
        "CurrencyId": {
          "_enum": {
            "Token": "TokenSymbol",
            "DEXShare": "(DexShare, DexShare)",
            "ERC20": "EvmAddress",
            "StableAssetPoolToken": "u32",
            "LiquidCrowdloan": "u32",
            "ForeignAsset": "u32"
          }
        },
        "CurrencyIdOf": "CurrencyId",
        "AirDropCurrencyId": {
          "_enum": [
            "KAR",
            "ACA"
          ]
        },
        "AuthoritysOriginId": {
          "_enum": [
            "Root",
            "Treasury",
            "HonzonTreasury",
            "HomaTreasury",
            "TreasuryReserve"
          ]
        },
        "AcalaDataProviderId": {
          "_enum": [
            "Aggregated",
            "Acala",
            "Band"
          ]
        },
        "TradingPair": "(CurrencyId,  CurrencyId)",
        "ChainBridgeChainId": "u8",
        "AcalaAssetMetadata": {
          "name": "Vec<u8>",
          "symbol": "Vec<u8>",
          "decimals": "u8",
          "minimalBalance": "Balance"
        },
        "NumberOrHex": "u128",
        "PalletBalanceOf": "Balance",
        "CollateralAuctionItem": {
          "refundRecipient": "AccountId",
          "currencyId": "CurrencyId",
          "initialAmount": "Compact<Balance>",
          "amount": "Compact<Balance>",
          "target": "Compact<Balance>",
          "startTime": "BlockNumber"
        },
        "DebitAuctionItem": {
          "initialAmount": "Compact<Balance>",
          "amount": "Compact<Balance>",
          "fix": "Compact<Balance>",
          "startTime": "BlockNumber"
        },
        "SurplusAuctionItem": {
          "amount": "Compact<Balance>",
          "startTime": "BlockNumber"
        },
        "LiquidationStrategy": {
          "_enum": [
            "Auction",
            "Exchange"
          ]
        },
        "OptionRate": "Option<Rate>",
        "OptionRatio": "Option<Ratio>",
        "ChangeOptionRate": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "OptionRate"
          }
        },
        "ChangeOptionRatio": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "OptionRatio"
          }
        },
        "ChangeBalance": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "Balance"
          }
        },
        "RiskManagementParams": {
          "maximumTotalDebitValue": "Balance",
          "interestRatePerSec": "Option<Rate>",
          "liquidationRatio": "Option<Rate>",
          "liquidationPenalty": "Option<Rate>",
          "requiredCollateralRatio": "Option<Rate>"
        },
        "CandidateInfoOf": "CandidateInfo",
        "TradingPairProvisionParameters": {
          "minContribution": "(Balance, Balance)",
          "targetProvision": "(Balance, Balance)",
          "accumulatedProvision": "(Balance, Balance)",
          "notBefore": "BlockNumber"
        },
        "BalanceWrapper": {
          "amount": "Balance"
        },
        "BalanceRequest": {
          "amount": "Balance"
        },
        "TradingPairStatus": {
          "_enum": {
            "Disabled": "Null",
            "Provisioning": "TradingPairProvisionParameters",
            "Enabled": "Null"
          }
        },
        "Erc20Info": {
          "address": "EvmAddress",
          "name": "Vec<u8>",
          "symbol": "Vec<u8>",
          "decimals": "u8"
        },
        "EstimateResourcesResponse": {
          "gas": "u256",
          "storage": "i32",
          "weightFee": "u256"
        },
        "EvmAccountInfo": {
          "nonce": "Index",
          "contractInfo": "Option<EvmContractInfo>"
        },
        "CodeInfo": {
          "codeSize": "u32",
          "refCount": "u32"
        },
        "EvmContractInfo": {
          "codeHash": "H256",
          "maintainer": "H160",
          "deployed": "bool"
        },
        "EvmAddress": "H160",
        "CallRequest": {
          "from": "Option<H160>",
          "to": "Option<H160>",
          "gasLimit": "Option<u32>",
          "storageLimit": "Option<u32>",
          "value": "Option<U128>",
          "data": "Option<Bytes>"
        },
        "CallInfo": {
          "exit_reason": "EvmCoreErrorExitReason",
          "value": "Vec<u8>",
          "used_gas": "U256",
          "used_storage": "i32",
          "logs": "Vec<EthereumLog>"
        },
        "CreateInfo": {
          "exit_reason": "EvmCoreErrorExitReason",
          "value": "H160",
          "used_gas": "U256",
          "used_storage": "i32",
          "logs": "Vec<EthereumLog>"
        },
        "EthereumLog": {
          "address": "H160",
          "topics": "Vec<H256>",
          "data": "Bytes"
        },
        "EvmCoreErrorExitReason": {
          "_enum": {
            "Succeed": "EvmCoreErrorExitSucceed",
            "Error": "EvmCoreErrorExitError",
            "Revert": "EvmCoreErrorExitRevert",
            "Fatal": "EvmCoreErrorExitFatal"
          }
        },
        "EvmCoreErrorExitSucceed": {
          "_enum": [
            "Stopped",
            "Returned",
            "Suicided"
          ]
        },
        "EvmCoreErrorExitError": {
          "_enum": {
            "StackUnderflow": "Null",
            "StackOverflow": "Null",
            "InvalidJump": "Null",
            "InvalidRange": "Null",
            "DesignatedInvalid": "Null",
            "CallTooDeep": "Null",
            "CreateCollision": "Null",
            "CreateContractLimit": "Null",
            "OutOfOffset": "Null",
            "OutOfGas": "Null",
            "OutOfFund": "Null",
            "PCUnderflow": "Null",
            "CreateEmpty": "Null",
            "Other": "Text",
            "InvalidCode": "Null"
          }
        },
        "EvmCoreErrorExitRevert": {
          "_enum": [
            "Reverted"
          ]
        },
        "EvmCoreErrorExitFatal": {
          "_enum": {
            "NotSupported": "Null",
            "UnhandledInterrupt": "Null",
            "CallErrorAsFatal": "EvmCoreErrorExitError",
            "Other": "Text"
          }
        },
        "AcalaStakingLedge": {
          "bonded": "Compact<Balance>",
          "unlocking": "Vec<UnlockChunk>"
        },
        "AcalaUnlockChunk": {
          "value": "Compact<Balance>",
          "era": "Compact<EraIndex>"
        },
        "RelaychainAccountId": "AccountId",
        "SlashInfo": {
          "validator": "RelaychainAccountId",
          "relaychainTokenAmount": "Balance"
        },
        "ValidatorBacking": {
          "totalInsurance": "Balance",
          "isFrozen": "bool"
        },
        "Guarantee": {
          "total": "Balance",
          "bonded": "Balance",
          "unbonding": "Option<(Balance, BlockNumber)>"
        },
        "PoolId": {
          "_enum": {
            "LoansIncentive": "CurrencyId",
            "DexIncentive": "CurrencyId",
            "HomaIncentive": "Null",
            "DexSaving": "CurrencyId",
            "HomaValidatorAllowance": "AccountId"
          }
        },
        "PoolIdV0": {
          "_enum": {
            "LoansIncentive": "CurrencyId",
            "DexIncentive": "CurrencyId",
            "HomaIncentive": "Null",
            "DexSaving": "CurrencyId",
            "HomaValidatorAllowance": "AccountId"
          }
        },
        "Position": {
          "collateral": "Balance",
          "debit": "Balance"
        },
        "CID": "Vec<u8>",
        "Attributes": "BTreeMap<Vec<u8>, Vec<u8>>",
        "TokenInfoOf": {
          "metadata": "CID",
          "owner": "AccountId",
          "data": "TokenData"
        },
        "Properties": {
          "_set": {
            "_bitLength": 8,
            "Transferable": 1,
            "Burnable": 2,
            "Mintable": 4,
            "ClassPropertiesMutable": 8
          }
        },
        "ClassData": {
          "deposit": "Balance",
          "properties": "Properties",
          "attributes": "Attributes"
        },
        "TokenData": {
          "deposit": "Balance",
          "attributes": "Attributes"
        },
        "TokenId": "u64",
        "TokenIdOf": "TokenId",
        "NFTClassId": "u32",
        "ClassIdOf": "ClassId",
        "NFTBalance": "u128",
        "NFTBalanceOf": "NFTBalance",
        "ClassInfoOf": {
          "metadata": "CID",
          "totalIssuance": "TokenId",
          "owner": "AccountId",
          "data": "ClassData"
        },
        "NomineeId": "AccountId",
        "HomaUnlockChunk": {
          "value": "Balance",
          "era": "EraIndex"
        },
        "BondingLedger": {
          "total": "Balance",
          "active": "Balance",
          "unlocking": "Vec<HomaUnlockChunk>"
        },
        "OracleKey": "CurrencyId",
        "AsOriginId": "AuthoritysOriginId",
        "ProxyType": {
          "_enum": [
            "Any",
            "CancelProxy",
            "Governance",
            "Auction",
            "Swap",
            "Loan"
          ]
        },
        "AtLeast64BitUnsigned": "u128",
        "StableAssetPoolId": "u32",
        "RelayChainBlockNumberOf": "RelayChainBlockNumber",
        "SubAccountStatus": {
          "bonded": "Balance",
          "available": "Balance",
          "unbonding": "Vec<(EraIndex,Balance)>",
          "mockRewardRate": "Rate"
        },
        "Params": {
          "targetMaxFreeUnbondedRatio": "Ratio",
          "targetMinFreeUnbondedRatio": "Ratio",
          "targetUnbondingToFreeRatio": "Ratio",
          "unbondingToFreeAdjustment": "Ratio",
          "baseFeeRate": "Rate"
        },
        "StakingPoolPhase": {
          "_enum": [
            "Started",
            "RelaychainUpdated",
            "LedgerUpdated",
            "Finished"
          ]
        },
        "Ledger": {
          "bonded": "Balance",
          "unbondingToFree": "Balance",
          "freePool": "Balance",
          "toUnbondNextEra": "(Balance, Balance)"
        },
        "ChangeRate": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "Rate"
          }
        },
        "ChangeRatio": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "Ratio"
          }
        },
        "BalanceInfo": {
          "amount": "Balance"
        },
        "PolkadotAccountId": "AccountId",
        "PolkadotAccountIdOf": "PolkadotAccountId",
        "ExchangeRate": "FixedU128",
        "Rate": "FixedU128",
        "Ratio": "FixedU128",
        "PublicKey": "[u8; 20]",
        "DestAddress": "Vec<u8>",
        "PoolTokenIndex": "u32",
        "AssetId": "CurrencyId",
        "Keys": "SessionKeys1",
        "CompactAssignments": "CompactAssignmentsWith16",
        "DispatchErrorModule": "DispatchErrorModuleU8",
        "RawSolution": "RawSolutionWith16",
        "Weight": "WeightV1",
        "Address": "GenericMultiAddress",
        "LookupSource": "GenericMultiAddress",
        "MultiLocation": "MultiLocationV0",
        "MultiAsset": "MultiAssetV0",
        "Xcm": "XcmV0",
        "XcmOrder": "XcmOrderV0",
        "XcmError": "XcmErrorV0",
        "Response": "ResponseV0"
      }
    },
    {
      "minmax": [
        1008,
        1009
      ],
      "types": {
        "CallOf": "Call",
        "DispatchTime": {
          "_enum": {
            "At": "BlockNumber",
            "After": "BlockNumber"
          }
        },
        "ScheduleTaskIndex": "u32",
        "DelayedOrigin": {
          "delay": "BlockNumber",
          "origin": "PalletsOrigin"
        },
        "AuthorityOrigin": "DelayedOrigin",
        "StorageValue": "Vec<u8>",
        "GraduallyUpdate": {
          "key": "StorageKey",
          "targetValue": "StorageValue",
          "perBlock": "StorageValue"
        },
        "StorageKeyBytes": "Vec<u8>",
        "StorageValueBytes": "Vec<u8>",
        "RpcDataProviderId": "Text",
        "DataProviderId": "u8",
        "TimestampedValue": {
          "value": "OracleValue",
          "timestamp": "Moment"
        },
        "TimestampedValueOf": "TimestampedValue",
        "OrderedSet": "Vec<AccountId>",
        "OrmlAccountData": {
          "free": "Balance",
          "reserved": "Balance",
          "frozen": "Balance"
        },
        "OrmlBalanceLock": {
          "amount": "Balance",
          "id": "LockIdentifier"
        },
        "AuctionInfo": {
          "bid": "Option<(AccountId, Balance)>",
          "start": "BlockNumber",
          "end": "Option<BlockNumber>"
        },
        "DelayedDispatchTime": {
          "_enum": {
            "At": "BlockNumber",
            "After": "BlockNumber"
          }
        },
        "DispatchId": "u32",
        "Price": "FixedU128",
        "OrmlVestingSchedule": {
          "start": "BlockNumber",
          "period": "BlockNumber",
          "periodCount": "u32",
          "perPeriod": "Compact<Balance>"
        },
        "VestingScheduleOf": "OrmlVestingSchedule",
        "OrmlCurrencyId": "CurrencyId",
        "PoolInfo": {
          "totalShares": "Compact<Share>",
          "totalRewards": "Compact<Balance>",
          "totalWithdrawnRewards": "Compact<Balance>"
        },
        "CompactBalance": "Compact<Balance>",
        "PoolInfoV0": {
          "totalShares": "Compact<Share>",
          "totalRewards": "CompactBalance",
          "totalWithdrawnRewards": "CompactBalance"
        },
        "Share": "u128",
        "OracleValue": "Price",
        "Amount": "i128",
        "AmountOf": "Amount",
        "AuctionId": "u32",
        "AuctionIdOf": "AuctionId",
        "TokenSymbol": {
          "_enum": {
            "ACA": 0,
            "AUSD": 1,
            "DOT": 2,
            "LDOT": 3,
            "RENBTC": 20,
            "CASH": 21,
            "KAR": 128,
            "KUSD": 129,
            "KSM": 130,
            "LKSM": 131,
            "BNC": 168,
            "VSKSM": 169,
            "PHA": 170,
            "KINT": 171,
            "KBTC": 172
          }
        },
        "DexShare": {
          "_enum": {
            "Token": "TokenSymbol",
            "Erc20": "EvmAddress"
          }
        },
        "CurrencyId": {
          "_enum": {
            "Token": "TokenSymbol",
            "DEXShare": "(DexShare, DexShare)",
            "ERC20": "EvmAddress",
            "StableAssetPoolToken": "u32",
            "LiquidCrowdloan": "u32",
            "ForeignAsset": "u32"
          }
        },
        "CurrencyIdOf": "CurrencyId",
        "AirDropCurrencyId": {
          "_enum": [
            "KAR",
            "ACA"
          ]
        },
        "AuthoritysOriginId": {
          "_enum": [
            "Root",
            "Treasury",
            "HonzonTreasury",
            "HomaTreasury",
            "TreasuryReserve"
          ]
        },
        "AcalaDataProviderId": {
          "_enum": [
            "Aggregated",
            "Acala",
            "Band"
          ]
        },
        "TradingPair": "(CurrencyId,  CurrencyId)",
        "ChainBridgeChainId": "u8",
        "AcalaAssetMetadata": {
          "name": "Vec<u8>",
          "symbol": "Vec<u8>",
          "decimals": "u8",
          "minimalBalance": "Balance"
        },
        "NumberOrHex": "u128",
        "PalletBalanceOf": "Balance",
        "CollateralAuctionItem": {
          "refundRecipient": "AccountId",
          "currencyId": "CurrencyId",
          "initialAmount": "Compact<Balance>",
          "amount": "Compact<Balance>",
          "target": "Compact<Balance>",
          "startTime": "BlockNumber"
        },
        "DebitAuctionItem": {
          "initialAmount": "Compact<Balance>",
          "amount": "Compact<Balance>",
          "fix": "Compact<Balance>",
          "startTime": "BlockNumber"
        },
        "SurplusAuctionItem": {
          "amount": "Compact<Balance>",
          "startTime": "BlockNumber"
        },
        "LiquidationStrategy": {
          "_enum": [
            "Auction",
            "Exchange"
          ]
        },
        "OptionRate": "Option<Rate>",
        "OptionRatio": "Option<Ratio>",
        "ChangeOptionRate": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "OptionRate"
          }
        },
        "ChangeOptionRatio": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "OptionRatio"
          }
        },
        "ChangeBalance": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "Balance"
          }
        },
        "RiskManagementParams": {
          "maximumTotalDebitValue": "Balance",
          "interestRatePerSec": "Option<Rate>",
          "liquidationRatio": "Option<Rate>",
          "liquidationPenalty": "Option<Rate>",
          "requiredCollateralRatio": "Option<Rate>"
        },
        "CandidateInfoOf": "CandidateInfo",
        "TradingPairProvisionParameters": {
          "minContribution": "(Balance, Balance)",
          "targetProvision": "(Balance, Balance)",
          "accumulatedProvision": "(Balance, Balance)",
          "notBefore": "BlockNumber"
        },
        "BalanceWrapper": {
          "amount": "Balance"
        },
        "BalanceRequest": {
          "amount": "Balance"
        },
        "TradingPairStatus": {
          "_enum": {
            "Disabled": "Null",
            "Provisioning": "TradingPairProvisionParameters",
            "Enabled": "Null"
          }
        },
        "Erc20Info": {
          "address": "EvmAddress",
          "name": "Vec<u8>",
          "symbol": "Vec<u8>",
          "decimals": "u8"
        },
        "EstimateResourcesResponse": {
          "gas": "u256",
          "storage": "i32",
          "weightFee": "u256"
        },
        "EvmAccountInfo": {
          "nonce": "Index",
          "contractInfo": "Option<EvmContractInfo>"
        },
        "CodeInfo": {
          "codeSize": "u32",
          "refCount": "u32"
        },
        "EvmContractInfo": {
          "codeHash": "H256",
          "maintainer": "H160",
          "deployed": "bool"
        },
        "EvmAddress": "H160",
        "CallRequest": {
          "from": "Option<H160>",
          "to": "Option<H160>",
          "gasLimit": "Option<u32>",
          "storageLimit": "Option<u32>",
          "value": "Option<U128>",
          "data": "Option<Bytes>"
        },
        "CallInfo": {
          "exit_reason": "EvmCoreErrorExitReason",
          "value": "Vec<u8>",
          "used_gas": "U256",
          "used_storage": "i32",
          "logs": "Vec<EthereumLog>"
        },
        "CreateInfo": {
          "exit_reason": "EvmCoreErrorExitReason",
          "value": "H160",
          "used_gas": "U256",
          "used_storage": "i32",
          "logs": "Vec<EthereumLog>"
        },
        "EthereumLog": {
          "address": "H160",
          "topics": "Vec<H256>",
          "data": "Bytes"
        },
        "EvmCoreErrorExitReason": {
          "_enum": {
            "Succeed": "EvmCoreErrorExitSucceed",
            "Error": "EvmCoreErrorExitError",
            "Revert": "EvmCoreErrorExitRevert",
            "Fatal": "EvmCoreErrorExitFatal"
          }
        },
        "EvmCoreErrorExitSucceed": {
          "_enum": [
            "Stopped",
            "Returned",
            "Suicided"
          ]
        },
        "EvmCoreErrorExitError": {
          "_enum": {
            "StackUnderflow": "Null",
            "StackOverflow": "Null",
            "InvalidJump": "Null",
            "InvalidRange": "Null",
            "DesignatedInvalid": "Null",
            "CallTooDeep": "Null",
            "CreateCollision": "Null",
            "CreateContractLimit": "Null",
            "OutOfOffset": "Null",
            "OutOfGas": "Null",
            "OutOfFund": "Null",
            "PCUnderflow": "Null",
            "CreateEmpty": "Null",
            "Other": "Text",
            "InvalidCode": "Null"
          }
        },
        "EvmCoreErrorExitRevert": {
          "_enum": [
            "Reverted"
          ]
        },
        "EvmCoreErrorExitFatal": {
          "_enum": {
            "NotSupported": "Null",
            "UnhandledInterrupt": "Null",
            "CallErrorAsFatal": "EvmCoreErrorExitError",
            "Other": "Text"
          }
        },
        "AcalaStakingLedge": {
          "bonded": "Compact<Balance>",
          "unlocking": "Vec<UnlockChunk>"
        },
        "AcalaUnlockChunk": {
          "value": "Compact<Balance>",
          "era": "Compact<EraIndex>"
        },
        "RelaychainAccountId": "AccountId",
        "SlashInfo": {
          "validator": "RelaychainAccountId",
          "relaychainTokenAmount": "Balance"
        },
        "ValidatorBacking": {
          "totalInsurance": "Balance",
          "isFrozen": "bool"
        },
        "Guarantee": {
          "total": "Balance",
          "bonded": "Balance",
          "unbonding": "Option<(Balance, BlockNumber)>"
        },
        "PoolId": {
          "_enum": {
            "LoansIncentive": "CurrencyId",
            "DexIncentive": "CurrencyId",
            "HomaIncentive": "Null",
            "DexSaving": "CurrencyId",
            "HomaValidatorAllowance": "AccountId"
          }
        },
        "PoolIdV0": {
          "_enum": {
            "LoansIncentive": "CurrencyId",
            "DexIncentive": "CurrencyId",
            "HomaIncentive": "Null",
            "DexSaving": "CurrencyId",
            "HomaValidatorAllowance": "AccountId"
          }
        },
        "Position": {
          "collateral": "Balance",
          "debit": "Balance"
        },
        "CID": "Vec<u8>",
        "Attributes": "BTreeMap<Vec<u8>, Vec<u8>>",
        "TokenInfoOf": {
          "metadata": "CID",
          "owner": "AccountId",
          "data": "TokenData"
        },
        "Properties": {
          "_set": {
            "_bitLength": 8,
            "Transferable": 1,
            "Burnable": 2,
            "Mintable": 4,
            "ClassPropertiesMutable": 8
          }
        },
        "ClassData": {
          "deposit": "Balance",
          "properties": "Properties",
          "attributes": "Attributes"
        },
        "TokenData": {
          "deposit": "Balance",
          "attributes": "Attributes"
        },
        "TokenId": "u64",
        "TokenIdOf": "TokenId",
        "NFTClassId": "u32",
        "ClassIdOf": "ClassId",
        "NFTBalance": "u128",
        "NFTBalanceOf": "NFTBalance",
        "ClassInfoOf": {
          "metadata": "CID",
          "totalIssuance": "TokenId",
          "owner": "AccountId",
          "data": "ClassData"
        },
        "NomineeId": "AccountId",
        "HomaUnlockChunk": {
          "value": "Balance",
          "era": "EraIndex"
        },
        "BondingLedger": {
          "total": "Balance",
          "active": "Balance",
          "unlocking": "Vec<HomaUnlockChunk>"
        },
        "OracleKey": "CurrencyId",
        "AsOriginId": "AuthoritysOriginId",
        "ProxyType": {
          "_enum": [
            "Any",
            "CancelProxy",
            "Governance",
            "Auction",
            "Swap",
            "Loan"
          ]
        },
        "AtLeast64BitUnsigned": "u128",
        "StableAssetPoolId": "u32",
        "RelayChainBlockNumberOf": "RelayChainBlockNumber",
        "SubAccountStatus": {
          "bonded": "Balance",
          "available": "Balance",
          "unbonding": "Vec<(EraIndex,Balance)>",
          "mockRewardRate": "Rate"
        },
        "Params": {
          "targetMaxFreeUnbondedRatio": "Ratio",
          "targetMinFreeUnbondedRatio": "Ratio",
          "targetUnbondingToFreeRatio": "Ratio",
          "unbondingToFreeAdjustment": "Ratio",
          "baseFeeRate": "Rate"
        },
        "StakingPoolPhase": {
          "_enum": [
            "Started",
            "RelaychainUpdated",
            "LedgerUpdated",
            "Finished"
          ]
        },
        "Ledger": {
          "bonded": "Balance",
          "unbondingToFree": "Balance",
          "freePool": "Balance",
          "toUnbondNextEra": "(Balance, Balance)"
        },
        "ChangeRate": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "Rate"
          }
        },
        "ChangeRatio": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "Ratio"
          }
        },
        "BalanceInfo": {
          "amount": "Balance"
        },
        "PolkadotAccountId": "AccountId",
        "PolkadotAccountIdOf": "PolkadotAccountId",
        "ExchangeRate": "FixedU128",
        "Rate": "FixedU128",
        "Ratio": "FixedU128",
        "PublicKey": "[u8; 20]",
        "DestAddress": "Vec<u8>",
        "PoolTokenIndex": "u32",
        "AssetId": "CurrencyId",
        "Keys": "SessionKeys1",
        "CompactAssignments": "CompactAssignmentsWith16",
        "DispatchErrorModule": "DispatchErrorModuleU8",
        "RawSolution": "RawSolutionWith16",
        "Weight": "WeightV1",
        "Address": "GenericMultiAddress",
        "LookupSource": "GenericMultiAddress",
        "MultiLocation": "MultiLocationV0",
        "MultiAsset": "MultiAssetV0",
        "Xcm": "XcmV0",
        "XcmOrder": "XcmOrderV0",
        "XcmError": "XcmErrorV0",
        "Response": "ResponseV0"
      }
    },
    {
      "minmax": [
        1010,
        1013
      ],
      "types": {
        "CallOf": "Call",
        "DispatchTime": {
          "_enum": {
            "At": "BlockNumber",
            "After": "BlockNumber"
          }
        },
        "ScheduleTaskIndex": "u32",
        "DelayedOrigin": {
          "delay": "BlockNumber",
          "origin": "PalletsOrigin"
        },
        "AuthorityOrigin": "DelayedOrigin",
        "StorageValue": "Vec<u8>",
        "GraduallyUpdate": {
          "key": "StorageKey",
          "targetValue": "StorageValue",
          "perBlock": "StorageValue"
        },
        "StorageKeyBytes": "Vec<u8>",
        "StorageValueBytes": "Vec<u8>",
        "RpcDataProviderId": "Text",
        "DataProviderId": "u8",
        "TimestampedValue": {
          "value": "OracleValue",
          "timestamp": "Moment"
        },
        "TimestampedValueOf": "TimestampedValue",
        "OrderedSet": "Vec<AccountId>",
        "OrmlAccountData": {
          "free": "Balance",
          "reserved": "Balance",
          "frozen": "Balance"
        },
        "OrmlBalanceLock": {
          "amount": "Balance",
          "id": "LockIdentifier"
        },
        "AuctionInfo": {
          "bid": "Option<(AccountId, Balance)>",
          "start": "BlockNumber",
          "end": "Option<BlockNumber>"
        },
        "DelayedDispatchTime": {
          "_enum": {
            "At": "BlockNumber",
            "After": "BlockNumber"
          }
        },
        "DispatchId": "u32",
        "Price": "FixedU128",
        "OrmlVestingSchedule": {
          "start": "BlockNumber",
          "period": "BlockNumber",
          "periodCount": "u32",
          "perPeriod": "Compact<Balance>"
        },
        "VestingScheduleOf": "OrmlVestingSchedule",
        "OrmlCurrencyId": "CurrencyId",
        "PoolInfo": {
          "totalShares": "Share",
          "rewards": "BTreeMap<OrmlCurrencyId, (Balance, Balance)>"
        },
        "CompactBalance": "Compact<Balance>",
        "PoolInfoV0": {
          "totalShares": "Compact<Share>",
          "totalRewards": "CompactBalance",
          "totalWithdrawnRewards": "CompactBalance"
        },
        "Share": "u128",
        "OracleValue": "Price",
        "Amount": "i128",
        "AmountOf": "Amount",
        "AuctionId": "u32",
        "AuctionIdOf": "AuctionId",
        "TokenSymbol": {
          "_enum": {
            "ACA": 0,
            "AUSD": 1,
            "DOT": 2,
            "LDOT": 3,
            "RENBTC": 20,
            "CASH": 21,
            "KAR": 128,
            "KUSD": 129,
            "KSM": 130,
            "LKSM": 131,
            "BNC": 168,
            "VSKSM": 169,
            "PHA": 170,
            "KINT": 171,
            "KBTC": 172
          }
        },
        "DexShare": {
          "_enum": {
            "Token": "TokenSymbol",
            "Erc20": "EvmAddress"
          }
        },
        "CurrencyId": {
          "_enum": {
            "Token": "TokenSymbol",
            "DEXShare": "(DexShare, DexShare)",
            "ERC20": "EvmAddress",
            "StableAssetPoolToken": "u32",
            "LiquidCrowdloan": "u32",
            "ForeignAsset": "u32"
          }
        },
        "CurrencyIdOf": "CurrencyId",
        "AirDropCurrencyId": {
          "_enum": [
            "KAR",
            "ACA"
          ]
        },
        "AuthoritysOriginId": {
          "_enum": [
            "Root",
            "Treasury",
            "HonzonTreasury",
            "HomaTreasury",
            "TreasuryReserve"
          ]
        },
        "AcalaDataProviderId": {
          "_enum": [
            "Aggregated",
            "Acala",
            "Band"
          ]
        },
        "TradingPair": "(CurrencyId,  CurrencyId)",
        "ChainBridgeChainId": "u8",
        "AcalaAssetMetadata": {
          "name": "Vec<u8>",
          "symbol": "Vec<u8>",
          "decimals": "u8",
          "minimalBalance": "Balance"
        },
        "NumberOrHex": "u128",
        "PalletBalanceOf": "Balance",
        "CollateralAuctionItem": {
          "refundRecipient": "AccountId",
          "currencyId": "CurrencyId",
          "initialAmount": "Compact<Balance>",
          "amount": "Compact<Balance>",
          "target": "Compact<Balance>",
          "startTime": "BlockNumber"
        },
        "DebitAuctionItem": {
          "initialAmount": "Compact<Balance>",
          "amount": "Compact<Balance>",
          "fix": "Compact<Balance>",
          "startTime": "BlockNumber"
        },
        "SurplusAuctionItem": {
          "amount": "Compact<Balance>",
          "startTime": "BlockNumber"
        },
        "LiquidationStrategy": {
          "_enum": [
            "Auction",
            "Exchange"
          ]
        },
        "OptionRate": "Option<Rate>",
        "OptionRatio": "Option<Ratio>",
        "ChangeOptionRate": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "OptionRate"
          }
        },
        "ChangeOptionRatio": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "OptionRatio"
          }
        },
        "ChangeBalance": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "Balance"
          }
        },
        "RiskManagementParams": {
          "maximumTotalDebitValue": "Balance",
          "interestRatePerSec": "Option<Rate>",
          "liquidationRatio": "Option<Rate>",
          "liquidationPenalty": "Option<Rate>",
          "requiredCollateralRatio": "Option<Rate>"
        },
        "CandidateInfoOf": "CandidateInfo",
        "TradingPairProvisionParameters": {
          "minContribution": "(Balance, Balance)",
          "targetProvision": "(Balance, Balance)",
          "accumulatedProvision": "(Balance, Balance)",
          "notBefore": "BlockNumber"
        },
        "BalanceWrapper": {
          "amount": "Balance"
        },
        "BalanceRequest": {
          "amount": "Balance"
        },
        "TradingPairStatus": {
          "_enum": {
            "Disabled": "Null",
            "Provisioning": "TradingPairProvisionParameters",
            "Enabled": "Null"
          }
        },
        "Erc20Info": {
          "address": "EvmAddress",
          "name": "Vec<u8>",
          "symbol": "Vec<u8>",
          "decimals": "u8"
        },
        "EstimateResourcesResponse": {
          "gas": "u256",
          "storage": "i32",
          "weightFee": "u256"
        },
        "EvmAccountInfo": {
          "nonce": "Index",
          "contractInfo": "Option<EvmContractInfo>"
        },
        "CodeInfo": {
          "codeSize": "u32",
          "refCount": "u32"
        },
        "EvmContractInfo": {
          "codeHash": "H256",
          "maintainer": "H160",
          "deployed": "bool"
        },
        "EvmAddress": "H160",
        "CallRequest": {
          "from": "Option<H160>",
          "to": "Option<H160>",
          "gasLimit": "Option<u32>",
          "storageLimit": "Option<u32>",
          "value": "Option<U128>",
          "data": "Option<Bytes>"
        },
        "CallInfo": {
          "exit_reason": "EvmCoreErrorExitReason",
          "value": "Vec<u8>",
          "used_gas": "U256",
          "used_storage": "i32",
          "logs": "Vec<EthereumLog>"
        },
        "CreateInfo": {
          "exit_reason": "EvmCoreErrorExitReason",
          "value": "H160",
          "used_gas": "U256",
          "used_storage": "i32",
          "logs": "Vec<EthereumLog>"
        },
        "EthereumLog": {
          "address": "H160",
          "topics": "Vec<H256>",
          "data": "Bytes"
        },
        "EvmCoreErrorExitReason": {
          "_enum": {
            "Succeed": "EvmCoreErrorExitSucceed",
            "Error": "EvmCoreErrorExitError",
            "Revert": "EvmCoreErrorExitRevert",
            "Fatal": "EvmCoreErrorExitFatal"
          }
        },
        "EvmCoreErrorExitSucceed": {
          "_enum": [
            "Stopped",
            "Returned",
            "Suicided"
          ]
        },
        "EvmCoreErrorExitError": {
          "_enum": {
            "StackUnderflow": "Null",
            "StackOverflow": "Null",
            "InvalidJump": "Null",
            "InvalidRange": "Null",
            "DesignatedInvalid": "Null",
            "CallTooDeep": "Null",
            "CreateCollision": "Null",
            "CreateContractLimit": "Null",
            "OutOfOffset": "Null",
            "OutOfGas": "Null",
            "OutOfFund": "Null",
            "PCUnderflow": "Null",
            "CreateEmpty": "Null",
            "Other": "Text",
            "InvalidCode": "Null"
          }
        },
        "EvmCoreErrorExitRevert": {
          "_enum": [
            "Reverted"
          ]
        },
        "EvmCoreErrorExitFatal": {
          "_enum": {
            "NotSupported": "Null",
            "UnhandledInterrupt": "Null",
            "CallErrorAsFatal": "EvmCoreErrorExitError",
            "Other": "Text"
          }
        },
        "AcalaStakingLedge": {
          "bonded": "Compact<Balance>",
          "unlocking": "Vec<UnlockChunk>"
        },
        "AcalaUnlockChunk": {
          "value": "Compact<Balance>",
          "era": "Compact<EraIndex>"
        },
        "RelaychainAccountId": "AccountId",
        "SlashInfo": {
          "validator": "RelaychainAccountId",
          "relaychainTokenAmount": "Balance"
        },
        "ValidatorBacking": {
          "totalInsurance": "Balance",
          "isFrozen": "bool"
        },
        "Guarantee": {
          "total": "Balance",
          "bonded": "Balance",
          "unbonding": "Option<(Balance, BlockNumber)>"
        },
        "PoolId": {
          "_enum": {
            "Loans": "CurrencyId",
            "Dex": "CurrencyId"
          }
        },
        "PoolIdV0": {
          "_enum": {
            "LoansIncentive": "CurrencyId",
            "DexIncentive": "CurrencyId",
            "HomaIncentive": "Null",
            "DexSaving": "CurrencyId",
            "HomaValidatorAllowance": "AccountId"
          }
        },
        "Position": {
          "collateral": "Balance",
          "debit": "Balance"
        },
        "CID": "Vec<u8>",
        "Attributes": "BTreeMap<Vec<u8>, Vec<u8>>",
        "TokenInfoOf": {
          "metadata": "CID",
          "owner": "AccountId",
          "data": "TokenData"
        },
        "Properties": {
          "_set": {
            "_bitLength": 8,
            "Transferable": 1,
            "Burnable": 2,
            "Mintable": 4,
            "ClassPropertiesMutable": 8
          }
        },
        "ClassData": {
          "deposit": "Balance",
          "properties": "Properties",
          "attributes": "Attributes"
        },
        "TokenData": {
          "deposit": "Balance",
          "attributes": "Attributes"
        },
        "TokenId": "u64",
        "TokenIdOf": "TokenId",
        "NFTClassId": "u32",
        "ClassIdOf": "ClassId",
        "NFTBalance": "u128",
        "NFTBalanceOf": "NFTBalance",
        "ClassInfoOf": {
          "metadata": "CID",
          "totalIssuance": "TokenId",
          "owner": "AccountId",
          "data": "ClassData"
        },
        "NomineeId": "AccountId",
        "HomaUnlockChunk": {
          "value": "Balance",
          "era": "EraIndex"
        },
        "BondingLedger": {
          "total": "Balance",
          "active": "Balance",
          "unlocking": "Vec<HomaUnlockChunk>"
        },
        "OracleKey": "CurrencyId",
        "AsOriginId": "AuthoritysOriginId",
        "ProxyType": {
          "_enum": [
            "Any",
            "CancelProxy",
            "Governance",
            "Auction",
            "Swap",
            "Loan"
          ]
        },
        "AtLeast64BitUnsigned": "u128",
        "StableAssetPoolId": "u32",
        "RelayChainBlockNumberOf": "RelayChainBlockNumber",
        "SubAccountStatus": {
          "bonded": "Balance",
          "available": "Balance",
          "unbonding": "Vec<(EraIndex,Balance)>",
          "mockRewardRate": "Rate"
        },
        "Params": {
          "targetMaxFreeUnbondedRatio": "Ratio",
          "targetMinFreeUnbondedRatio": "Ratio",
          "targetUnbondingToFreeRatio": "Ratio",
          "unbondingToFreeAdjustment": "Ratio",
          "baseFeeRate": "Rate"
        },
        "StakingPoolPhase": {
          "_enum": [
            "Started",
            "RelaychainUpdated",
            "LedgerUpdated",
            "Finished"
          ]
        },
        "Ledger": {
          "bonded": "Balance",
          "unbondingToFree": "Balance",
          "freePool": "Balance",
          "toUnbondNextEra": "(Balance, Balance)"
        },
        "ChangeRate": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "Rate"
          }
        },
        "ChangeRatio": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "Ratio"
          }
        },
        "BalanceInfo": {
          "amount": "Balance"
        },
        "PolkadotAccountId": "AccountId",
        "PolkadotAccountIdOf": "PolkadotAccountId",
        "ExchangeRate": "FixedU128",
        "Rate": "FixedU128",
        "Ratio": "FixedU128",
        "PublicKey": "[u8; 20]",
        "DestAddress": "Vec<u8>",
        "PoolTokenIndex": "u32",
        "AssetId": "CurrencyId",
        "Keys": "SessionKeys1",
        "CompactAssignments": "CompactAssignmentsWith16",
        "DispatchErrorModule": "DispatchErrorModuleU8",
        "RawSolution": "RawSolutionWith16",
        "Weight": "WeightV1",
        "Address": "GenericMultiAddress",
        "LookupSource": "GenericMultiAddress",
        "MultiLocation": "MultiLocationV0",
        "MultiAsset": "MultiAssetV0",
        "Xcm": "XcmV0",
        "XcmOrder": "XcmOrderV0",
        "XcmError": "XcmErrorV0",
        "Response": "ResponseV0"
      }
    },
    {
      "minmax": [
        1014,
        1018
      ],
      "types": {
        "CallOf": "Call",
        "DispatchTime": {
          "_enum": {
            "At": "BlockNumber",
            "After": "BlockNumber"
          }
        },
        "ScheduleTaskIndex": "u32",
        "DelayedOrigin": {
          "delay": "BlockNumber",
          "origin": "PalletsOrigin"
        },
        "AuthorityOrigin": "DelayedOrigin",
        "StorageValue": "Vec<u8>",
        "GraduallyUpdate": {
          "key": "StorageKey",
          "targetValue": "StorageValue",
          "perBlock": "StorageValue"
        },
        "StorageKeyBytes": "Vec<u8>",
        "StorageValueBytes": "Vec<u8>",
        "RpcDataProviderId": "Text",
        "DataProviderId": "u8",
        "TimestampedValue": {
          "value": "OracleValue",
          "timestamp": "Moment"
        },
        "TimestampedValueOf": "TimestampedValue",
        "OrderedSet": "Vec<AccountId>",
        "OrmlAccountData": {
          "free": "Balance",
          "reserved": "Balance",
          "frozen": "Balance"
        },
        "OrmlBalanceLock": {
          "amount": "Balance",
          "id": "LockIdentifier"
        },
        "AuctionInfo": {
          "bid": "Option<(AccountId, Balance)>",
          "start": "BlockNumber",
          "end": "Option<BlockNumber>"
        },
        "DelayedDispatchTime": {
          "_enum": {
            "At": "BlockNumber",
            "After": "BlockNumber"
          }
        },
        "DispatchId": "u32",
        "Price": "FixedU128",
        "OrmlVestingSchedule": {
          "start": "BlockNumber",
          "period": "BlockNumber",
          "periodCount": "u32",
          "perPeriod": "Compact<Balance>"
        },
        "VestingScheduleOf": "OrmlVestingSchedule",
        "OrmlCurrencyId": "CurrencyId",
        "PoolInfo": {
          "totalShares": "Share",
          "rewards": "BTreeMap<OrmlCurrencyId, (Balance, Balance)>"
        },
        "CompactBalance": "Compact<Balance>",
        "PoolInfoV0": {
          "totalShares": "Compact<Share>",
          "totalRewards": "CompactBalance",
          "totalWithdrawnRewards": "CompactBalance"
        },
        "Share": "u128",
        "OracleValue": "Price",
        "Amount": "i128",
        "AmountOf": "Amount",
        "AuctionId": "u32",
        "AuctionIdOf": "AuctionId",
        "TokenSymbol": {
          "_enum": {
            "ACA": 0,
            "AUSD": 1,
            "DOT": 2,
            "LDOT": 3,
            "RENBTC": 20,
            "CASH": 21,
            "KAR": 128,
            "KUSD": 129,
            "KSM": 130,
            "LKSM": 131,
            "BNC": 168,
            "VSKSM": 169,
            "PHA": 170,
            "KINT": 171,
            "KBTC": 172
          }
        },
        "DexShare": {
          "_enum": {
            "Token": "TokenSymbol",
            "Erc20": "EvmAddress"
          }
        },
        "CurrencyId": {
          "_enum": {
            "Token": "TokenSymbol",
            "DEXShare": "(DexShare, DexShare)",
            "ERC20": "EvmAddress",
            "StableAssetPoolToken": "u32",
            "LiquidCrowdloan": "u32",
            "ForeignAsset": "u32"
          }
        },
        "CurrencyIdOf": "CurrencyId",
        "AirDropCurrencyId": {
          "_enum": [
            "KAR",
            "ACA"
          ]
        },
        "AuthoritysOriginId": {
          "_enum": [
            "Root",
            "Treasury",
            "HonzonTreasury",
            "HomaTreasury",
            "TreasuryReserve"
          ]
        },
        "AcalaDataProviderId": {
          "_enum": [
            "Aggregated",
            "Acala",
            "Band"
          ]
        },
        "TradingPair": "(CurrencyId,  CurrencyId)",
        "ChainBridgeChainId": "u8",
        "AcalaAssetMetadata": {
          "name": "Vec<u8>",
          "symbol": "Vec<u8>",
          "decimals": "u8",
          "minimalBalance": "Balance"
        },
        "NumberOrHex": "u128",
        "PalletBalanceOf": "Balance",
        "CollateralAuctionItem": {
          "refundRecipient": "AccountId",
          "currencyId": "CurrencyId",
          "initialAmount": "Compact<Balance>",
          "amount": "Compact<Balance>",
          "target": "Compact<Balance>",
          "startTime": "BlockNumber"
        },
        "DebitAuctionItem": {
          "initialAmount": "Compact<Balance>",
          "amount": "Compact<Balance>",
          "fix": "Compact<Balance>",
          "startTime": "BlockNumber"
        },
        "SurplusAuctionItem": {
          "amount": "Compact<Balance>",
          "startTime": "BlockNumber"
        },
        "LiquidationStrategy": {
          "_enum": [
            "Auction",
            "Exchange"
          ]
        },
        "OptionRate": "Option<Rate>",
        "OptionRatio": "Option<Ratio>",
        "ChangeOptionRate": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "OptionRate"
          }
        },
        "ChangeOptionRatio": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "OptionRatio"
          }
        },
        "ChangeBalance": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "Balance"
          }
        },
        "RiskManagementParams": {
          "maximumTotalDebitValue": "Balance",
          "interestRatePerSec": "Option<Rate>",
          "liquidationRatio": "Option<Rate>",
          "liquidationPenalty": "Option<Rate>",
          "requiredCollateralRatio": "Option<Rate>"
        },
        "CandidateInfoOf": "CandidateInfo",
        "TradingPairProvisionParameters": {
          "minContribution": "(Balance, Balance)",
          "targetProvision": "(Balance, Balance)",
          "accumulatedProvision": "(Balance, Balance)",
          "notBefore": "BlockNumber"
        },
        "BalanceWrapper": {
          "amount": "Balance"
        },
        "BalanceRequest": {
          "amount": "Balance"
        },
        "TradingPairStatus": {
          "_enum": {
            "Disabled": "Null",
            "Provisioning": "TradingPairProvisionParameters",
            "Enabled": "Null"
          }
        },
        "Erc20Info": {
          "address": "EvmAddress",
          "name": "Vec<u8>",
          "symbol": "Vec<u8>",
          "decimals": "u8"
        },
        "EstimateResourcesResponse": {
          "gas": "u256",
          "storage": "i32",
          "weightFee": "u256"
        },
        "EvmAccountInfo": {
          "nonce": "Index",
          "contractInfo": "Option<EvmContractInfo>"
        },
        "CodeInfo": {
          "codeSize": "u32",
          "refCount": "u32"
        },
        "EvmContractInfo": {
          "codeHash": "H256",
          "maintainer": "H160",
          "deployed": "bool"
        },
        "EvmAddress": "H160",
        "CallRequest": {
          "from": "Option<H160>",
          "to": "Option<H160>",
          "gasLimit": "Option<u32>",
          "storageLimit": "Option<u32>",
          "value": "Option<U128>",
          "data": "Option<Bytes>"
        },
        "CallInfo": {
          "exit_reason": "EvmCoreErrorExitReason",
          "value": "Vec<u8>",
          "used_gas": "U256",
          "used_storage": "i32",
          "logs": "Vec<EthereumLog>"
        },
        "CreateInfo": {
          "exit_reason": "EvmCoreErrorExitReason",
          "value": "H160",
          "used_gas": "U256",
          "used_storage": "i32",
          "logs": "Vec<EthereumLog>"
        },
        "EthereumLog": {
          "address": "H160",
          "topics": "Vec<H256>",
          "data": "Bytes"
        },
        "EvmCoreErrorExitReason": {
          "_enum": {
            "Succeed": "EvmCoreErrorExitSucceed",
            "Error": "EvmCoreErrorExitError",
            "Revert": "EvmCoreErrorExitRevert",
            "Fatal": "EvmCoreErrorExitFatal"
          }
        },
        "EvmCoreErrorExitSucceed": {
          "_enum": [
            "Stopped",
            "Returned",
            "Suicided"
          ]
        },
        "EvmCoreErrorExitError": {
          "_enum": {
            "StackUnderflow": "Null",
            "StackOverflow": "Null",
            "InvalidJump": "Null",
            "InvalidRange": "Null",
            "DesignatedInvalid": "Null",
            "CallTooDeep": "Null",
            "CreateCollision": "Null",
            "CreateContractLimit": "Null",
            "OutOfOffset": "Null",
            "OutOfGas": "Null",
            "OutOfFund": "Null",
            "PCUnderflow": "Null",
            "CreateEmpty": "Null",
            "Other": "Text",
            "InvalidCode": "Null"
          }
        },
        "EvmCoreErrorExitRevert": {
          "_enum": [
            "Reverted"
          ]
        },
        "EvmCoreErrorExitFatal": {
          "_enum": {
            "NotSupported": "Null",
            "UnhandledInterrupt": "Null",
            "CallErrorAsFatal": "EvmCoreErrorExitError",
            "Other": "Text"
          }
        },
        "AcalaStakingLedge": {
          "bonded": "Compact<Balance>",
          "unlocking": "Vec<UnlockChunk>"
        },
        "AcalaUnlockChunk": {
          "value": "Compact<Balance>",
          "era": "Compact<EraIndex>"
        },
        "RelaychainAccountId": "AccountId",
        "SlashInfo": {
          "validator": "RelaychainAccountId",
          "relaychainTokenAmount": "Balance"
        },
        "ValidatorBacking": {
          "totalInsurance": "Balance",
          "isFrozen": "bool"
        },
        "Guarantee": {
          "total": "Balance",
          "bonded": "Balance",
          "unbonding": "Option<(Balance, BlockNumber)>"
        },
        "PoolId": {
          "_enum": {
            "Loans": "CurrencyId",
            "Dex": "CurrencyId"
          }
        },
        "PoolIdV0": {
          "_enum": {
            "LoansIncentive": "CurrencyId",
            "DexIncentive": "CurrencyId",
            "HomaIncentive": "Null",
            "DexSaving": "CurrencyId",
            "HomaValidatorAllowance": "AccountId"
          }
        },
        "Position": {
          "collateral": "Balance",
          "debit": "Balance"
        },
        "CID": "Vec<u8>",
        "Attributes": "BTreeMap<Vec<u8>, Vec<u8>>",
        "TokenInfoOf": {
          "metadata": "CID",
          "owner": "AccountId",
          "data": "TokenData"
        },
        "Properties": {
          "_set": {
            "_bitLength": 8,
            "Transferable": 1,
            "Burnable": 2,
            "Mintable": 4,
            "ClassPropertiesMutable": 8
          }
        },
        "ClassData": {
          "deposit": "Balance",
          "properties": "Properties",
          "attributes": "Attributes"
        },
        "TokenData": {
          "deposit": "Balance",
          "attributes": "Attributes"
        },
        "TokenId": "u64",
        "TokenIdOf": "TokenId",
        "NFTClassId": "u32",
        "ClassIdOf": "ClassId",
        "NFTBalance": "u128",
        "NFTBalanceOf": "NFTBalance",
        "ClassInfoOf": {
          "metadata": "CID",
          "totalIssuance": "TokenId",
          "owner": "AccountId",
          "data": "ClassData"
        },
        "NomineeId": "AccountId",
        "HomaUnlockChunk": {
          "value": "Balance",
          "era": "EraIndex"
        },
        "BondingLedger": {
          "total": "Balance",
          "active": "Balance",
          "unlocking": "Vec<HomaUnlockChunk>"
        },
        "OracleKey": "CurrencyId",
        "AsOriginId": "AuthoritysOriginId",
        "ProxyType": {
          "_enum": [
            "Any",
            "CancelProxy",
            "Governance",
            "Auction",
            "Swap",
            "Loan"
          ]
        },
        "AtLeast64BitUnsigned": "u128",
        "StableAssetPoolId": "u32",
        "RelayChainBlockNumberOf": "RelayChainBlockNumber",
        "SubAccountStatus": {
          "bonded": "Balance",
          "available": "Balance",
          "unbonding": "Vec<(EraIndex,Balance)>",
          "mockRewardRate": "Rate"
        },
        "Params": {
          "targetMaxFreeUnbondedRatio": "Ratio",
          "targetMinFreeUnbondedRatio": "Ratio",
          "targetUnbondingToFreeRatio": "Ratio",
          "unbondingToFreeAdjustment": "Ratio",
          "baseFeeRate": "Rate"
        },
        "StakingPoolPhase": {
          "_enum": [
            "Started",
            "RelaychainUpdated",
            "LedgerUpdated",
            "Finished"
          ]
        },
        "Ledger": {
          "bonded": "Balance",
          "unbondingToFree": "Balance",
          "freePool": "Balance",
          "toUnbondNextEra": "(Balance, Balance)"
        },
        "ChangeRate": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "Rate"
          }
        },
        "ChangeRatio": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "Ratio"
          }
        },
        "BalanceInfo": {
          "amount": "Balance"
        },
        "PolkadotAccountId": "AccountId",
        "PolkadotAccountIdOf": "PolkadotAccountId",
        "ExchangeRate": "FixedU128",
        "Rate": "FixedU128",
        "Ratio": "FixedU128",
        "PublicKey": "[u8; 20]",
        "DestAddress": "Vec<u8>",
        "PoolTokenIndex": "u32",
        "AssetId": "CurrencyId",
        "Keys": "SessionKeys1",
        "CompactAssignments": "CompactAssignmentsWith16",
        "DispatchErrorModule": "DispatchErrorModuleU8",
        "RawSolution": "RawSolutionWith16",
        "Weight": "WeightV1",
        "Address": "GenericMultiAddress",
        "LookupSource": "GenericMultiAddress",
        "MultiLocation": "MultiLocationV1",
        "MultiAsset": "MultiAssetV1",
        "Xcm": "XcmV1",
        "XcmOrder": "XcmOrderV1",
        "XcmError": "XcmErrorV1",
        "Response": "ResponseV1"
      }
    },
    {
      "minmax": [
        1019,
        null
      ],
      "types": {
        "CallOf": "Call",
        "DispatchTime": {
          "_enum": {
            "At": "BlockNumber",
            "After": "BlockNumber"
          }
        },
        "ScheduleTaskIndex": "u32",
        "DelayedOrigin": {
          "delay": "BlockNumber",
          "origin": "PalletsOrigin"
        },
        "AuthorityOrigin": "DelayedOrigin",
        "StorageValue": "Vec<u8>",
        "GraduallyUpdate": {
          "key": "StorageKey",
          "targetValue": "StorageValue",
          "perBlock": "StorageValue"
        },
        "StorageKeyBytes": "Vec<u8>",
        "StorageValueBytes": "Vec<u8>",
        "RpcDataProviderId": "Text",
        "DataProviderId": "u8",
        "TimestampedValue": {
          "value": "OracleValue",
          "timestamp": "Moment"
        },
        "TimestampedValueOf": "TimestampedValue",
        "OrderedSet": "Vec<AccountId>",
        "OrmlAccountData": {
          "free": "Balance",
          "reserved": "Balance",
          "frozen": "Balance"
        },
        "OrmlBalanceLock": {
          "amount": "Balance",
          "id": "LockIdentifier"
        },
        "AuctionInfo": {
          "bid": "Option<(AccountId, Balance)>",
          "start": "BlockNumber",
          "end": "Option<BlockNumber>"
        },
        "DelayedDispatchTime": {
          "_enum": {
            "At": "BlockNumber",
            "After": "BlockNumber"
          }
        },
        "DispatchId": "u32",
        "Price": "FixedU128",
        "OrmlVestingSchedule": {
          "start": "BlockNumber",
          "period": "BlockNumber",
          "periodCount": "u32",
          "perPeriod": "Compact<Balance>"
        },
        "VestingScheduleOf": "OrmlVestingSchedule",
        "OrmlCurrencyId": "CurrencyId",
        "PoolInfo": {
          "totalShares": "Share",
          "rewards": "BTreeMap<OrmlCurrencyId, (Balance, Balance)>"
        },
        "CompactBalance": "Compact<Balance>",
        "PoolInfoV0": {
          "totalShares": "Compact<Share>",
          "totalRewards": "CompactBalance",
          "totalWithdrawnRewards": "CompactBalance"
        },
        "Share": "u128",
        "OracleValue": "Price",
        "Amount": "i128",
        "AmountOf": "Amount",
        "AuctionId": "u32",
        "AuctionIdOf": "AuctionId",
        "TokenSymbol": {
          "_enum": {
            "ACA": 0,
            "AUSD": 1,
            "DOT": 2,
            "LDOT": 3,
            "RENBTC": 20,
            "CASH": 21,
            "KAR": 128,
            "KUSD": 129,
            "KSM": 130,
            "LKSM": 131,
            "BNC": 168,
            "VSKSM": 169,
            "PHA": 170,
            "KINT": 171,
            "KBTC": 172
          }
        },
        "DexShare": {
          "_enum": {
            "Token": "TokenSymbol",
            "Erc20": "EvmAddress"
          }
        },
        "CurrencyId": {
          "_enum": {
            "Token": "TokenSymbol",
            "DEXShare": "(DexShare, DexShare)",
            "ERC20": "EvmAddress",
            "StableAssetPoolToken": "u32",
            "LiquidCrowdloan": "u32",
            "ForeignAsset": "u32"
          }
        },
        "CurrencyIdOf": "CurrencyId",
        "AirDropCurrencyId": {
          "_enum": [
            "KAR",
            "ACA"
          ]
        },
        "AuthoritysOriginId": {
          "_enum": [
            "Root",
            "Treasury",
            "HonzonTreasury",
            "HomaTreasury",
            "TreasuryReserve"
          ]
        },
        "AcalaDataProviderId": {
          "_enum": [
            "Aggregated",
            "Acala",
            "Band"
          ]
        },
        "TradingPair": "(CurrencyId,  CurrencyId)",
        "ChainBridgeChainId": "u8",
        "AcalaAssetMetadata": {
          "name": "Vec<u8>",
          "symbol": "Vec<u8>",
          "decimals": "u8",
          "minimalBalance": "Balance"
        },
        "NumberOrHex": "u128",
        "PalletBalanceOf": "Balance",
        "CollateralAuctionItem": {
          "refundRecipient": "AccountId",
          "currencyId": "CurrencyId",
          "initialAmount": "Compact<Balance>",
          "amount": "Compact<Balance>",
          "target": "Compact<Balance>",
          "startTime": "BlockNumber"
        },
        "DebitAuctionItem": {
          "initialAmount": "Compact<Balance>",
          "amount": "Compact<Balance>",
          "fix": "Compact<Balance>",
          "startTime": "BlockNumber"
        },
        "SurplusAuctionItem": {
          "amount": "Compact<Balance>",
          "startTime": "BlockNumber"
        },
        "LiquidationStrategy": {
          "_enum": [
            "Auction",
            "Exchange"
          ]
        },
        "OptionRate": "Option<Rate>",
        "OptionRatio": "Option<Ratio>",
        "ChangeOptionRate": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "OptionRate"
          }
        },
        "ChangeOptionRatio": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "OptionRatio"
          }
        },
        "ChangeBalance": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "Balance"
          }
        },
        "RiskManagementParams": {
          "maximumTotalDebitValue": "Balance",
          "interestRatePerSec": "Option<Rate>",
          "liquidationRatio": "Option<Rate>",
          "liquidationPenalty": "Option<Rate>",
          "requiredCollateralRatio": "Option<Rate>"
        },
        "CandidateInfoOf": "CandidateInfo",
        "TradingPairProvisionParameters": {
          "minContribution": "(Balance, Balance)",
          "targetProvision": "(Balance, Balance)",
          "accumulatedProvision": "(Balance, Balance)",
          "notBefore": "BlockNumber"
        },
        "BalanceWrapper": {
          "amount": "Balance"
        },
        "BalanceRequest": {
          "amount": "Balance"
        },
        "TradingPairStatus": {
          "_enum": {
            "Disabled": "Null",
            "Provisioning": "TradingPairProvisionParameters",
            "Enabled": "Null"
          }
        },
        "Erc20Info": {
          "address": "EvmAddress",
          "name": "Vec<u8>",
          "symbol": "Vec<u8>",
          "decimals": "u8"
        },
        "EstimateResourcesResponse": {
          "gas": "u256",
          "storage": "i32",
          "weightFee": "u256"
        },
        "EvmAccountInfo": {
          "nonce": "Index",
          "contractInfo": "Option<EvmContractInfo>"
        },
        "CodeInfo": {
          "codeSize": "u32",
          "refCount": "u32"
        },
        "EvmContractInfo": {
          "codeHash": "H256",
          "maintainer": "H160",
          "deployed": "bool"
        },
        "EvmAddress": "H160",
        "CallRequest": {
          "from": "Option<H160>",
          "to": "Option<H160>",
          "gasLimit": "Option<u32>",
          "storageLimit": "Option<u32>",
          "value": "Option<U128>",
          "data": "Option<Bytes>"
        },
        "CallInfo": {
          "exit_reason": "EvmCoreErrorExitReason",
          "value": "Vec<u8>",
          "used_gas": "U256",
          "used_storage": "i32",
          "logs": "Vec<EthereumLog>"
        },
        "CreateInfo": {
          "exit_reason": "EvmCoreErrorExitReason",
          "value": "H160",
          "used_gas": "U256",
          "used_storage": "i32",
          "logs": "Vec<EthereumLog>"
        },
        "EthereumLog": {
          "address": "H160",
          "topics": "Vec<H256>",
          "data": "Bytes"
        },
        "EvmCoreErrorExitReason": {
          "_enum": {
            "Succeed": "EvmCoreErrorExitSucceed",
            "Error": "EvmCoreErrorExitError",
            "Revert": "EvmCoreErrorExitRevert",
            "Fatal": "EvmCoreErrorExitFatal"
          }
        },
        "EvmCoreErrorExitSucceed": {
          "_enum": [
            "Stopped",
            "Returned",
            "Suicided"
          ]
        },
        "EvmCoreErrorExitError": {
          "_enum": {
            "StackUnderflow": "Null",
            "StackOverflow": "Null",
            "InvalidJump": "Null",
            "InvalidRange": "Null",
            "DesignatedInvalid": "Null",
            "CallTooDeep": "Null",
            "CreateCollision": "Null",
            "CreateContractLimit": "Null",
            "OutOfOffset": "Null",
            "OutOfGas": "Null",
            "OutOfFund": "Null",
            "PCUnderflow": "Null",
            "CreateEmpty": "Null",
            "Other": "Text",
            "InvalidCode": "Null"
          }
        },
        "EvmCoreErrorExitRevert": {
          "_enum": [
            "Reverted"
          ]
        },
        "EvmCoreErrorExitFatal": {
          "_enum": {
            "NotSupported": "Null",
            "UnhandledInterrupt": "Null",
            "CallErrorAsFatal": "EvmCoreErrorExitError",
            "Other": "Text"
          }
        },
        "AcalaStakingLedge": {
          "bonded": "Compact<Balance>",
          "unlocking": "Vec<UnlockChunk>"
        },
        "AcalaUnlockChunk": {
          "value": "Compact<Balance>",
          "era": "Compact<EraIndex>"
        },
        "RelaychainAccountId": "AccountId",
        "SlashInfo": {
          "validator": "RelaychainAccountId",
          "relaychainTokenAmount": "Balance"
        },
        "ValidatorBacking": {
          "totalInsurance": "Balance",
          "isFrozen": "bool"
        },
        "Guarantee": {
          "total": "Balance",
          "bonded": "Balance",
          "unbonding": "Option<(Balance, BlockNumber)>"
        },
        "PoolId": {
          "_enum": {
            "Loans": "CurrencyId",
            "Dex": "CurrencyId"
          }
        },
        "PoolIdV0": {
          "_enum": {
            "LoansIncentive": "CurrencyId",
            "DexIncentive": "CurrencyId",
            "HomaIncentive": "Null",
            "DexSaving": "CurrencyId",
            "HomaValidatorAllowance": "AccountId"
          }
        },
        "Position": {
          "collateral": "Balance",
          "debit": "Balance"
        },
        "CID": "Vec<u8>",
        "Attributes": "BTreeMap<Vec<u8>, Vec<u8>>",
        "TokenInfoOf": {
          "metadata": "CID",
          "owner": "AccountId",
          "data": "TokenData"
        },
        "Properties": {
          "_set": {
            "_bitLength": 8,
            "Transferable": 1,
            "Burnable": 2,
            "Mintable": 4,
            "ClassPropertiesMutable": 8
          }
        },
        "ClassData": {
          "deposit": "Balance",
          "properties": "Properties",
          "attributes": "Attributes"
        },
        "TokenData": {
          "deposit": "Balance",
          "attributes": "Attributes"
        },
        "TokenId": "u64",
        "TokenIdOf": "TokenId",
        "NFTClassId": "u32",
        "ClassIdOf": "ClassId",
        "NFTBalance": "u128",
        "NFTBalanceOf": "NFTBalance",
        "ClassInfoOf": {
          "metadata": "CID",
          "totalIssuance": "TokenId",
          "owner": "AccountId",
          "data": "ClassData"
        },
        "NomineeId": "AccountId",
        "HomaUnlockChunk": {
          "value": "Balance",
          "era": "EraIndex"
        },
        "BondingLedger": {
          "total": "Balance",
          "active": "Balance",
          "unlocking": "Vec<HomaUnlockChunk>"
        },
        "OracleKey": "CurrencyId",
        "AsOriginId": "AuthoritysOriginId",
        "ProxyType": {
          "_enum": [
            "Any",
            "CancelProxy",
            "Governance",
            "Auction",
            "Swap",
            "Loan"
          ]
        },
        "AtLeast64BitUnsigned": "u128",
        "StableAssetPoolId": "u32",
        "RelayChainBlockNumberOf": "RelayChainBlockNumber",
        "SubAccountStatus": {
          "bonded": "Balance",
          "available": "Balance",
          "unbonding": "Vec<(EraIndex,Balance)>",
          "mockRewardRate": "Rate"
        },
        "Params": {
          "targetMaxFreeUnbondedRatio": "Ratio",
          "targetMinFreeUnbondedRatio": "Ratio",
          "targetUnbondingToFreeRatio": "Ratio",
          "unbondingToFreeAdjustment": "Ratio",
          "baseFeeRate": "Rate"
        },
        "StakingPoolPhase": {
          "_enum": [
            "Started",
            "RelaychainUpdated",
            "LedgerUpdated",
            "Finished"
          ]
        },
        "Ledger": {
          "bonded": "Balance",
          "unbondingToFree": "Balance",
          "freePool": "Balance",
          "toUnbondNextEra": "(Balance, Balance)"
        },
        "ChangeRate": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "Rate"
          }
        },
        "ChangeRatio": {
          "_enum": {
            "NoChange": "Null",
            "NewValue": "Ratio"
          }
        },
        "BalanceInfo": {
          "amount": "Balance"
        },
        "PolkadotAccountId": "AccountId",
        "PolkadotAccountIdOf": "PolkadotAccountId",
        "ExchangeRate": "FixedU128",
        "Rate": "FixedU128",
        "Ratio": "FixedU128",
        "PublicKey": "[u8; 20]",
        "DestAddress": "Vec<u8>",
        "PoolTokenIndex": "u32",
        "AssetId": "CurrencyId",
        "Keys": "SessionKeys1",
        "Address": "GenericMultiAddress",
        "LookupSource": "GenericMultiAddress"
      }
    }
  ],
  "alias": {
    "stakingPool": {
      "Phase": "StakingPoolPhase"
    },
    "nomineesElection": {
      "UnlockChunk": "HomaUnlockChunk"
    },
    "evm": {
      "AccountInfo": "EvmAccountInfo",
      "ContractInfo": "EvmContractInfo"
    },
    "rewards": {
      "OrmlCurrencyId": "CurrencyId"
    },
    "oracle": {
      "DataProviderId": "AcalaDataProviderId"
    },
    "chainBridge": {
      "ChainId": "ChainBridgeChainId"
    },
    "tokens": {
      "AccountData": "OrmlAccountData",
      "BalanceLock": "OrmlBalanceLock"
    }
  }
}

const acalaOptions = {
  "typesBundle": {
    "spec": {
      acala,
    }
  }
}

module.exports = {
  acalaOptions,
}
