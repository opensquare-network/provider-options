const edgeware = {
  "alias": {
    "voting": {
      "Tally": "VotingTally"
    }
  },
  "types": [
    {
      "minmax": [
        0,
        31
      ],
      "types": {
        "ProposalRecord": {
          "index": "u32",
          "author": "AccountId",
          "stage": "VoteStage",
          "transition_time": "u32",
          "title": "Text",
          "contents": "Text",
          "vote_id": "u64"
        },
        "ProposalContents": "Bytes",
        "ProposalTitle": "Bytes",
        "Balance2": "u128",
        "VoteStage": {
          "_enum": [
            "PreVoting",
            "Commit",
            "Voting",
            "Completed"
          ]
        },
        "VoteType": {
          "_enum": [
            "Binary",
            "MultiOption",
            "RankedChoice"
          ]
        },
        "TallyType": {
          "_enum": [
            "OnePerson",
            "OneCoin"
          ]
        },
        "VoteOutcome": "[u8; 32]",
        "VotingTally": "Option<Vec<(VoteOutcome, u128)>>",
        "VoteData": {
          "initiator": "AccountId",
          "stage": "VoteStage",
          "vote_type": "VoteType",
          "tally_type": "TallyType",
          "is_commit_reveal": "bool"
        },
        "Commitments": "Vec<(AccountId, VoteOutcome)>",
        "Reveals": "Vec<(AccountId, Vec<VoteOutcome>)>",
        "VoteRecord": {
          "id": "u64",
          "commitments": "Commitments",
          "reveals": "Reveals",
          "data": "VoteData",
          "outcomes": "Vec<VoteOutcome>"
        },
        "voting::VoteType": "VoteType",
        "voting::TallyType": "TallyType",
        "voting::Tally": "VotingTally",
        "Keys": "SessionKeys4",
        "StakingLedger": "StakingLedgerTo240",
        "Votes": "VotesTo230",
        "ReferendumInfo": "ReferendumInfoTo239",
        "Weight": "u32",
        "DispatchInfo": "DispatchInfoTo244",
        "OpenTip": "OpenTipTo225",
        "ContractExecResult": "ContractExecResultTo255",
        "CompactAssignments": "CompactAssignmentsTo257",
        "RewardDestination": "RewardDestinationTo257",
        "RefCount": "RefCountTo259",
        "AccountInfo": "AccountInfoWithRefCount",
        "Address": "IndicesLookupSource",
        "LookupSource": "IndicesLookupSource"
      }
    },
    {
      "minmax": [
        32,
        38
      ],
      "types": {
        "ProposalRecord": {
          "index": "u32",
          "author": "AccountId",
          "stage": "VoteStage",
          "transition_time": "u32",
          "title": "Text",
          "contents": "Text",
          "vote_id": "u64"
        },
        "ProposalContents": "Bytes",
        "ProposalTitle": "Bytes",
        "Balance2": "u128",
        "VoteStage": {
          "_enum": [
            "PreVoting",
            "Commit",
            "Voting",
            "Completed"
          ]
        },
        "VoteType": {
          "_enum": [
            "Binary",
            "MultiOption",
            "RankedChoice"
          ]
        },
        "TallyType": {
          "_enum": [
            "OnePerson",
            "OneCoin"
          ]
        },
        "VoteOutcome": "[u8; 32]",
        "VotingTally": "Option<Vec<(VoteOutcome, u128)>>",
        "VoteData": {
          "initiator": "AccountId",
          "stage": "VoteStage",
          "vote_type": "VoteType",
          "tally_type": "TallyType",
          "is_commit_reveal": "bool"
        },
        "Commitments": "Vec<(AccountId, VoteOutcome)>",
        "Reveals": "Vec<(AccountId, Vec<VoteOutcome>)>",
        "VoteRecord": {
          "id": "u64",
          "commitments": "Commitments",
          "reveals": "Reveals",
          "data": "VoteData",
          "outcomes": "Vec<VoteOutcome>"
        },
        "voting::VoteType": "VoteType",
        "voting::TallyType": "TallyType",
        "voting::Tally": "VotingTally",
        "CompactAssignments": "CompactAssignmentsTo257",
        "ContractExecResult": "ContractExecResultTo255",
        "RewardDestination": "RewardDestinationTo257",
        "RefCount": "u32",
        "AccountInfo": "AccountInfoWithRefCount",
        "Address": "IndicesLookupSource",
        "LookupSource": "IndicesLookupSource"
      }
    },
    {
      "minmax": [
        39,
        41
      ],
      "types": {
        "ProposalRecord": {
          "index": "u32",
          "author": "AccountId",
          "stage": "VoteStage",
          "transition_time": "u32",
          "title": "Text",
          "contents": "Text",
          "vote_id": "u64"
        },
        "ProposalContents": "Bytes",
        "ProposalTitle": "Bytes",
        "Balance2": "u128",
        "VoteStage": {
          "_enum": [
            "PreVoting",
            "Commit",
            "Voting",
            "Completed"
          ]
        },
        "VoteType": {
          "_enum": [
            "Binary",
            "MultiOption",
            "RankedChoice"
          ]
        },
        "TallyType": {
          "_enum": [
            "OnePerson",
            "OneCoin"
          ]
        },
        "VoteOutcome": "[u8; 32]",
        "VotingTally": "Option<Vec<(VoteOutcome, u128)>>",
        "VoteData": {
          "initiator": "AccountId",
          "stage": "VoteStage",
          "vote_type": "VoteType",
          "tally_type": "TallyType",
          "is_commit_reveal": "bool"
        },
        "Commitments": "Vec<(AccountId, VoteOutcome)>",
        "Reveals": "Vec<(AccountId, Vec<VoteOutcome>)>",
        "VoteRecord": {
          "id": "u64",
          "commitments": "Commitments",
          "reveals": "Reveals",
          "data": "VoteData",
          "outcomes": "Vec<VoteOutcome>"
        },
        "voting::VoteType": "VoteType",
        "voting::TallyType": "TallyType",
        "voting::Tally": "VotingTally",
        "RefCount": "u32",
        "AccountInfo": "AccountInfoWithRefCount",
        "Address": "IndicesLookupSource",
        "LookupSource": "IndicesLookupSource"
      }
    },
    {
      "minmax": [
        42,
        46
      ],
      "types": {
        "Balance2": "u128",
        "ChainId": "u8",
        "DepositNonce": "u64",
        "ResourceId": "[u8; 32]",
        "ProposalStatus": {
          "_enum": [
            "Initiated",
            "Approved",
            "Rejected"
          ]
        },
        "ProposalVotes": {
          "votes_for": "Vec<AccountId>",
          "votes_against": "Vec<AccountId>",
          "staus": "ProposalStatus",
          "expiry": "BlockNumber"
        },
        "VoteStage": {
          "_enum": [
            "PreVoting",
            "Commit",
            "Voting",
            "Completed"
          ]
        },
        "VoteType": {
          "_enum": [
            "Binary",
            "MultiOption",
            "RankedChoice"
          ]
        },
        "TallyType": {
          "_enum": [
            "OnePerson",
            "OneCoin"
          ]
        },
        "VoteOutcome": "[u8; 32]",
        "VotingTally": "Option<Vec<(VoteOutcome, u128)>>",
        "VoteData": {
          "initiator": "AccountId",
          "stage": "VoteStage",
          "vote_type": "VoteType",
          "tally_type": "TallyType",
          "is_commit_reveal": "bool"
        },
        "Commitments": "Vec<(AccountId, VoteOutcome)>",
        "Reveals": "Vec<(AccountId, Vec<VoteOutcome>)>",
        "VoteRecord": {
          "id": "u64",
          "commitments": "Commitments",
          "reveals": "Reveals",
          "data": "VoteData",
          "outcomes": "Vec<VoteOutcome>"
        },
        "ProposalRecord": {
          "index": "u32",
          "author": "AccountId",
          "stage": "VoteStage",
          "transition_time": "u32",
          "title": "Text",
          "contents": "Text",
          "vote_id": "u64"
        },
        "ProposalContents": "Bytes",
        "ProposalTitle": "Bytes",
        "AccountInfo": "AccountInfoWithRefCount",
        "Address": "MultiAddress",
        "LookupSource": "MultiAddress"
      }
    },
    {
      "minmax": [
        47,
        null
      ],
      "types": {
        "Balance2": "u128",
        "DepositNonce": "u64",
        "ResourceId": "[u8; 32]",
        "ProposalStatus": {
          "_enum": [
            "Initiated",
            "Approved",
            "Rejected"
          ]
        },
        "ProposalVotes": {
          "votes_for": "Vec<AccountId>",
          "votes_against": "Vec<AccountId>",
          "staus": "ProposalStatus",
          "expiry": "BlockNumber"
        },
        "VoteStage": {
          "_enum": [
            "PreVoting",
            "Commit",
            "Voting",
            "Completed"
          ]
        },
        "VoteType": {
          "_enum": [
            "Binary",
            "MultiOption",
            "RankedChoice"
          ]
        },
        "TallyType": {
          "_enum": [
            "OnePerson",
            "OneCoin"
          ]
        },
        "VoteOutcome": "[u8; 32]",
        "VotingTally": "Option<Vec<(VoteOutcome, u128)>>",
        "VoteData": {
          "initiator": "AccountId",
          "stage": "VoteStage",
          "vote_type": "VoteType",
          "tally_type": "TallyType",
          "is_commit_reveal": "bool"
        },
        "Commitments": "Vec<(AccountId, VoteOutcome)>",
        "Reveals": "Vec<(AccountId, Vec<VoteOutcome>)>",
        "VoteRecord": {
          "id": "u64",
          "commitments": "Commitments",
          "reveals": "Reveals",
          "data": "VoteData",
          "outcomes": "Vec<VoteOutcome>"
        },
        "ProposalRecord": {
          "index": "u32",
          "author": "AccountId",
          "stage": "VoteStage",
          "transition_time": "u32",
          "title": "Text",
          "contents": "Text",
          "vote_id": "u64"
        },
        "ProposalContents": "Bytes",
        "ProposalTitle": "Bytes",
        "CID": "Vec<u8>",
        "Properties": {
          "_set": {
            "Transferable": 1,
            "Burnable": 2
          }
        },
        "ClassData": {
          "deposit": "Balance",
          "properties": "Properties"
        },
        "TokenData": {
          "deposit": "Balance"
        },
        "ClassInfo": {
          "metadata": "Vec<u8>",
          "total_issuance": "TokenId",
          "owner": "AccountId",
          "data": "ClassData"
        },
        "ClassInfoOf": "ClassInfo",
        "TokenInfo": {
          "metadata": "Vec<u8>",
          "owner": "AccountId",
          "data": "TokenData"
        },
        "TokenInfoOf": "TokenInfo",
        "TokenId": "u64",
        "ClassIdOf": "ClassId",
        "TokenIdOf": "TokenId",
        "Amount": "i128",
        "AmountOf": "Amount",
        "Approval": {
          "amount": "Balance",
          "deposit": "Balance"
        },
        "ApprovalKey": {
          "owner": "AccountId",
          "delegate": "AccountId"
        },
        "Commitment": "ScalarData",
        "CurrencyId": "u64",
        "CurrencyIdOf": "CurrencyId",
        "DustHandlerType": {
          "_enum": {
            "Burn": "Null",
            "Transfer": "AccountId"
          }
        },
        "HashFunction": {
          "_enum": [
            "PoseidonDefault",
            "PoseidonExp3",
            "PoseidonExp5",
            "PoseidonExp17",
            "MiMC",
            "Blake2",
            "Sha256"
          ]
        },
        "Manager": {
          "accountId": "AccountId",
          "required": "bool"
        },
        "MerkleTree": {
          "leaf_count": "u32",
          "max_leaves": "u32",
          "depth": "u8",
          "root_hash": "ScalarData",
          "edge_nodes": "Vec<ScalarData>",
          "hasher": "HashFunction",
          "should_store_leaves": "bool"
        },
        "MixerInfo": {
          "minimum_deposit_length_for_reward": "BlockNumber",
          "fixed_deposit_size": "Balance",
          "currency_id": "CurrencyIdOf"
        },
        "Nullifier": "ScalarData",
        "ScalarData": "[u8; 32]",
        "TokenDetails": {
          "owner": "AccountId",
          "issuer": "AccountId",
          "admin": "AccountId",
          "freezer": "AccountId",
          "supply": "Balance",
          "deposit": "Balance",
          "min_balance": "Balance",
          "approvals": "u32",
          "is_frozen": "bool",
          "dust_type": "DustHandlerType"
        },
        "TokenMetadata": {
          "deposit": "Balance",
          "name": "Vec<u8>",
          "symbol": "Vec<u8>",
          "decimals": "u8",
          "is_frozen": "bool"
        },
        "TreeId": "u32",
        "WithdrawProof": {
          "mixer_id": "TreeId",
          "cached_block": "BlockNumber",
          "cached_root": "ScalarData",
          "comms": "Vec<Commitment>",
          "nullifier_hash": "ScalarData",
          "proof_bytes": "Vec<u8>",
          "leaf_index_commitments": "Vec<Commitment>",
          "proof_commitments": "Vec<Commitment>",
          "recipient": "Option<AccountId>",
          "relayer": "Option<AccountId>"
        },
        "ETHBlock": {
          "inner": "Block"
        },
        "ETHReceipts": {
          "inner": "Vec<EthReceipt>"
        },
        "ETHTxStatuses": {
          "inner": "Vec<EthTransactionStatus>"
        },
        "AccountInfo": "AccountInfoWithTripleRefCount",
        "Address": "MultiAddress",
        "LookupSource": "MultiAddress"
      }
    }
  ]
}

const edgewareOptions = {
  typesBundle: { spec: { edgeware } }
}

module.exports = edgewareOptions;
