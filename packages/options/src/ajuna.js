const ajuna = {
  "types": [
    {
      "minmax": [
        0,
        null
      ],
      "types": {
        "Address": "MultiAddress",
        "LookupSource": "MultiAddress"
      }
    }
  ]
}

const options = {
  "typesBundle": {
    "spec": {
      ajuna,
    }
  }
}

module.exports = {
  ajuna: options,
};
