const soraOptions = {
  "typesBundle": {
    "spec": {
      "sora-substrate": {
        "alias": {
          "ethBridge": { "StorageVersion": "EthBridgeStorageVersion" },
          "tokens": { "AccountData": "OrmlAccountData", "BalanceLock": "OrmlBalanceLock" }
        }, "rpc": {
          "oracle": {
            "getValue": {
              "description": "Retrieves the oracle value for a given key.",
              "params": [{ "name": "providerId", "type": "RpcDataProviderId" }, {
                "name": "key",
                "type": "OracleKey"
              }, { "name": "at", "type": "BlockHash", "isHistoric": true, "isOptional": true }],
              "type": "Option<TimestampedValue>",
              "isSubscription": false,
              "jsonrpc": "oracle_getValue",
              "method": "getValue",
              "section": "oracle"
            },
            "getAllValues": {
              "description": "Retrieves all oracle values.",
              "params": [{ "name": "providerId", "type": "RpcDataProviderId" }, {
                "name": "at",
                "type": "BlockHash",
                "isHistoric": true,
                "isOptional": true
              }],
              "type": "Vec<(OracleKey, Option<TimestampedValue>)>",
              "isSubscription": false,
              "jsonrpc": "oracle_getAllValues",
              "method": "getAllValues",
              "section": "oracle"
            }
          },
          "assets": {
            "freeBalance": {
              "description": "Get free balance of particular asset for account.",
              "params": [{ "name": "accountId", "type": "AccountId" }, {
                "name": "assetId",
                "type": "AssetId"
              }, { "name": "at", "type": "BlockHash", "isOptional": true }],
              "type": "Option<BalanceInfo>",
              "isSubscription": false,
              "jsonrpc": "assets_freeBalance",
              "method": "freeBalance",
              "section": "assets"
            },
            "usableBalance": {
              "description": "Get usable (free and non-frozen, except for network fees) balance of particular asset for account.",
              "params": [{ "name": "accountId", "type": "AccountId" }, {
                "name": "assetId",
                "type": "AssetId"
              }, { "name": "at", "type": "BlockHash", "isOptional": true }],
              "type": "Option<BalanceInfo>",
              "isSubscription": false,
              "jsonrpc": "assets_usableBalance",
              "method": "usableBalance",
              "section": "assets"
            },
            "totalBalance": {
              "description": "Get total balance (free + reserved) of particular asset for account.",
              "params": [{ "name": "accountId", "type": "AccountId" }, {
                "name": "assetId",
                "type": "AssetId"
              }, { "name": "at", "type": "BlockHash", "isOptional": true }],
              "type": "Option<BalanceInfo>",
              "isSubscription": false,
              "jsonrpc": "assets_totalBalance",
              "method": "totalBalance",
              "section": "assets"
            },
            "totalSupply": {
              "description": "Get total supply of particular asset on chain.",
              "params": [{ "name": "assetId", "type": "AssetId" }, {
                "name": "at",
                "type": "BlockHash",
                "isOptional": true
              }],
              "type": "Option<BalanceInfo>",
              "isSubscription": false,
              "jsonrpc": "assets_totalSupply",
              "method": "totalSupply",
              "section": "assets"
            },
            "listAssetIds": {
              "description": "List Ids of all assets registered on chain.",
              "params": [{ "name": "at", "type": "BlockHash", "isOptional": true }],
              "type": "Vec<AssetId>",
              "isSubscription": false,
              "jsonrpc": "assets_listAssetIds",
              "method": "listAssetIds",
              "section": "assets"
            },
            "listAssetInfos": {
              "description": "List Infos of all assets registered on chain.",
              "params": [{ "name": "at", "type": "BlockHash", "isOptional": true }],
              "type": "Vec<AssetInfo>",
              "isSubscription": false,
              "jsonrpc": "assets_listAssetInfos",
              "method": "listAssetInfos",
              "section": "assets"
            },
            "getAssetInfo": {
              "description": "Get Info for particular asset on chain.",
              "params": [{ "name": "assetId", "type": "AssetId" }, {
                "name": "at",
                "type": "BlockHash",
                "isOptional": true
              }],
              "type": "Option<AssetInfo>",
              "isSubscription": false,
              "jsonrpc": "assets_getAssetInfo",
              "method": "getAssetInfo",
              "section": "assets"
            }
          },
          "dexApi": {
            "canExchange": {
              "description": "Query capability to exchange particular tokens on DEX.",
              "params": [{ "name": "dexId", "type": "DEXId" }, {
                "name": "liquiditySourceType",
                "type": "LiquiditySourceType"
              }, { "name": "inputAssetId", "type": "AssetId" }, {
                "name": "outputAssetId",
                "type": "AssetId"
              }, { "name": "at", "type": "BlockHash", "isOptional": true }],
              "type": "bool",
              "isSubscription": false,
              "jsonrpc": "dexApi_canExchange",
              "method": "canExchange",
              "section": "dexApi"
            },
            "listSupportedSources": {
              "description": "List liquidity source types enabled on chain.",
              "params": [{ "name": "at", "type": "BlockHash", "isOptional": true }],
              "type": "Vec<LiquiditySourceType>",
              "isSubscription": false,
              "jsonrpc": "dexApi_listSupportedSources",
              "method": "listSupportedSources",
              "section": "dexApi"
            },
            "quote": {
              "description": "Get price for a given input or output token amount.",
              "params": [{ "name": "dexId", "type": "DEXId" }, {
                "name": "liquiditySourceType",
                "type": "LiquiditySourceType"
              }, { "name": "inputAssetId", "type": "AssetId" }, {
                "name": "outputAssetId",
                "type": "AssetId"
              }, { "name": "amount", "type": "String" }, {
                "name": "swapVariant",
                "type": "SwapVariant"
              }, { "name": "at", "type": "BlockHash", "isOptional": true }],
              "type": "Option<SwapOutcomeInfo>",
              "isSubscription": false,
              "jsonrpc": "dexApi_quote",
              "method": "quote",
              "section": "dexApi"
            }
          },
          "dexManager": {
            "listDEXIds": {
              "description": "Enumerate available ids of DEXes",
              "params": [{ "name": "at", "type": "BlockHash", "isOptional": true }],
              "type": "Vec<DEXId>",
              "isSubscription": false,
              "jsonrpc": "dexManager_listDEXIds",
              "method": "listDEXIds",
              "section": "dexManager"
            },
            "testBalance": {
              "description": "Test type of Balance",
              "params": [{ "name": "at", "type": "BlockHash", "isOptional": true }],
              "type": "Fixed",
              "isSubscription": false,
              "jsonrpc": "dexManager_testBalance",
              "method": "testBalance",
              "section": "dexManager"
            }
          },
          "ethBridge": {
            "getRequests": {
              "description": "Get registered requests and their statuses.",
              "params": [{ "name": "requestHashes", "type": "Vec<H256>" }, {
                "name": "networkId",
                "type": "Option<BridgeNetworkId>"
              }, { "name": "redirectFinishedLoadRequests", "type": "Option<bool>" }, {
                "name": "at",
                "type": "BlockHash",
                "isOptional": true
              }],
              "type": "Result<Vec<(OffchainRequest, RequestStatus)>, DispatchError>",
              "isSubscription": false,
              "jsonrpc": "ethBridge_getRequests",
              "method": "getRequests",
              "section": "ethBridge"
            },
            "getApprovedRequests": {
              "description": "Get approved encoded requests and their approvals.",
              "params": [{ "name": "requestHashes", "type": "Vec<H256>" }, {
                "name": "networkId",
                "type": "Option<BridgeNetworkId>"
              }, { "name": "at", "type": "BlockHash", "isOptional": true }],
              "type": "Result<Vec<(OutgoingRequestEncoded, Vec<SignatureParams>)>, DispatchError>",
              "isSubscription": false,
              "jsonrpc": "ethBridge_getApprovedRequests",
              "method": "getApprovedRequests",
              "section": "ethBridge"
            },
            "getApprovals": {
              "description": "Get approvals of the given requests.",
              "params": [{ "name": "requestHashes", "type": "Vec<H256>" }, {
                "name": "networkId",
                "type": "Option<BridgeNetworkId>"
              }, { "name": "at", "type": "BlockHash", "isOptional": true }],
              "type": "Result<Vec<Vec<SignatureParams>>, DispatchError>",
              "isSubscription": false,
              "jsonrpc": "ethBridge_getApprovals",
              "method": "getApprovals",
              "section": "ethBridge"
            },
            "getAccountRequests": {
              "description": "Get account requests hashes.",
              "params": [{ "name": "accountId", "type": "AccountId" }, {
                "name": "statusFilter",
                "type": "Option<RequestStatus>"
              }, { "name": "at", "type": "BlockHash", "isOptional": true }],
              "type": "Result<Vec<(BridgeNetworkId, H256)>, DispatchError>",
              "isSubscription": false,
              "jsonrpc": "ethBridge_getAccountRequests",
              "method": "getAccountRequests",
              "section": "ethBridge"
            },
            "getRegisteredAssets": {
              "description": "Get registered assets and tokens.",
              "params": [{ "name": "networkId", "type": "Option<BridgeNetworkId>" }, {
                "name": "at",
                "type": "BlockHash",
                "isOptional": true
              }],
              "type": "Result<Vec<(AssetKind, (AssetId, BalancePrecision), Option<(H160, BalancePrecision)>)>, DispatchError>",
              "isSubscription": false,
              "jsonrpc": "ethBridge_getRegisteredAssets",
              "method": "getRegisteredAssets",
              "section": "ethBridge"
            }
          },
          "irohaMigration": {
            "needsMigration": {
              "description": "Check if the account needs migration",
              "params": [{ "name": "iroha_address", "type": "String" }, {
                "name": "at",
                "type": "BlockHash",
                "isOptional": true
              }],
              "type": "bool",
              "isSubscription": false,
              "jsonrpc": "irohaMigration_needsMigration",
              "method": "needsMigration",
              "section": "irohaMigration"
            }
          },
          "liquidityProxy": {
            "quote": {
              "description": "Get price with indicated Asset amount and direction, filtered by selected_types",
              "params": [{ "name": "dexId", "type": "DEXId" }, {
                "name": "inputAssetId",
                "type": "AssetId"
              }, { "name": "outputAssetId", "type": "AssetId" }, {
                "name": "amount",
                "type": "String"
              }, { "name": "swapVariant", "type": "SwapVariant" }, {
                "name": "selectedSourceTypes",
                "type": "Vec<LiquiditySourceType>"
              }, { "name": "filterMode", "type": "FilterMode" }, {
                "name": "at",
                "type": "BlockHash",
                "isOptional": true
              }],
              "type": "Option<LPSwapOutcomeInfo>",
              "isSubscription": false,
              "jsonrpc": "liquidityProxy_quote",
              "method": "quote",
              "section": "liquidityProxy"
            },
            "isPathAvailable": {
              "description": "Check if given two arbitrary tokens can be exchanged via any liquidity sources",
              "params": [{ "name": "dexId", "type": "DEXId" }, {
                "name": "inputAssetId",
                "type": "AssetId"
              }, { "name": "outputAssetId", "type": "AssetId" }, {
                "name": "at",
                "type": "BlockHash",
                "isOptional": true
              }],
              "type": "bool",
              "isSubscription": false,
              "jsonrpc": "liquidityProxy_isPathAvailable",
              "method": "isPathAvailable",
              "section": "liquidityProxy"
            },
            "listEnabledSourcesForPath": {
              "description": "Given two arbitrary tokens, list liquidity sources that can be used along the path.",
              "params": [{ "name": "dexId", "type": "DEXId" }, {
                "name": "inputAssetId",
                "type": "AssetId"
              }, { "name": "outputAssetId", "type": "AssetId" }, {
                "name": "at",
                "type": "BlockHash",
                "isOptional": true
              }],
              "type": "Vec<LiquiditySourceType>",
              "isSubscription": false,
              "jsonrpc": "liquidityProxy_listEnabledSourcesForPath",
              "method": "listEnabledSourcesForPath",
              "section": "liquidityProxy"
            }
          },
          "pswapDistribution": {
            "claimableAmount": {
              "description": "Get amount of PSWAP claimable by user (liquidity provision reward).",
              "params": [{ "name": "accountId", "type": "AccountId" }, {
                "name": "at",
                "type": "BlockHash",
                "isOptional": true
              }],
              "type": "BalanceInfo",
              "isSubscription": false,
              "jsonrpc": "pswapDistribution_claimableAmount",
              "method": "claimableAmount",
              "section": "pswapDistribution"
            }
          },
          "rewards": {
            "claimables": {
              "description": "Get claimable rewards",
              "params": [{ "name": "eth_address", "type": "EthAddress" }, {
                "name": "at",
                "type": "BlockHash",
                "isOptional": true
              }],
              "type": "Vec<BalanceInfo>",
              "isSubscription": false,
              "jsonrpc": "rewards_claimables",
              "method": "claimables",
              "section": "rewards"
            }
          },
          "template": {
            "testMultiply2": {
              "description": "Test type of Balance",
              "params": [{ "name": "amount", "type": "String" }, {
                "name": "at",
                "type": "BlockHash",
                "isOptional": true
              }],
              "type": "Option<CustomInfo>",
              "isSubscription": false,
              "jsonrpc": "template_testMultiply2",
              "method": "testMultiply2",
              "section": "template"
            }
          },
          "tradingPair": {
            "listEnabledPairs": {
              "description": "List enabled trading pairs for DEX.",
              "params": [{ "name": "dexId", "type": "DEXId" }, {
                "name": "at",
                "type": "BlockHash",
                "isOptional": true
              }],
              "type": "Vec<TradingPair>",
              "isSubscription": false,
              "jsonrpc": "tradingPair_listEnabledPairs",
              "method": "listEnabledPairs",
              "section": "tradingPair"
            },
            "isPairEnabled": {
              "description": "Query if particular trading pair is enabled for DEX.",
              "params": [{ "name": "dexId", "type": "DEXId" }, {
                "name": "inputAssetId",
                "type": "AssetId"
              }, { "name": "outputAssetId", "type": "AssetId" }, {
                "name": "at",
                "type": "BlockHash",
                "isOptional": true
              }],
              "type": "bool",
              "isSubscription": false,
              "jsonrpc": "tradingPair_isPairEnabled",
              "method": "isPairEnabled",
              "section": "tradingPair"
            },
            "listEnabledSourcesForPair": {
              "description": "List enabled liquidity sources for trading pair.",
              "params": [{ "name": "dexId", "type": "DEXId" }, {
                "name": "baseAssetId",
                "type": "AssetId"
              }, { "name": "targetAssetId", "type": "AssetId" }, {
                "name": "at",
                "type": "BlockHash",
                "isOptional": true
              }],
              "type": "Vec<LiquiditySourceType>",
              "isSubscription": false,
              "jsonrpc": "tradingPair_listEnabledSourcesForPair",
              "method": "listEnabledSourcesForPair",
              "section": "tradingPair"
            },
            "isSourceEnabledForPair": {
              "description": "Query if particular liquidity source is enabled for pair.",
              "params": [{ "name": "dexId", "type": "DEXId" }, {
                "name": "baseAssetId",
                "type": "AssetId"
              }, { "name": "targetAssetId", "type": "AssetId" }, {
                "name": "liquiditySourceType",
                "type": "LiquiditySourceType"
              }, { "name": "at", "type": "BlockHash", "isOptional": true }],
              "type": "bool",
              "isSubscription": false,
              "jsonrpc": "tradingPair_isSourceEnabledForPair",
              "method": "isSourceEnabledForPair",
              "section": "tradingPair"
            }
          },
          "vestedRewards": {
            "crowdloanClaimable": {
              "description": "Get available crowdloan reward for a user.",
              "params": [{ "name": "accountId", "type": "AccountId" }, {
                "name": "assetId",
                "type": "AssetId"
              }, { "name": "at", "type": "BlockHash", "isOptional": true }],
              "type": "Option<BalanceInfo>",
              "isSubscription": false,
              "jsonrpc": "vestedRewards_crowdloanClaimable",
              "method": "crowdloanClaimable",
              "section": "vestedRewards"
            },
            "crowdloanLease": {
              "description": "Get crowdloan rewards lease period info.",
              "params": [{ "name": "at", "type": "BlockHash", "isOptional": true }],
              "type": "CrowdloanLease",
              "isSubscription": false,
              "jsonrpc": "vestedRewards_crowdloanLease",
              "method": "crowdloanLease",
              "section": "vestedRewards"
            }
          }
        }, "types": [{
          "minmax": [2, null], "types": {
            "CallOf": "Call",
            "DispatchTime": { "_enum": { "At": "BlockNumber", "After": "BlockNumber" } },
            "ScheduleTaskIndex": "u32",
            "DelayedOrigin": { "delay": "BlockNumber", "origin": "PalletsOrigin" },
            "AuthorityOrigin": "DelayedOrigin",
            "StorageValue": "Vec<u8>",
            "GraduallyUpdate": { "key": "StorageKey", "targetValue": "StorageValue", "perBlock": "StorageValue" },
            "StorageKeyBytes": "Vec<u8>",
            "StorageValueBytes": "Vec<u8>",
            "RpcDataProviderId": "Text",
            "DataProviderId": "u8",
            "TimestampedValue": { "value": "OracleValue", "timestamp": "Moment" },
            "TimestampedValueOf": "TimestampedValue",
            "OrderedSet": "Vec<AccountId>",
            "OrmlAccountData": { "free": "Balance", "frozen": "Balance", "reserved": "Balance" },
            "OrmlBalanceLock": { "amount": "Balance", "id": "LockIdentifier" },
            "AuctionInfo": {
              "bid": "Option<(AccountId, Balance)>",
              "start": "BlockNumber",
              "end": "Option<BlockNumber>"
            },
            "DelayedDispatchTime": { "_enum": { "At": "BlockNumber", "After": "BlockNumber" } },
            "DispatchId": "u32",
            "Price": "FixedU128",
            "OrmlVestingSchedule": {
              "start": "BlockNumber",
              "period": "BlockNumber",
              "periodCount": "u32",
              "perPeriod": "Compact<Balance>"
            },
            "VestingScheduleOf": "OrmlVestingSchedule",
            "OrmlCurrencyId": "u8",
            "PoolInfo": { "totalShares": "Share", "rewards": "BTreeMap<OrmlCurrencyId, (Balance, Balance)>" },
            "CompactBalance": "Compact<Balance>",
            "PoolInfoV0": {
              "totalShares": "Compact<Share>",
              "totalRewards": "CompactBalance",
              "totalWithdrawnRewards": "CompactBalance"
            },
            "Share": "u128",
            "OracleValue": "FixedU128",
            "BalanceInfo": { "balance": "Balance" },
            "AssetInfo": {
              "asset_id": "AssetId",
              "symbol": "AssetSymbolStr",
              "name": "AssetNameStr",
              "precision": "u8",
              "is_mintable": "bool"
            },
            "AssetSymbolStr": "String",
            "AssetNameStr": "String",
            "AssetRecord": "Null",
            "VotingInfo": { "voting_option": "u32", "number_of_votes": "Balance", "ceres_withdrawn": "bool" },
            "PollInfo": {
              "number_of_options": "u32",
              "poll_start_block": "BlockNumber",
              "poll_end_block": "BlockNumber"
            },
            "LockInfo": {
              "pool_tokens": "Balance",
              "unlocking_block": "BlockNumber",
              "asset_a": "AssetId",
              "asset_b": "AssetId"
            },
            "StakingInfo": { "deposited": "Balance", "rewards": "Balance" },
            "TokenLockInfo": { "tokens": "Balance", "unlocking_block": "BlockNumber", "asset_id": "AssetId" },
            "ContributorsVesting": {
              "first_release_percent": "Balance",
              "vesting_period": "BlockNumber",
              "vesting_percent": "Balance"
            },
            "TeamVesting": {
              "team_vesting_total_tokens": "Balance",
              "team_vesting_first_release_percent": "Balance",
              "team_vesting_period": "BlockNumber",
              "team_vesting_percent": "Balance"
            },
            "ContributionInfo": {
              "funds_contributed": "Balance",
              "tokens_bought": "Balance",
              "tokens_claimed": "Balance",
              "claiming_finished": "bool",
              "number_of_claims": "u32"
            },
            "ILOInfo": {
              "ilo_organizer": "AccountId",
              "tokens_for_ilo": "Balance",
              "tokens_for_liquidity": "Balance",
              "ilo_price": "Balance",
              "soft_cap": "Balance",
              "hard_cap": "Balance",
              "min_contribution": "Balance",
              "max_contribution": "Balance",
              "refund_type": "bool",
              "liquidity_percent": "Balance",
              "listing_price": "Balance",
              "lockup_days": "u32",
              "start_block": "BlockNumber",
              "end_block": "BlockNumber",
              "contributors_vesting": "ContributorsVesting",
              "team_vesting": "TeamVesting",
              "sold_tokens": "Balance",
              "funds_raised": "Balance",
              "succeeded": "bool",
              "failed": "bool",
              "lp_tokens": "Balance",
              "claimed_lp_tokens": "bool",
              "finish_block": "BlockNumber"
            },
            "PoolData": {
              "multiplier": "u32",
              "deposit_fee": "Balance",
              "is_core": "bool",
              "is_farm": "bool",
              "total_tokens_in_pool": "Balance",
              "rewards": "Balance",
              "rewards_to_be_distributed": "Balance",
              "is_removed": "bool"
            },
            "TokenInfo": {
              "farms_total_multiplier": "u32",
              "staking_total_multiplier": "u32",
              "token_per_block": "Balance",
              "farms_allocation": "Balance",
              "staking_allocation": "Balance",
              "team_allocation": "Balance",
              "team_account": "AccountId"
            },
            "UserInfo": {
              "pool_asset": "AssetId",
              "reward_asset": "AssetId",
              "is_farm": "bool",
              "pooled_tokens": "Balance",
              "rewards": "Balance"
            },
            "MultiChainHeight": { "_enum": { "Thischain": "BlockNumber", "Sidechain": "u64" } },
            "BridgeTimepoint": { "height": "MultiChainHeight", "index": "u32" },
            "EthPeersSync": { "is_bridge_ready": "bool", "is_xor_ready": "bool", "is_val_ready": "bool" },
            "BridgeStatus": { "_enum": ["Initialized", "Migrating"] },
            "BridgeNetworkId": "u32",
            "AssetKind": { "_enum": ["Thischain", "Sidechain", "SidechainOwned"] },
            "RequestStatus": { "_enum": ["Pending", "Frozen", "ApprovalsReady", "Failed", "Done"] },
            "SignatureParams": { "r": "[u8; 32]", "s": "[u8; 32]", "v": "u8" },
            "IncomingTransactionRequestKind": { "_enum": ["Transfer", "AddAsset", "AddPeer", "RemovePeer", "PrepareForMigration", "Migrate", "AddPeerCompat", "RemovePeerCompat", "TransferXOR"] },
            "IncomingMetaRequestKind": { "_enum": ["CancelOutgoingRequest", "MarkAsDone"] },
            "IncomingRequestKind": {
              "_enum": {
                "Transaction": "IncomingTransactionRequestKind",
                "Meta": "IncomingMetaRequestKind"
              }
            },
            "ChangePeersContract": { "_enum": ["XOR", "VAL"] },
            "CurrencyIdEncoded": { "_enum": { "AssetId": "H256", "TokenAddress": "H160" } },
            "FixedBytes": "Vec<u8>",
            "OutgoingTransfer": {
              "from": "AccountId",
              "to": "EthAddress",
              "asset_id": "AssetId",
              "amount": "Balance",
              "nonce": "Index",
              "network_id": "BridgeNetworkId",
              "timepoint": "BridgeTimepoint"
            },
            "OutgoingTransferEncoded": {
              "currency_id": "CurrencyIdEncoded",
              "amount": "U256",
              "to": "EthAddress",
              "from": "EthAddress",
              "tx_hash": "H256",
              "network_id": "H256",
              "raw": "Vec<u8>"
            },
            "OutgoingAddAsset": {
              "author": "AccountId",
              "asset_id": "AssetId",
              "supply": "Balance",
              "nonce": "Index",
              "network_id": "BridgeNetworkId",
              "timepoint": "BridgeTimepoint"
            },
            "OutgoingAddAssetEncoded": {
              "name": "String",
              "symbol": "String",
              "decimal": "u8",
              "supply": "U256",
              "sidechain_asset_id": "FixedBytes",
              "hash": "H256",
              "network_id": "H256",
              "raw": "Vec<u8>"
            },
            "OutgoingAddToken": {
              "author": "AccountId",
              "token_address": "EthAddress",
              "ticker": "String",
              "name": "String",
              "decimals": "u8",
              "nonce": "Index",
              "network_id": "BridgeNetworkId",
              "timepoint": "BridgeTimepoint"
            },
            "OutgoingAddTokenEncoded": {
              "token_address": "EthAddress",
              "ticker": "String",
              "name": "String",
              "decimals": "u8",
              "hash": "H256",
              "network_id": "H256",
              "raw": "Vec<u8>"
            },
            "OutgoingAddPeer": {
              "author": "AccountId",
              "peer_address": "EthAddress",
              "peer_account_id": "AccountId",
              "nonce": "Index",
              "network_id": "BridgeNetworkId",
              "timepoint": "BridgeTimepoint"
            },
            "OutgoingAddPeerCompat": {
              "author": "AccountId",
              "peer_address": "EthAddress",
              "peer_account_id": "AccountId",
              "nonce": "Index",
              "network_id": "BridgeNetworkId",
              "timepoint": "BridgeTimepoint"
            },
            "OutgoingAddPeerEncoded": {
              "peer_address": "EthAddress",
              "tx_hash": "H256",
              "network_id": "H256",
              "raw": "Vec<u8>"
            },
            "OutgoingRemovePeer": {
              "author": "AccountId",
              "peer_account_id": "AccountId",
              "peer_address": "EthAddress",
              "nonce": "Index",
              "network_id": "BridgeNetworkId",
              "timepoint": "BridgeTimepoint"
            },
            "OutgoingRemovePeerCompat": {
              "author": "AccountId",
              "peer_account_id": "AccountId",
              "peer_address": "EthAddress",
              "nonce": "Index",
              "network_id": "BridgeNetworkId",
              "timepoint": "BridgeTimepoint"
            },
            "OutgoingRemovePeerEncoded": {
              "peer_address": "EthAddress",
              "tx_hash": "H256",
              "network_id": "H256",
              "raw": "Vec<u8>"
            },
            "OutgoingPrepareForMigration": {
              "author": "AccountId",
              "nonce": "Index",
              "network_id": "BridgeNetworkId",
              "timepoint": "BridgeTimepoint"
            },
            "OutgoingPrepareForMigrationEncoded": {
              "this_contract_address": "EthAddress",
              "tx_hash": "H256",
              "network_id": "H256",
              "raw": "Vec<u8>"
            },
            "OutgoingMigrate": {
              "author": "AccountId",
              "new_contract_address": "EthAddress",
              "erc20_native_tokens": "Vec<EthAddress>",
              "nonce": "Index",
              "network_id": "BridgeNetworkId",
              "timepoint": "BridgeTimepoint"
            },
            "OutgoingMigrateEncoded": {
              "this_contract_address": "EthAddress",
              "tx_hash": "H256",
              "new_contract_address": "EthAddress",
              "erc20_native_tokens": "Vec<EthAddress>",
              "network_id": "H256",
              "raw": "Vec<u8>"
            },
            "OutgoingRequest": {
              "_enum": {
                "Transfer": "OutgoingTransfer",
                "AddAsset": "OutgoingAddAsset",
                "AddToken": "OutgoingAddToken",
                "AddPeer": "OutgoingAddPeer",
                "RemovePeer": "OutgoingRemovePeer",
                "PrepareForMigration": "OutgoingPrepareForMigration",
                "Migrate": "OutgoingMigrate"
              }
            },
            "OutgoingRequestEncoded": {
              "_enum": {
                "Transfer": "OutgoingTransferEncoded",
                "AddAsset": "OutgoingAddAssetEncoded",
                "AddToken": "OutgoingAddTokenEncoded",
                "AddPeer": "OutgoingAddPeerEncoded",
                "RemovePeer": "OutgoingRemovePeerEncoded",
                "PrepareForMigration": "OutgoingPrepareForMigrationEncoded",
                "Migrate": "OutgoingMigrateEncoded"
              }
            },
            "IncomingTransfer": {
              "from": "EthAddress",
              "to": "AccountId",
              "asset_id": "AssetId",
              "asset_kind": "AssetKind",
              "amount": "Balance",
              "author": "AccountId",
              "tx_hash": "H256",
              "at_height": "u64",
              "timepoint": "BridgeTimepoint",
              "network_id": "BridgeNetworkId"
            },
            "IncomingAddToken": {
              "token_address": "EthAddress",
              "asset_id": "AssetId",
              "precision": "BalancePrecision",
              "symbol": "AssetSymbol",
              "name": "AssetName",
              "author": "AccountId",
              "tx_hash": "H256",
              "at_height": "u64",
              "timepoint": "BridgeTimepoint",
              "network_id": "BridgeNetworkId"
            },
            "IncomingChangePeers": {
              "peer_account_id": "AccountId",
              "peer_address": "EthAddress",
              "added": "bool",
              "author": "AccountId",
              "tx_hash": "H256",
              "at_height": "u64",
              "timepoint": "BridgeTimepoint",
              "network_id": "BridgeNetworkId"
            },
            "IncomingChangePeersCompat": {
              "peer_account_id": "AccountId",
              "peer_address": "EthAddress",
              "added": "bool",
              "contract": "ChangePeersContract",
              "author": "AccountId",
              "tx_hash": "H256",
              "at_height": "u64",
              "timepoint": "BridgeTimepoint",
              "network_id": "BridgeNetworkId"
            },
            "IncomingCancelOutgoingRequest": {
              "outgoing_request": "OutgoingRequest",
              "outgoing_request_hash": "H256",
              "initial_request_hash": "H256",
              "tx_input": "Vec<u8>",
              "author": "AccountId",
              "tx_hash": "H256",
              "at_height": "u64",
              "timepoint": "BridgeTimepoint",
              "network_id": "BridgeNetworkId"
            },
            "IncomingMarkAsDoneRequest": {
              "outgoing_request_hash": "H256",
              "initial_request_hash": "H256",
              "author": "AccountId",
              "at_height": "u64",
              "timepoint": "BridgeTimepoint",
              "network_id": "BridgeNetworkId"
            },
            "IncomingPrepareForMigration": {
              "author": "AccountId",
              "tx_hash": "H256",
              "at_height": "u64",
              "timepoint": "BridgeTimepoint",
              "network_id": "BridgeNetworkId"
            },
            "IncomingMigrate": {
              "new_contract_address": "EthAddress",
              "author": "AccountId",
              "tx_hash": "H256",
              "at_height": "u64",
              "timepoint": "BridgeTimepoint",
              "network_id": "BridgeNetworkId"
            },
            "IncomingRequest": {
              "_enum": {
                "Transfer": "IncomingTransfer",
                "AddToken": "IncomingAddToken",
                "ChangePeers": "IncomingChangePeers",
                "CancelOutgoingRequest": "IncomingCancelOutgoingRequest",
                "MarkAsDone": "IncomingMarkAsDoneRequest",
                "PrepareForMigration": "IncomingPrepareForMigration",
                "Migrate": "IncomingMigrate"
              }
            },
            "LoadIncomingTransactionRequest": {
              "author": "AccountId",
              "hash": "H256",
              "timepoint": "BridgeTimepoint",
              "kind": "IncomingTransactionRequestKind",
              "network_id": "BridgeNetworkId"
            },
            "LoadIncomingMetaRequest": {
              "author": "AccountId",
              "hash": "H256",
              "timepoint": "BridgeTimepoint",
              "kind": "IncomingMetaRequestKind",
              "network_id": "BridgeNetworkId"
            },
            "LoadIncomingRequest": {
              "_enum": {
                "Transaction": "LoadIncomingTransactionRequest",
                "Meta": "(LoadIncomingMetaRequest, H256)"
              }
            },
            "OffchainRequest": {
              "_enum": {
                "Outgoing": "(OutgoingRequest, H256)",
                "LoadIncoming": "LoadIncomingRequest",
                "Incoming": "(IncomingRequest, H256)"
              }
            },
            "EthBridgeStorageVersion": { "_enum": ["V1", "V2RemovePendingTransfers"] },
            "EthAddress": "H160",
            "PoolFarmer": { "account": "AccountId", "block": "BlockNumber", "weight": "Balance" },
            "PendingMultisigAccount": { "approving_accounts": "Vec<AccountId>", "migrate_at": "Option<BlockNumber>" },
            "LPSwapOutcomeInfo": {
              "amount": "Balance",
              "fee": "Balance",
              "rewards": "Vec<LPRewardsInfo>",
              "amount_without_impact": "Balance"
            },
            "LPRewardsInfo": { "amount": "Balance", "currency": "AssetId", "reason": "RewardReason" },
            "AssetIdOf": "AssetId",
            "Amount": "i128",
            "AmountOf": "Amount",
            "CurrencyId": "AssetId",
            "CurrencyIdOf": "AssetId",
            "BasisPoints": "u16",
            "Fixed": "FixedU128",
            "FarmId": "u64",
            "DEXId": "u32",
            "DEXIdOf": "DEXId",
            "DEXInfo": {
              "base_asset_id": "AssetId",
              "default_fee": "BasisPoints",
              "default_protocol_fee": "BasisPoints"
            },
            "BalancePrecision": "u8",
            "AssetSymbol": "Vec<u8>",
            "AssetName": "Vec<u8>",
            "AssetId32": "[u8; 32]",
            "SwapWithDesiredInput": { "desired_amount_in": "Balance", "min_amount_out": "Balance" },
            "SwapWithDesiredOutput": { "desired_amount_out": "Balance", "max_amount_in": "Balance" },
            "SwapAmount": {
              "_enum": {
                "WithDesiredInput": "SwapWithDesiredInput",
                "WithDesiredOutput": "SwapWithDesiredOutput"
              }
            },
            "QuoteWithDesiredInput": { "desired_amount_in": "Balance" },
            "QuoteWithDesiredOutput": { "desired_amount_out": "Balance" },
            "QuoteAmount": {
              "_enum": {
                "WithDesiredInput": "QuoteWithDesiredInput",
                "WithDesiredOutput": "QuoteWithDesiredOutput"
              }
            },
            "SwapVariant": { "_enum": ["WithDesiredInput", "WithDesiredOutput"] },
            "TechAmount": "Amount",
            "TechBalance": "Balance",
            "SwapOutcome": { "amount": "Balance", "fee": "Balance" },
            "LiquiditySourceType": { "_enum": ["XYKPool", "BondingCurvePool", "MulticollateralBondingCurvePool", "MockPool", "MockPool2", "MockPool3", "MockPool4", "XSTPool"] },
            "FilterMode": { "_enum": ["Disabled", "ForbidSelected", "AllowSelected"] },
            "SwapOutcomeInfo": { "amount": "Balance", "fee": "Balance" },
            "TradingPair": { "base_asset_id": "AssetId", "target_asset_id": "AssetId" },
            "PermissionId": "u32",
            "HolderId": "AccountId",
            "OwnerId": "AccountId",
            "Mode": { "_enum": ["Permit", "Forbid"] },
            "Scope": { "_enum": { "Limited": "H512", "Unlimited": "Null" } },
            "OracleKey": "AssetId",
            "ChargeFeeInfo": { "tip": "Compact<Balance>", "target_asset_id": "AssetId" },
            "SwapAction": "Null",
            "ValidationFunction": "Null",
            "Permission": "Null",
            "DistributionAccounts": "Null",
            "MultisigAccount": { "signatories": "Vec<AccountId>", "threshold": "u8" },
            "Farmer": "Null",
            "Farm": "Null",
            "SmoothPriceState": "Null",
            "MultiCurrencyBalanceOf": "MultiCurrencyBalance",
            "Duration": "Null",
            "PostDispatchInfo": { "actual_weight": "Option<Weight>", "pays_fee": "Pays" },
            "DispatchErrorWithPostInfoTPostDispatchInfo": { "post_info": "PostDispatchInfo", "error": "DispatchError" },
            "DispatchResultWithPostInfo": "Result<PostDispatchInfo, DispatchErrorWithPostInfoTPostDispatchInfo>",
            "Public": "[u8; 33]",
            "RewardReason": { "_enum": ["Unspecified", "BuyOnBondingCurve", "LiquidityProvisionFarming", "MarketMakerVolume"] },
            "StorageVersion": "Null",
            "MarketMakerInfo": { "count": "u32", "volume": "Balance" },
            "CrowdloanReward": {
              "id": "Vec<u8>",
              "address": "Vec<u8>",
              "contribution": "Fixed",
              "xor_reward": "Fixed",
              "val_reward": "Fixed",
              "pswap_reward": "Fixed",
              "xstusd_reward": "Fixed",
              "percent": "Fixed"
            },
            "PredefinedAssetId": { "_enum": ["XOR", "DOT", "KSM", "USDT", "VAL", "PSWAP", "DAI", "ETH", "XSTUSD"] },
            "RewardInfo": {
              "limit": "Balance",
              "total_available": "Balance",
              "rewards": "BTreeMap<RewardReason, Balance>"
            },
            "TechTradingPair": { "base_asset_id": "TechAssetId", "target_asset_id": "TechAssetId" },
            "TechAssetId": { "_enum": { "Wrapped": "PredefinedAssetId", "Escaped": "AssetId" } },
            "TechPurpose": {
              "_enum": {
                "FeeCollector": "Null",
                "FeeCollectorForPair": "TechTradingPair",
                "LiquidityKeeper": "TechTradingPair",
                "Identifier": "Vec<u8>"
              }
            },
            "TechAccountId": {
              "_enum": {
                "Pure": "(DEXId, TechPurpose)",
                "Generic": "(Vec<u8>, Vec<u8>)",
                "Wrapped": "AccountId",
                "WrappedRepr": "AccountId"
              }
            },
            "PriceInfo": {
              "price_failures": "u32",
              "spot_prices": "Vec<Balance>",
              "average_price": "Balance",
              "needs_update": "bool",
              "last_spot_price": "Balance"
            },
            "ContentSource": "Text",
            "Description": "Text",
            "CustomInfo": { "amount": "Balance" },
            "TP": "TradingPair",
            "CrowdloanLease": { "start_block": "String", "total_days": "String", "blocks_per_day": "String" },
            "Address": "AccountId",
            "LookupSource": "AccountId",
            "AssetId": "AssetId32",
            "Keys": "SessionKeys3",
            "RefCount": "u32",
            "Balance": "u128",
            "TAssetBalance": "Balance",
            "MultiCurrencyBalance": "Balance",
            "AccountInfo": "AccountInfoWithDualRefCount"
          }
        }]
      }
    }
  }
}

module.exports = soraOptions;
