const Darwinia = {
  "alias": {},
  "rpc": {},
  "types": [
    {
      "minmax": [
        0,
        22
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
        "DispatchErrorModule": "DispatchErrorModuleU8",
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
          "ownRingBalance": "Compact<Balance>",
          "ownKtonBalance": "Compact<Balance>",
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
        "RedeemFor": {
          "_enum": {
            "Token": null,
            "Deposit": null
          }
        },
        "DarwiniaDemocracyVoteThreshold": {
          "_enum": [
            "SuperMajorityApprove",
            "SuperMajorityAgainst",
            "SimpleMajority"
          ]
        },
        "EthHeader": {
          "parentHash": "H256",
          "ommersHash": "H256",
          "beneficiary": "EthAddress",
          "stateRoot": "H256",
          "transactionsRoot": "H256",
          "receiptsRoot": "H256",
          "logsBloom": "EthBloom",
          "difficulty": "U256",
          "number": "U256",
          "gasLimit": "U256",
          "gasUsed": "U256",
          "timestamp": "u64",
          "extraData": "Bytes",
          "mixMash": "H256",
          "nonce": "H64"
        },
        "EthAddress": "H160",
        "TransactionV2": {
          "_enum": {
            "Legacy": "LegacyTransaction",
            "EIP2930": "EIP2930Transaction",
            "EIP1559": "EIP1559Transaction"
          }
        },
        "EIP2930Transaction": {
          "chainId": "u64",
          "nonce": "U256",
          "gasPrice": "U256",
          "gasLimit": "U256",
          "action": "EthTransactionAction",
          "value": "U256",
          "input": "Bytes",
          "accessList": "EthAccessList",
          "oddYParity": "bool",
          "r": "H256",
          "s": "H256"
        },
        "EIP1559Transaction": {
          "chainId": "u64",
          "nonce": "U256",
          "maxPriorityFeePerGas": "U256",
          "maxFeePerGas": "U256",
          "gasLimit": "U256",
          "action": "EthTransactionAction",
          "value": "U256",
          "input": "Bytes",
          "accessList": "EthAccessList",
          "oddYParity": "bool",
          "r": "H256",
          "s": "H256"
        },
        "EthAccessListItem": {
          "address": "EthAddress",
          "slots": "Vec<H256>"
        },
        "EthAccessList": "Vec<EthAccessListItem>",
        "LegacyTransaction": {
          "nonce": "U256",
          "gasPrice": "U256",
          "gasLimit": "U256",
          "action": "EthTransactionAction",
          "value": "U256",
          "input": "Bytes",
          "signature": "EthTransactionSignature"
        },
        "EthTransactionSignature": {
          "v": "u64",
          "r": "H256",
          "s": "H256"
        },
        "EthTransactionAction": {
          "_enum": {
            "Call": "H160",
            "Create": "Null"
          }
        },
        "EthBloom": "H2048",
        "EthLog": {
          "address": "EthAddress",
          "topics": "Vec<H256>",
          "data": "Bytes",
          "blockHash": "Option<H256>",
          "blockNumber": "Option<U256>",
          "transactionHash": "Option<H256>",
          "transactionIndex": "Option<U256>",
          "logIndex": "Option<U256>",
          "transactionLogIndex": "Option<U256>",
          "removed": "bool"
        },
        "ExitRevert": {
          "_enum": [
            "Reverted"
          ]
        },
        "ExitSucceed": {
          "_enum": [
            "Stopped",
            "Returned",
            "Suicided"
          ]
        },
        "ExitFatal": {
          "_enum": {
            "NotSupported": "Null",
            "UnhandledInterrupt": "Null",
            "CallErrorAsFatal": "ExitError",
            "Other": "Text"
          }
        },
        "ExitError": {
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
            "Other": "Text"
          }
        },
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
        23,
        24
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
        "DispatchErrorModule": "DispatchErrorModuleU8",
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
          "ownRingBalance": "Compact<Balance>",
          "ownKtonBalance": "Compact<Balance>",
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
        "RedeemFor": {
          "_enum": {
            "Token": null,
            "Deposit": null
          }
        },
        "DarwiniaDemocracyVoteThreshold": {
          "_enum": [
            "SuperMajorityApprove",
            "SuperMajorityAgainst",
            "SimpleMajority"
          ]
        },
        "EthHeader": {
          "parentHash": "H256",
          "ommersHash": "H256",
          "beneficiary": "EthAddress",
          "stateRoot": "H256",
          "transactionsRoot": "H256",
          "receiptsRoot": "H256",
          "logsBloom": "EthBloom",
          "difficulty": "U256",
          "number": "U256",
          "gasLimit": "U256",
          "gasUsed": "U256",
          "timestamp": "u64",
          "extraData": "Bytes",
          "mixMash": "H256",
          "nonce": "H64"
        },
        "EthAddress": "H160",
        "TransactionV2": {
          "_enum": {
            "Legacy": "LegacyTransaction",
            "EIP2930": "EIP2930Transaction",
            "EIP1559": "EIP1559Transaction"
          }
        },
        "EIP2930Transaction": {
          "chainId": "u64",
          "nonce": "U256",
          "gasPrice": "U256",
          "gasLimit": "U256",
          "action": "EthTransactionAction",
          "value": "U256",
          "input": "Bytes",
          "accessList": "EthAccessList",
          "oddYParity": "bool",
          "r": "H256",
          "s": "H256"
        },
        "EIP1559Transaction": {
          "chainId": "u64",
          "nonce": "U256",
          "maxPriorityFeePerGas": "U256",
          "maxFeePerGas": "U256",
          "gasLimit": "U256",
          "action": "EthTransactionAction",
          "value": "U256",
          "input": "Bytes",
          "accessList": "EthAccessList",
          "oddYParity": "bool",
          "r": "H256",
          "s": "H256"
        },
        "EthAccessListItem": {
          "address": "EthAddress",
          "slots": "Vec<H256>"
        },
        "EthAccessList": "Vec<EthAccessListItem>",
        "LegacyTransaction": {
          "nonce": "U256",
          "gasPrice": "U256",
          "gasLimit": "U256",
          "action": "EthTransactionAction",
          "value": "U256",
          "input": "Bytes",
          "signature": "EthTransactionSignature"
        },
        "EthTransactionSignature": {
          "v": "u64",
          "r": "H256",
          "s": "H256"
        },
        "EthTransactionAction": {
          "_enum": {
            "Call": "H160",
            "Create": "Null"
          }
        },
        "EthBloom": "H2048",
        "EthLog": {
          "address": "EthAddress",
          "topics": "Vec<H256>",
          "data": "Bytes",
          "blockHash": "Option<H256>",
          "blockNumber": "Option<U256>",
          "transactionHash": "Option<H256>",
          "transactionIndex": "Option<U256>",
          "logIndex": "Option<U256>",
          "transactionLogIndex": "Option<U256>",
          "removed": "bool"
        },
        "ExitRevert": {
          "_enum": [
            "Reverted"
          ]
        },
        "ExitSucceed": {
          "_enum": [
            "Stopped",
            "Returned",
            "Suicided"
          ]
        },
        "ExitFatal": {
          "_enum": {
            "NotSupported": "Null",
            "UnhandledInterrupt": "Null",
            "CallErrorAsFatal": "ExitError",
            "Other": "Text"
          }
        },
        "ExitError": {
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
            "Other": "Text"
          }
        },
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
        25,
        1150
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
        "DispatchErrorModule": "DispatchErrorModuleU8",
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
        "BalanceInfo": "{}",
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
          "moment": "BlockNumber"
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
          "ownRingBalance": "Compact<Balance>",
          "ownKtonBalance": "Compact<Balance>",
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
          "dagNodes": "(H512, H512)",
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
        "Address": "MultiAddress",
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
        "RedeemFor": {
          "_enum": {
            "Token": null,
            "Deposit": null
          }
        },
        "DarwiniaDemocracyVoteThreshold": {
          "_enum": [
            "SuperMajorityApprove",
            "SuperMajorityAgainst",
            "SimpleMajority"
          ]
        },
        "EthHeader": {
          "parentHash": "H256",
          "ommersHash": "H256",
          "beneficiary": "EthAddress",
          "stateRoot": "H256",
          "transactionsRoot": "H256",
          "receiptsRoot": "H256",
          "logsBloom": "EthBloom",
          "difficulty": "U256",
          "number": "U256",
          "gasLimit": "U256",
          "gasUsed": "U256",
          "timestamp": "u64",
          "extraData": "Bytes",
          "mixMash": "H256",
          "nonce": "H64"
        },
        "EthAddress": "H160",
        "TransactionV2": {
          "_enum": {
            "Legacy": "LegacyTransaction",
            "EIP2930": "EIP2930Transaction",
            "EIP1559": "EIP1559Transaction"
          }
        },
        "EIP2930Transaction": {
          "chainId": "u64",
          "nonce": "U256",
          "gasPrice": "U256",
          "gasLimit": "U256",
          "action": "EthTransactionAction",
          "value": "U256",
          "input": "Bytes",
          "accessList": "EthAccessList",
          "oddYParity": "bool",
          "r": "H256",
          "s": "H256"
        },
        "EIP1559Transaction": {
          "chainId": "u64",
          "nonce": "U256",
          "maxPriorityFeePerGas": "U256",
          "maxFeePerGas": "U256",
          "gasLimit": "U256",
          "action": "EthTransactionAction",
          "value": "U256",
          "input": "Bytes",
          "accessList": "EthAccessList",
          "oddYParity": "bool",
          "r": "H256",
          "s": "H256"
        },
        "EthAccessListItem": {
          "address": "EthAddress",
          "slots": "Vec<H256>"
        },
        "EthAccessList": "Vec<EthAccessListItem>",
        "LegacyTransaction": {
          "nonce": "U256",
          "gasPrice": "U256",
          "gasLimit": "U256",
          "action": "EthTransactionAction",
          "value": "U256",
          "input": "Bytes",
          "signature": "EthTransactionSignature"
        },
        "EthTransactionSignature": {
          "v": "u64",
          "r": "H256",
          "s": "H256"
        },
        "EthTransactionAction": {
          "_enum": {
            "Call": "H160",
            "Create": "Null"
          }
        },
        "EthBloom": "H2048",
        "EthLog": {
          "address": "EthAddress",
          "topics": "Vec<H256>",
          "data": "Bytes",
          "blockHash": "Option<H256>",
          "blockNumber": "Option<U256>",
          "transactionHash": "Option<H256>",
          "transactionIndex": "Option<U256>",
          "logIndex": "Option<U256>",
          "transactionLogIndex": "Option<U256>",
          "removed": "bool"
        },
        "ExitRevert": {
          "_enum": [
            "Reverted"
          ]
        },
        "ExitSucceed": {
          "_enum": [
            "Stopped",
            "Returned",
            "Suicided"
          ]
        },
        "ExitFatal": {
          "_enum": {
            "NotSupported": "Null",
            "UnhandledInterrupt": "Null",
            "CallErrorAsFatal": "ExitError",
            "Other": "Text"
          }
        },
        "ExitError": {
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
            "Other": "Text"
          }
        },
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
          "relayHeaderId": "EthereumBlockNumber",
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
        "LookupSource": "MultiAddress",
        "MultiAddress": "GenericMultiAddress",
        "AccountData": {
          "free": "Balance",
          "reserved": "Balance",
          "freeKton": "Balance",
          "reservedKton": "Balance"
        },
        "EthereumReceipt": {
          "gasUsed": "U256",
          "logBloom": "Bloom",
          "logs": "Vec<LogEntry>",
          "outcome": "TransactionOutcome"
        },
        "Order": {
          "lane": "LaneId",
          "message": "MessageNonce",
          "sent_time": "BlockNumber",
          "confirm_time": "BlockNumber",
          "assigned_relayers": "Vec<PriorRelayer>"
        },
        "RelayAuthorityT": {
          "accountId": "AccountId",
          "signer": "EthereumAddress",
          "stake": "Balance",
          "term": "BlockNumber"
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
        1160,
        1200
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
        "DispatchErrorModule": "DispatchErrorModuleU8",
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
          "ownRingBalance": "Compact<Balance>",
          "ownKtonBalance": "Compact<Balance>",
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
        "RedeemFor": {
          "_enum": {
            "Token": null,
            "Deposit": null
          }
        },
        "DarwiniaDemocracyVoteThreshold": {
          "_enum": [
            "SuperMajorityApprove",
            "SuperMajorityAgainst",
            "SimpleMajority"
          ]
        },
        "EthHeader": {
          "parentHash": "H256",
          "ommersHash": "H256",
          "beneficiary": "EthAddress",
          "stateRoot": "H256",
          "transactionsRoot": "H256",
          "receiptsRoot": "H256",
          "logsBloom": "EthBloom",
          "difficulty": "U256",
          "number": "U256",
          "gasLimit": "U256",
          "gasUsed": "U256",
          "timestamp": "u64",
          "extraData": "Bytes",
          "mixMash": "H256",
          "nonce": "H64"
        },
        "EthAddress": "H160",
        "TransactionV2": {
          "_enum": {
            "Legacy": "LegacyTransaction",
            "EIP2930": "EIP2930Transaction",
            "EIP1559": "EIP1559Transaction"
          }
        },
        "EIP2930Transaction": {
          "chainId": "u64",
          "nonce": "U256",
          "gasPrice": "U256",
          "gasLimit": "U256",
          "action": "EthTransactionAction",
          "value": "U256",
          "input": "Bytes",
          "accessList": "EthAccessList",
          "oddYParity": "bool",
          "r": "H256",
          "s": "H256"
        },
        "EIP1559Transaction": {
          "chainId": "u64",
          "nonce": "U256",
          "maxPriorityFeePerGas": "U256",
          "maxFeePerGas": "U256",
          "gasLimit": "U256",
          "action": "EthTransactionAction",
          "value": "U256",
          "input": "Bytes",
          "accessList": "EthAccessList",
          "oddYParity": "bool",
          "r": "H256",
          "s": "H256"
        },
        "EthAccessListItem": {
          "address": "EthAddress",
          "slots": "Vec<H256>"
        },
        "EthAccessList": "Vec<EthAccessListItem>",
        "LegacyTransaction": {
          "nonce": "U256",
          "gasPrice": "U256",
          "gasLimit": "U256",
          "action": "EthTransactionAction",
          "value": "U256",
          "input": "Bytes",
          "signature": "EthTransactionSignature"
        },
        "EthTransactionSignature": {
          "v": "u64",
          "r": "H256",
          "s": "H256"
        },
        "EthTransactionAction": {
          "_enum": {
            "Call": "H160",
            "Create": "Null"
          }
        },
        "EthBloom": "H2048",
        "EthLog": {
          "address": "EthAddress",
          "topics": "Vec<H256>",
          "data": "Bytes",
          "blockHash": "Option<H256>",
          "blockNumber": "Option<U256>",
          "transactionHash": "Option<H256>",
          "transactionIndex": "Option<U256>",
          "logIndex": "Option<U256>",
          "transactionLogIndex": "Option<U256>",
          "removed": "bool"
        },
        "ExitRevert": {
          "_enum": [
            "Reverted"
          ]
        },
        "ExitSucceed": {
          "_enum": [
            "Stopped",
            "Returned",
            "Suicided"
          ]
        },
        "ExitFatal": {
          "_enum": {
            "NotSupported": "Null",
            "UnhandledInterrupt": "Null",
            "CallErrorAsFatal": "ExitError",
            "Other": "Text"
          }
        },
        "ExitError": {
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
            "Other": "Text"
          }
        },
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
        "DispatchErrorModule": "DispatchErrorModuleU8",
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
          "ownRingBalance": "Compact<Balance>",
          "ownKtonBalance": "Compact<Balance>",
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
        "RedeemFor": {
          "_enum": {
            "Token": null,
            "Deposit": null
          }
        },
        "DarwiniaDemocracyVoteThreshold": {
          "_enum": [
            "SuperMajorityApprove",
            "SuperMajorityAgainst",
            "SimpleMajority"
          ]
        },
        "EthHeader": {
          "parentHash": "H256",
          "ommersHash": "H256",
          "beneficiary": "EthAddress",
          "stateRoot": "H256",
          "transactionsRoot": "H256",
          "receiptsRoot": "H256",
          "logsBloom": "EthBloom",
          "difficulty": "U256",
          "number": "U256",
          "gasLimit": "U256",
          "gasUsed": "U256",
          "timestamp": "u64",
          "extraData": "Bytes",
          "mixMash": "H256",
          "nonce": "H64"
        },
        "EthAddress": "H160",
        "TransactionV2": {
          "_enum": {
            "Legacy": "LegacyTransaction",
            "EIP2930": "EIP2930Transaction",
            "EIP1559": "EIP1559Transaction"
          }
        },
        "EIP2930Transaction": {
          "chainId": "u64",
          "nonce": "U256",
          "gasPrice": "U256",
          "gasLimit": "U256",
          "action": "EthTransactionAction",
          "value": "U256",
          "input": "Bytes",
          "accessList": "EthAccessList",
          "oddYParity": "bool",
          "r": "H256",
          "s": "H256"
        },
        "EIP1559Transaction": {
          "chainId": "u64",
          "nonce": "U256",
          "maxPriorityFeePerGas": "U256",
          "maxFeePerGas": "U256",
          "gasLimit": "U256",
          "action": "EthTransactionAction",
          "value": "U256",
          "input": "Bytes",
          "accessList": "EthAccessList",
          "oddYParity": "bool",
          "r": "H256",
          "s": "H256"
        },
        "EthAccessListItem": {
          "address": "EthAddress",
          "slots": "Vec<H256>"
        },
        "EthAccessList": "Vec<EthAccessListItem>",
        "LegacyTransaction": {
          "nonce": "U256",
          "gasPrice": "U256",
          "gasLimit": "U256",
          "action": "EthTransactionAction",
          "value": "U256",
          "input": "Bytes",
          "signature": "EthTransactionSignature"
        },
        "EthTransactionSignature": {
          "v": "u64",
          "r": "H256",
          "s": "H256"
        },
        "EthTransactionAction": {
          "_enum": {
            "Call": "H160",
            "Create": "Null"
          }
        },
        "EthBloom": "H2048",
        "EthLog": {
          "address": "EthAddress",
          "topics": "Vec<H256>",
          "data": "Bytes",
          "blockHash": "Option<H256>",
          "blockNumber": "Option<U256>",
          "transactionHash": "Option<H256>",
          "transactionIndex": "Option<U256>",
          "logIndex": "Option<U256>",
          "transactionLogIndex": "Option<U256>",
          "removed": "bool"
        },
        "ExitRevert": {
          "_enum": [
            "Reverted"
          ]
        },
        "ExitSucceed": {
          "_enum": [
            "Stopped",
            "Returned",
            "Suicided"
          ]
        },
        "ExitFatal": {
          "_enum": {
            "NotSupported": "Null",
            "UnhandledInterrupt": "Null",
            "CallErrorAsFatal": "ExitError",
            "Other": "Text"
          }
        },
        "ExitError": {
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
            "Other": "Text"
          }
        },
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

const options = {
  "typesBundle": {
    "spec": {
      Darwinia,
    }
  },
}

module.exports = options;
