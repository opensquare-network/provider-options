const definitions = {
  "types": [
    {
      "minmax": [
        0,
        null
      ],
      "types": {
        "Address": "AccountId",
        "LookupSource": "AccountId"
      }
    }
  ]
}

const litentryOptions = {
  typesBundle: {
    spec: {
      litentry: definitions,
    }
  }
}

module.exports = litentryOptions;
