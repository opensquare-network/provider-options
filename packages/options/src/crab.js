const crabOptions = {
  "typesBundle": {
    "spec": {
      "Crab": {
        "alias": {},
        "rpc": {},
        "types": [
          {
            "minmax": [
              0,
              41
            ],
            "types": {
              "UsableBalance": {
                "usableBalance": "Balance"
              },
              "Status": {
                "_enum": {
                  "Free": null,
                  "Reserved": null
                }
              },
              "LockIdentifier": "[u8; 8]",
              "MessageId": "(LaneId, MessageNonce)",
              "LaneId": "[u8; 4]",
              "MessageNonce": "u64",
              "CrabRuntimeMessagesDarwiniaMessageCrabToDarwiniaMessagesParameter": {
                "_enum": {
                  "DarwiniaToCrabConversionRate": "FixedU128"
                }
              },
              "FixedU128": "UInt<128, FixedU128>",
              "RelayerId": "AccountId",
              "UnrewardedRelayer": {
                "relayer": "RelayerId",
                "messages": "DeliveredMessages"
              },
              "DeliveredMessages": {
                "begin": "MessageNonce",
                "end": "MessageNonce",
                "dispatchResults": "BitVec"
              },
              "MessagePayload": "Vec<u8>",
              "TechnicalMember": "AccountId",
              "BridgedHeaderHash": "Hash",
              "BridgedBlockHash": "Hash",
              "RawStorageProof": "Vec<Bytes>",
              "BSCHeader": {
                "parentHash": "H256",
                "uncleHash": "H256",
                "coinbase": "EthereumAddress",
                "stateRoot": "H256",
                "transactionsRoot": "H256",
                "receiptsRoot": "H256",
                "logBloom": "Bloom",
                "difficulty": "U256",
                "number": "u64",
                "gasLimit": "U256",
                "gasUsed": "U256",
                "timestamp": "u64",
                "extraData": "Bytes",
                "mixDigest": "H256",
                "nonce": "Bytes"
              },
              "BalanceInfo": {},
              "BalanceLock": {
                "id": "LockIdentifier",
                "lockFor": "LockFor",
                "lockReasons": "LockReasons"
              },
              "LockFor": {
                "_enum": {
                  "Common": "Common",
                  "Staking": "StakingLock"
                }
              },
              "Common": {
                "amount": "Balance"
              },
              "StakingLock": {
                "stakingAmount": "Balance",
                "unbondings": "Vec<Unbonding>"
              },
              "Unbonding": {
                "amount": "Balance",
                "until": "BlockNumber"
              },
              "RingBalance": "Balance",
              "KtonBalance": "Balance",
              "TsInMs": "u64",
              "Power": "u32",
              "DepositId": "U256",
              "TimeDepositItem": {
                "value": "Balance",
                "startTime": "TsInMs",
                "expireTime": "TsInMs"
              },
              "ExposureT": {
                "ownRingBalance": "Balance",
                "ownKtonBalance": "Balance",
                "ownPower": "Power",
                "totalPower": "Power",
                "others": "Vec<IndividualExposure>"
              },
              "Exposure": "ExposureT",
              "IndividualExposure": {
                "who": "AccountId",
                "ringBalance": "Compact<Balance>",
                "ktonBalance": "Compact<Balance>",
                "power": "Power"
              },
              "ElectionResultT": {
                "electedStashes": "Vec<AccountId>",
                "exposures": "Vec<(AccountId, ExposureT)>",
                "compute": "ElectionCompute"
              },
              "RKT": {
                "r": "Balance",
                "k": "Balance"
              },
              "SpanRecord": {
                "slashed": "RKT",
                "paidOut": "RKT"
              },
              "UnappliedSlash": {
                "validator": "AccountId",
                "own": "RKT",
                "others": "Vec<(AccountId, RKT)>",
                "reporters": "Vec<AccountId>",
                "payout": "RKT"
              },
              "MappedRing": "u128",
              "EthereumTransactionIndex": "(H256, u64)",
              "EthereumBlockNumber": "u64",
              "Bloom": "[u8; 256; Bloom]",
              "EthashProof": {
                "dagNodes": "[H512; 2]",
                "proof": "Vec<H128>"
              },
              "LegacyReceipt": {
                "gas_used": "U256",
                "log_bloom": "Bloom",
                "logs": "Vec<LogEntry>",
                "outcome": "TransactionOutcome"
              },
              "LogEntry": {
                "address": "Address",
                "topics": "Vec<H256>",
                "data": "Bytes"
              },
              "TransactionOutcome": {
                "_enum": {
                  "Unknown": "Null",
                  "StateRoot": "H256",
                  "StatusCode": "u8"
                }
              },
              "EthereumNetwork": {
                "_enum": {
                  "Mainnet": null,
                  "Ropsten": null
                }
              },
              "EthereumReceiptProof": {
                "index": "u64",
                "proof": "Bytes",
                "headerHash": "H256"
              },
              "MMRProof": {
                "memberLeafIndex": "u64",
                "lastLeafIndex": "u64",
                "proof": "Vec<H256>"
              },
              "EcdsaSignature": "[u8; 65; EcdsaSignature]",
              "Signature": "[u8;65]",
              "TronAddress": "EthereumAddress",
              "AddressT": "[u8; 20; AddressT]",
              "Address": "[u8; 20; Address]",
              "MerkleMountainRangeRootLog": {
                "prefix": "[u8; 4; Prefix]",
                "ParentMmrRoot": "Hash"
              },
              "ChainProperties": {
                "ss58Format": "Option<u8>",
                "tokenDecimals": "Option<Vec<u32>>",
                "tokenSymbol": "Option<Vec<Text>>"
              },
              "Signer": "EthereumAddress",
              "MMRRoot": "Hash",
              "EcdsaAddress": "EthereumAddress",
              "EcdsaMessage": "H256",
              "RelayAuthoritySigner": "EthereumAddress",
              "RelayAuthorityMessage": "EcdsaMessage",
              "RelayAuthoritySignature": "EcdsaSignature",
              "Term": "BlockNumber",
              "OpCode": "[u8; 4; OpCode]",
              "ElectionCompute": {
                "_enum": [
                  "OnChain",
                  "Signed",
                  "Authority"
                ]
              },
              "ValidatorPrefs": "ValidatorPrefsWithBlocked",
              "PriorRelayer": {
                "id": "AccountId",
                "fee": "Balance",
                "validRange": "BlockNumber"
              },
              "TokenMessageId": "[u8; 16; TokenMessageId]",
              "EraIndex": "u32",
              "RefCount": "u32",
              "Reasons": {
                "_enum": [
                  "Fee",
                  "Misc",
                  "All"
                ]
              },
              "ValidatorPrefsWithBlocked": {
                "commission": "Compact<Perbill>",
                "blocked": "bool"
              },
              "EthereumAddress": "GenericEthereumAccountId",
              "Fee": {
                "amount": "Balance"
              },
              "InProcessOrders": {
                "orders": "Vec<(LaneId, MessageNonce)>"
              },
              "MMRProofResult": {
                "mmrSize": "u64",
                "proof": "Text"
              },
              "NodeIndex": "u64",
              "MmrNodesPruningConfiguration": {
                "step": "NodeIndex",
                "progress": "NodeIndex",
                "lastPosition": "NodeIndex"
              },
              "ProxyType": {
                "_enum": {
                  "Any": null,
                  "NonTransfer": null,
                  "Governance": null,
                  "Staking": null,
                  "IdentityJudgement": null,
                  "EthereumBridge": null
                }
              },
              "Announcement": "ProxyAnnouncement",
              "ProxyAnnouncement": {
                "real": "AccountId",
                "callHash": "Hash",
                "height": "BlockNumber"
              },
              "CrabRuntimePalletsProxyProxyType": {
                "_enum": [
                  "Any",
                  "NonTransfer",
                  "Governance",
                  "Staking",
                  "IdentityJudgement",
                  "EthereumBridge"
                ]
              },
              "DarwiniaRuntimePalletsProxyProxyType": {
                "_enum": [
                  "Any",
                  "NonTransfer",
                  "Governance",
                  "Staking",
                  "IdentityJudgement",
                  "EthereumBridge"
                ]
              },
              "RelayHeaderId": "EthereumBlockNumber",
              "RelayProofs": "EthereumRelayProofs",
              "RelayVotingState": {
                "ayes": "Vec<AccountId>",
                "nays": "Vec<AccountId>"
              },
              "RelayAffirmationId": {
                "relayHeaderId": "RelayHeaderId",
                "round": "u32",
                "index": "u32"
              },
              "EthereumRelayProofs": {
                "ethashProof": "Vec<EthashProof>",
                "mmrProof": "Vec<H256>"
              },
              "PowerOf": {
                "power": "Power"
              },
              "PalletStakingIndividualExposure": {
                "who": "AccountId32",
                "value": "Compact<u128>"
              },
              "RewardPoint": "u32",
              "SpanIndex": "u32",
              "UnappliedSlashOther": "(AccountId, RKT)",
              "AccountData": {
                "free": "Balance",
                "reserved": "Balance",
                "freeKton": "Balance",
                "reservedKton": "Balance"
              },
              "LockReasons": {
                "_enum": {
                  "Fee": null,
                  "Misc": null,
                  "All": null
                }
              },
              "StakingLedgerT": {
                "stash": "AccountId",
                "active": "Compact<Balance>",
                "activeDepositRing": "Compact<Balance>",
                "activeKton": "Compact<Balance>",
                "depositItems": "Vec<TimeDepositItem>",
                "ringStakingLock": "StakingLock",
                "ktonStakingLock": "StakingLock",
                "claimedRewards": "Vec<EraIndex>"
              }
            }
          },
          {
            "minmax": [
              42,
              43
            ],
            "types": {
              "UsableBalance": {
                "usableBalance": "Balance"
              },
              "Status": {
                "_enum": {
                  "Free": null,
                  "Reserved": null
                }
              },
              "LockIdentifier": "[u8; 8]",
              "MessageId": "(LaneId, MessageNonce)",
              "LaneId": "[u8; 4]",
              "MessageNonce": "u64",
              "CrabRuntimeMessagesDarwiniaMessageCrabToDarwiniaMessagesParameter": {
                "_enum": {
                  "DarwiniaToCrabConversionRate": "FixedU128"
                }
              },
              "FixedU128": "UInt<128, FixedU128>",
              "RelayerId": "AccountId",
              "UnrewardedRelayer": {
                "relayer": "RelayerId",
                "messages": "DeliveredMessages"
              },
              "DeliveredMessages": {
                "begin": "MessageNonce",
                "end": "MessageNonce",
                "dispatchResults": "BitVec"
              },
              "MessagePayload": "Vec<u8>",
              "TechnicalMember": "AccountId",
              "BridgedHeaderHash": "Hash",
              "BridgedBlockHash": "Hash",
              "RawStorageProof": "Vec<Bytes>",
              "BSCHeader": {
                "parentHash": "H256",
                "uncleHash": "H256",
                "coinbase": "EthereumAddress",
                "stateRoot": "H256",
                "transactionsRoot": "H256",
                "receiptsRoot": "H256",
                "logBloom": "Bloom",
                "difficulty": "U256",
                "number": "u64",
                "gasLimit": "U256",
                "gasUsed": "U256",
                "timestamp": "u64",
                "extraData": "Bytes",
                "mixDigest": "H256",
                "nonce": "Bytes"
              },
              "BalanceInfo": {},
              "BalanceLock": {
                "id": "LockIdentifier",
                "lockFor": "LockFor",
                "lockReasons": "LockReasons"
              },
              "LockFor": {
                "_enum": {
                  "Common": "Common",
                  "Staking": "StakingLock"
                }
              },
              "Common": {
                "amount": "Balance"
              },
              "StakingLock": {
                "stakingAmount": "Balance",
                "unbondings": "Vec<Unbonding>"
              },
              "Unbonding": {
                "amount": "Balance",
                "until": "BlockNumber"
              },
              "RingBalance": "Balance",
              "KtonBalance": "Balance",
              "TsInMs": "u64",
              "Power": "u32",
              "DepositId": "U256",
              "TimeDepositItem": {
                "value": "Balance",
                "startTime": "TsInMs",
                "expireTime": "TsInMs"
              },
              "ExposureT": {
                "ownRingBalance": "Balance",
                "ownKtonBalance": "Balance",
                "ownPower": "Power",
                "totalPower": "Power",
                "others": "Vec<IndividualExposure>"
              },
              "Exposure": "ExposureT",
              "IndividualExposure": {
                "who": "AccountId",
                "ringBalance": "Compact<Balance>",
                "ktonBalance": "Compact<Balance>",
                "power": "Power"
              },
              "ElectionResultT": {
                "electedStashes": "Vec<AccountId>",
                "exposures": "Vec<(AccountId, ExposureT)>",
                "compute": "ElectionCompute"
              },
              "RKT": {
                "r": "Balance",
                "k": "Balance"
              },
              "SpanRecord": {
                "slashed": "RKT",
                "paidOut": "RKT"
              },
              "UnappliedSlash": {
                "validator": "AccountId",
                "own": "RKT",
                "others": "Vec<(AccountId, RKT)>",
                "reporters": "Vec<AccountId>",
                "payout": "RKT"
              },
              "MappedRing": "u128",
              "EthereumTransactionIndex": "(H256, u64)",
              "EthereumBlockNumber": "u64",
              "Bloom": "[u8; 256; Bloom]",
              "EthashProof": {
                "dagNodes": "[H512; 2]",
                "proof": "Vec<H128>"
              },
              "LegacyReceipt": {
                "gas_used": "U256",
                "log_bloom": "Bloom",
                "logs": "Vec<LogEntry>",
                "outcome": "TransactionOutcome"
              },
              "LogEntry": {
                "address": "Address",
                "topics": "Vec<H256>",
                "data": "Bytes"
              },
              "TransactionOutcome": {
                "_enum": {
                  "Unknown": "Null",
                  "StateRoot": "H256",
                  "StatusCode": "u8"
                }
              },
              "EthereumNetwork": {
                "_enum": {
                  "Mainnet": null,
                  "Ropsten": null
                }
              },
              "EthereumReceiptProof": {
                "index": "u64",
                "proof": "Bytes",
                "headerHash": "H256"
              },
              "MMRProof": {
                "memberLeafIndex": "u64",
                "lastLeafIndex": "u64",
                "proof": "Vec<H256>"
              },
              "EcdsaSignature": "[u8; 65; EcdsaSignature]",
              "Signature": "[u8;65]",
              "TronAddress": "EthereumAddress",
              "AddressT": "[u8; 20; AddressT]",
              "Address": "[u8; 20; Address]",
              "MerkleMountainRangeRootLog": {
                "prefix": "[u8; 4; Prefix]",
                "ParentMmrRoot": "Hash"
              },
              "ChainProperties": {
                "ss58Format": "Option<u8>",
                "tokenDecimals": "Option<Vec<u32>>",
                "tokenSymbol": "Option<Vec<Text>>"
              },
              "Signer": "EthereumAddress",
              "MMRRoot": "Hash",
              "EcdsaAddress": "EthereumAddress",
              "EcdsaMessage": "H256",
              "RelayAuthoritySigner": "EthereumAddress",
              "RelayAuthorityMessage": "EcdsaMessage",
              "RelayAuthoritySignature": "EcdsaSignature",
              "Term": "BlockNumber",
              "OpCode": "[u8; 4; OpCode]",
              "ElectionCompute": {
                "_enum": [
                  "OnChain",
                  "Signed",
                  "Authority"
                ]
              },
              "ValidatorPrefs": "ValidatorPrefsWithBlocked",
              "PriorRelayer": {
                "id": "AccountId",
                "fee": "Balance",
                "validRange": "BlockNumber"
              },
              "TokenMessageId": "[u8; 16; TokenMessageId]",
              "EraIndex": "u32",
              "RefCount": "u32",
              "Reasons": {
                "_enum": [
                  "Fee",
                  "Misc",
                  "All"
                ]
              },
              "ValidatorPrefsWithBlocked": {
                "commission": "Compact<Perbill>",
                "blocked": "bool"
              },
              "EthereumAddress": "GenericEthereumAccountId",
              "Fee": {
                "amount": "Balance"
              },
              "InProcessOrders": {
                "orders": "Vec<(LaneId, MessageNonce)>"
              },
              "MMRProofResult": {
                "mmrSize": "u64",
                "proof": "Text"
              },
              "NodeIndex": "u64",
              "MmrNodesPruningConfiguration": {
                "step": "NodeIndex",
                "progress": "NodeIndex",
                "lastPosition": "NodeIndex"
              },
              "ProxyType": {
                "_enum": {
                  "Any": null,
                  "NonTransfer": null,
                  "Governance": null,
                  "Staking": null,
                  "IdentityJudgement": null,
                  "EthereumBridge": null
                }
              },
              "Announcement": "ProxyAnnouncement",
              "ProxyAnnouncement": {
                "real": "AccountId",
                "callHash": "Hash",
                "height": "BlockNumber"
              },
              "CrabRuntimePalletsProxyProxyType": {
                "_enum": [
                  "Any",
                  "NonTransfer",
                  "Governance",
                  "Staking",
                  "IdentityJudgement",
                  "EthereumBridge"
                ]
              },
              "DarwiniaRuntimePalletsProxyProxyType": {
                "_enum": [
                  "Any",
                  "NonTransfer",
                  "Governance",
                  "Staking",
                  "IdentityJudgement",
                  "EthereumBridge"
                ]
              },
              "RelayHeaderId": "EthereumBlockNumber",
              "RelayProofs": "EthereumRelayProofs",
              "RelayVotingState": {
                "ayes": "Vec<AccountId>",
                "nays": "Vec<AccountId>"
              },
              "RelayAffirmationId": {
                "relayHeaderId": "RelayHeaderId",
                "round": "u32",
                "index": "u32"
              },
              "EthereumRelayProofs": {
                "ethashProof": "Vec<EthashProof>",
                "mmrProof": "Vec<H256>"
              },
              "PowerOf": {
                "power": "Power"
              },
              "PalletStakingIndividualExposure": {
                "who": "AccountId32",
                "value": "Compact<u128>"
              },
              "RewardPoint": "u32",
              "SpanIndex": "u32",
              "UnappliedSlashOther": "(AccountId, RKT)",
              "AccountInfo": "AccountInfoWithTripleRefCount",
              "AccountInfoWithTripleRefCount": {
                "nonce": "Index",
                "consumers": "RefCount",
                "providers": "RefCount",
                "data": "AccountData"
              },
              "AccountData": {
                "free": "Balance",
                "reserved": "Balance",
                "freeKton": "Balance",
                "reservedKton": "Balance"
              },
              "LockReasons": {
                "_enum": {
                  "Fee": null,
                  "Misc": null,
                  "All": null
                }
              },
              "StakingLedgerT": {
                "stash": "AccountId",
                "active": "Compact<Balance>",
                "activeDepositRing": "Compact<Balance>",
                "activeKton": "Compact<Balance>",
                "depositItems": "Vec<TimeDepositItem>",
                "ringStakingLock": "StakingLock",
                "ktonStakingLock": "StakingLock",
                "claimedRewards": "Vec<EraIndex>"
              }
            }
          },
          {
            "minmax": [
              43,
              null
            ],
            "types": {
              "UsableBalance": {
                "usableBalance": "Balance"
              },
              "Status": {
                "_enum": {
                  "Free": null,
                  "Reserved": null
                }
              },
              "LockIdentifier": "[u8; 8]",
              "MessageId": "(LaneId, MessageNonce)",
              "LaneId": "[u8; 4]",
              "MessageNonce": "u64",
              "CrabRuntimeMessagesDarwiniaMessageCrabToDarwiniaMessagesParameter": {
                "_enum": {
                  "DarwiniaToCrabConversionRate": "FixedU128"
                }
              },
              "FixedU128": "UInt<128, FixedU128>",
              "RelayerId": "AccountId",
              "UnrewardedRelayer": {
                "relayer": "RelayerId",
                "messages": "DeliveredMessages"
              },
              "DeliveredMessages": {
                "begin": "MessageNonce",
                "end": "MessageNonce",
                "dispatchResults": "BitVec"
              },
              "MessagePayload": "Vec<u8>",
              "TechnicalMember": "AccountId",
              "BridgedHeaderHash": "Hash",
              "BridgedBlockHash": "Hash",
              "RawStorageProof": "Vec<Bytes>",
              "BSCHeader": {
                "parentHash": "H256",
                "uncleHash": "H256",
                "coinbase": "EthereumAddress",
                "stateRoot": "H256",
                "transactionsRoot": "H256",
                "receiptsRoot": "H256",
                "logBloom": "Bloom",
                "difficulty": "U256",
                "number": "u64",
                "gasLimit": "U256",
                "gasUsed": "U256",
                "timestamp": "u64",
                "extraData": "Bytes",
                "mixDigest": "H256",
                "nonce": "Bytes"
              },
              "BalanceInfo": {},
              "BalanceLock": {
                "id": "LockIdentifier",
                "lockFor": "LockFor",
                "lockReasons": "LockReasons"
              },
              "LockFor": {
                "_enum": {
                  "Common": "Common",
                  "Staking": "StakingLock"
                }
              },
              "Common": {
                "amount": "Balance"
              },
              "StakingLock": {
                "stakingAmount": "Balance",
                "unbondings": "Vec<Unbonding>"
              },
              "Unbonding": {
                "amount": "Balance",
                "until": "BlockNumber"
              },
              "RingBalance": "Balance",
              "KtonBalance": "Balance",
              "TsInMs": "u64",
              "Power": "u32",
              "DepositId": "U256",
              "TimeDepositItem": {
                "value": "Balance",
                "startTime": "TsInMs",
                "expireTime": "TsInMs"
              },
              "ExposureT": {
                "ownRingBalance": "Balance",
                "ownKtonBalance": "Balance",
                "ownPower": "Power",
                "totalPower": "Power",
                "others": "Vec<IndividualExposure>"
              },
              "Exposure": "ExposureT",
              "IndividualExposure": {
                "who": "AccountId",
                "ringBalance": "Compact<Balance>",
                "ktonBalance": "Compact<Balance>",
                "power": "Power"
              },
              "ElectionResultT": {
                "electedStashes": "Vec<AccountId>",
                "exposures": "Vec<(AccountId, ExposureT)>",
                "compute": "ElectionCompute"
              },
              "RKT": {
                "r": "Balance",
                "k": "Balance"
              },
              "SpanRecord": {
                "slashed": "RKT",
                "paidOut": "RKT"
              },
              "UnappliedSlash": {
                "validator": "AccountId",
                "own": "RKT",
                "others": "Vec<(AccountId, RKT)>",
                "reporters": "Vec<AccountId>",
                "payout": "RKT"
              },
              "MappedRing": "u128",
              "EthereumTransactionIndex": "(H256, u64)",
              "EthereumBlockNumber": "u64",
              "Bloom": "[u8; 256; Bloom]",
              "EthashProof": {
                "dagNodes": "[H512; 2]",
                "proof": "Vec<H128>"
              },
              "LegacyReceipt": {
                "gas_used": "U256",
                "log_bloom": "Bloom",
                "logs": "Vec<LogEntry>",
                "outcome": "TransactionOutcome"
              },
              "LogEntry": {
                "address": "Address",
                "topics": "Vec<H256>",
                "data": "Bytes"
              },
              "TransactionOutcome": {
                "_enum": {
                  "Unknown": "Null",
                  "StateRoot": "H256",
                  "StatusCode": "u8"
                }
              },
              "EthereumNetwork": {
                "_enum": {
                  "Mainnet": null,
                  "Ropsten": null
                }
              },
              "EthereumReceiptProof": {
                "index": "u64",
                "proof": "Bytes",
                "headerHash": "H256"
              },
              "MMRProof": {
                "memberLeafIndex": "u64",
                "lastLeafIndex": "u64",
                "proof": "Vec<H256>"
              },
              "EcdsaSignature": "[u8; 65; EcdsaSignature]",
              "Signature": "[u8;65]",
              "TronAddress": "EthereumAddress",
              "AddressT": "[u8; 20; AddressT]",
              "Address": "[u8; 20; Address]",
              "MerkleMountainRangeRootLog": {
                "prefix": "[u8; 4; Prefix]",
                "ParentMmrRoot": "Hash"
              },
              "ChainProperties": {
                "ss58Format": "Option<u8>",
                "tokenDecimals": "Option<Vec<u32>>",
                "tokenSymbol": "Option<Vec<Text>>"
              },
              "Signer": "EthereumAddress",
              "MMRRoot": "Hash",
              "EcdsaAddress": "EthereumAddress",
              "EcdsaMessage": "H256",
              "RelayAuthoritySigner": "EthereumAddress",
              "RelayAuthorityMessage": "EcdsaMessage",
              "RelayAuthoritySignature": "EcdsaSignature",
              "Term": "BlockNumber",
              "OpCode": "[u8; 4; OpCode]",
              "ElectionCompute": {
                "_enum": [
                  "OnChain",
                  "Signed",
                  "Authority"
                ]
              },
              "ValidatorPrefs": "ValidatorPrefsWithBlocked",
              "PriorRelayer": {
                "id": "AccountId",
                "fee": "Balance",
                "validRange": "BlockNumber"
              },
              "TokenMessageId": "[u8; 16; TokenMessageId]",
              "EraIndex": "u32",
              "RefCount": "u32",
              "Reasons": {
                "_enum": [
                  "Fee",
                  "Misc",
                  "All"
                ]
              },
              "ValidatorPrefsWithBlocked": {
                "commission": "Compact<Perbill>",
                "blocked": "bool"
              },
              "EthereumAddress": "GenericEthereumAccountId",
              "Fee": {
                "amount": "Balance"
              },
              "InProcessOrders": {
                "orders": "Vec<(LaneId, MessageNonce)>"
              },
              "MMRProofResult": {
                "mmrSize": "u64",
                "proof": "Text"
              },
              "NodeIndex": "u64",
              "MmrNodesPruningConfiguration": {
                "step": "NodeIndex",
                "progress": "NodeIndex",
                "lastPosition": "NodeIndex"
              },
              "ProxyType": {
                "_enum": {
                  "Any": null,
                  "NonTransfer": null,
                  "Governance": null,
                  "Staking": null,
                  "IdentityJudgement": null,
                  "EthereumBridge": null
                }
              },
              "Announcement": "ProxyAnnouncement",
              "ProxyAnnouncement": {
                "real": "AccountId",
                "callHash": "Hash",
                "height": "BlockNumber"
              },
              "CrabRuntimePalletsProxyProxyType": {
                "_enum": [
                  "Any",
                  "NonTransfer",
                  "Governance",
                  "Staking",
                  "IdentityJudgement",
                  "EthereumBridge"
                ]
              },
              "DarwiniaRuntimePalletsProxyProxyType": {
                "_enum": [
                  "Any",
                  "NonTransfer",
                  "Governance",
                  "Staking",
                  "IdentityJudgement",
                  "EthereumBridge"
                ]
              },
              "RelayHeaderId": "EthereumBlockNumber",
              "RelayProofs": "EthereumRelayProofs",
              "RelayVotingState": {
                "ayes": "Vec<AccountId>",
                "nays": "Vec<AccountId>"
              },
              "RelayAffirmationId": {
                "relayHeaderId": "RelayHeaderId",
                "round": "u32",
                "index": "u32"
              },
              "EthereumRelayProofs": {
                "ethashProof": "Vec<EthashProof>",
                "mmrProof": "Vec<H256>"
              },
              "PowerOf": {
                "power": "Power"
              },
              "PalletStakingIndividualExposure": {
                "who": "AccountId32",
                "value": "Compact<u128>"
              },
              "RewardPoint": "u32",
              "SpanIndex": "u32",
              "UnappliedSlashOther": "(AccountId, RKT)",
              "AccountData": {
                "free": "Balance",
                "reserved": "Balance",
                "freeKton": "Balance",
                "reservedKton": "Balance"
              },
              "LockReasons": {
                "_enum": {
                  "Fee": null,
                  "Misc": null,
                  "All": null
                }
              },
              "StakingLedgerT": {
                "stash": "AccountId",
                "active": "Compact<Balance>",
                "activeDepositRing": "Compact<Balance>",
                "activeKton": "Compact<Balance>",
                "depositItems": "Vec<TimeDepositItem>",
                "ringStakingLock": "StakingLock",
                "ktonStakingLock": "StakingLock",
                "claimedRewards": "Vec<EraIndex>"
              }
            }
          },
          {
            "minmax": [
              1210,
              null
            ],
            "types": {
              "UsableBalance": {
                "usableBalance": "Balance"
              },
              "Status": {
                "_enum": {
                  "Free": null,
                  "Reserved": null
                }
              },
              "LockIdentifier": "[u8; 8]",
              "MessageId": "(LaneId, MessageNonce)",
              "LaneId": "[u8; 4]",
              "MessageNonce": "u64",
              "CrabRuntimeMessagesDarwiniaMessageCrabToDarwiniaMessagesParameter": {
                "_enum": {
                  "DarwiniaToCrabConversionRate": "FixedU128"
                }
              },
              "FixedU128": "UInt<128, FixedU128>",
              "RelayerId": "AccountId",
              "UnrewardedRelayer": {
                "relayer": "RelayerId",
                "messages": "DeliveredMessages"
              },
              "DeliveredMessages": {
                "begin": "MessageNonce",
                "end": "MessageNonce",
                "dispatchResults": "BitVec"
              },
              "MessagePayload": "Vec<u8>",
              "TechnicalMember": "AccountId",
              "BridgedHeaderHash": "Hash",
              "BridgedBlockHash": "Hash",
              "RawStorageProof": "Vec<Bytes>",
              "BSCHeader": {
                "parentHash": "H256",
                "uncleHash": "H256",
                "coinbase": "EthereumAddress",
                "stateRoot": "H256",
                "transactionsRoot": "H256",
                "receiptsRoot": "H256",
                "logBloom": "Bloom",
                "difficulty": "U256",
                "number": "u64",
                "gasLimit": "U256",
                "gasUsed": "U256",
                "timestamp": "u64",
                "extraData": "Bytes",
                "mixDigest": "H256",
                "nonce": "Bytes"
              },
              "BalanceInfo": {},
              "BalanceLock": {
                "id": "LockIdentifier",
                "lockFor": "LockFor",
                "lockReasons": "LockReasons"
              },
              "LockFor": {
                "_enum": {
                  "Common": "Common",
                  "Staking": "StakingLock"
                }
              },
              "Common": {
                "amount": "Balance"
              },
              "StakingLock": {
                "stakingAmount": "Balance",
                "unbondings": "Vec<Unbonding>"
              },
              "Unbonding": {
                "amount": "Balance",
                "until": "BlockNumber"
              },
              "RingBalance": "Balance",
              "KtonBalance": "Balance",
              "TsInMs": "u64",
              "Power": "u32",
              "DepositId": "U256",
              "TimeDepositItem": {
                "value": "Balance",
                "startTime": "TsInMs",
                "expireTime": "TsInMs"
              },
              "ExposureT": {
                "ownRingBalance": "Balance",
                "ownKtonBalance": "Balance",
                "ownPower": "Power",
                "totalPower": "Power",
                "others": "Vec<IndividualExposure>"
              },
              "Exposure": "ExposureT",
              "IndividualExposure": {
                "who": "AccountId",
                "ringBalance": "Compact<Balance>",
                "ktonBalance": "Compact<Balance>",
                "power": "Power"
              },
              "ElectionResultT": {
                "electedStashes": "Vec<AccountId>",
                "exposures": "Vec<(AccountId, ExposureT)>",
                "compute": "ElectionCompute"
              },
              "RKT": {
                "r": "Balance",
                "k": "Balance"
              },
              "SpanRecord": {
                "slashed": "RKT",
                "paidOut": "RKT"
              },
              "UnappliedSlash": {
                "validator": "AccountId",
                "own": "RKT",
                "others": "Vec<(AccountId, RKT)>",
                "reporters": "Vec<AccountId>",
                "payout": "RKT"
              },
              "MappedRing": "u128",
              "EthereumTransactionIndex": "(H256, u64)",
              "EthereumBlockNumber": "u64",
              "Bloom": "[u8; 256; Bloom]",
              "EthashProof": {
                "dagNodes": "[H512; 2]",
                "proof": "Vec<H128>"
              },
              "LegacyReceipt": {
                "gas_used": "U256",
                "log_bloom": "Bloom",
                "logs": "Vec<LogEntry>",
                "outcome": "TransactionOutcome"
              },
              "LogEntry": {
                "address": "Address",
                "topics": "Vec<H256>",
                "data": "Bytes"
              },
              "TransactionOutcome": {
                "_enum": {
                  "Unknown": "Null",
                  "StateRoot": "H256",
                  "StatusCode": "u8"
                }
              },
              "EthereumNetwork": {
                "_enum": {
                  "Mainnet": null,
                  "Ropsten": null
                }
              },
              "EthereumReceiptProof": {
                "index": "u64",
                "proof": "Bytes",
                "headerHash": "H256"
              },
              "MMRProof": {
                "memberLeafIndex": "u64",
                "lastLeafIndex": "u64",
                "proof": "Vec<H256>"
              },
              "EcdsaSignature": "[u8; 65; EcdsaSignature]",
              "Signature": "[u8;65]",
              "TronAddress": "EthereumAddress",
              "AddressT": "[u8; 20; AddressT]",
              "Address": "[u8; 20; Address]",
              "MerkleMountainRangeRootLog": {
                "prefix": "[u8; 4; Prefix]",
                "ParentMmrRoot": "Hash"
              },
              "ChainProperties": {
                "ss58Format": "Option<u8>",
                "tokenDecimals": "Option<Vec<u32>>",
                "tokenSymbol": "Option<Vec<Text>>"
              },
              "Signer": "EthereumAddress",
              "MMRRoot": "Hash",
              "EcdsaAddress": "EthereumAddress",
              "EcdsaMessage": "H256",
              "RelayAuthoritySigner": "EthereumAddress",
              "RelayAuthorityMessage": "EcdsaMessage",
              "RelayAuthoritySignature": "EcdsaSignature",
              "Term": "BlockNumber",
              "OpCode": "[u8; 4; OpCode]",
              "ElectionCompute": {
                "_enum": [
                  "OnChain",
                  "Signed",
                  "Authority"
                ]
              },
              "ValidatorPrefs": "ValidatorPrefsWithBlocked",
              "PriorRelayer": {
                "id": "AccountId",
                "fee": "Balance",
                "validRange": "BlockNumber"
              },
              "TokenMessageId": "[u8; 16; TokenMessageId]",
              "EraIndex": "u32",
              "RefCount": "u32",
              "Reasons": {
                "_enum": [
                  "Fee",
                  "Misc",
                  "All"
                ]
              },
              "ValidatorPrefsWithBlocked": {
                "commission": "Compact<Perbill>",
                "blocked": "bool"
              },
              "EthereumAddress": "GenericEthereumAccountId",
              "Fee": {
                "amount": "Balance"
              },
              "InProcessOrders": {
                "orders": "Vec<(LaneId, MessageNonce)>"
              },
              "MMRProofResult": {
                "mmrSize": "u64",
                "proof": "Text"
              },
              "NodeIndex": "u64",
              "MmrNodesPruningConfiguration": {
                "step": "NodeIndex",
                "progress": "NodeIndex",
                "lastPosition": "NodeIndex"
              },
              "ProxyType": {
                "_enum": {
                  "Any": null,
                  "NonTransfer": null,
                  "Governance": null,
                  "Staking": null,
                  "IdentityJudgement": null,
                  "EthereumBridge": null
                }
              },
              "Announcement": "ProxyAnnouncement",
              "ProxyAnnouncement": {
                "real": "AccountId",
                "callHash": "Hash",
                "height": "BlockNumber"
              },
              "CrabRuntimePalletsProxyProxyType": {
                "_enum": [
                  "Any",
                  "NonTransfer",
                  "Governance",
                  "Staking",
                  "IdentityJudgement",
                  "EthereumBridge"
                ]
              },
              "DarwiniaRuntimePalletsProxyProxyType": {
                "_enum": [
                  "Any",
                  "NonTransfer",
                  "Governance",
                  "Staking",
                  "IdentityJudgement",
                  "EthereumBridge"
                ]
              },
              "RelayHeaderId": "EthereumBlockNumber",
              "RelayProofs": "EthereumRelayProofs",
              "RelayVotingState": {
                "ayes": "Vec<AccountId>",
                "nays": "Vec<AccountId>"
              },
              "RelayAffirmationId": {
                "relayHeaderId": "RelayHeaderId",
                "round": "u32",
                "index": "u32"
              },
              "EthereumRelayProofs": {
                "ethashProof": "Vec<EthashProof>",
                "mmrProof": "Vec<H256>"
              },
              "PowerOf": {
                "power": "Power"
              },
              "PalletStakingIndividualExposure": {
                "who": "AccountId32",
                "value": "Compact<u128>"
              },
              "RewardPoint": "u32",
              "SpanIndex": "u32",
              "UnappliedSlashOther": "(AccountId, RKT)",
              "AccountData": {
                "free": "Balance",
                "reserved": "Balance",
                "freeKton": "Balance",
                "reservedKton": "Balance"
              },
              "LockReasons": {
                "_enum": {
                  "Fee": null,
                  "Misc": null,
                  "All": null
                }
              },
              "StakingLedgerT": {
                "stash": "AccountId",
                "active": "Compact<Balance>",
                "activeDepositRing": "Compact<Balance>",
                "activeKton": "Compact<Balance>",
                "depositItems": "Vec<TimeDepositItem>",
                "ringStakingLock": "StakingLock",
                "ktonStakingLock": "StakingLock",
                "claimedRewards": "Vec<EraIndex>"
              }
            }
          }
        ]
      }
    }
  }
}

module.exports = crabOptions;
