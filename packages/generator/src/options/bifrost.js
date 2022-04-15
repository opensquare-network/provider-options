import {
  rpc as bifrostRpc,
  signedExtensions as bifrostSignedExtensions,
  types as bifrostTypes,
  typesAlias as bifrostTypeAlias,
  typesBundle as bifrostTypesBundle,
} from "@bifrost-finance/types";

const options = {
  rpc: {
    ...bifrostRpc,
  },
  types: {
    ...bifrostTypes,
  },
  typesAlias: {
    ...bifrostTypeAlias,
  },
  typesBundle: {
    spec: {
      ...bifrostTypesBundle,
    },
  },
  signedExtensions: {
    ...bifrostSignedExtensions,
  },
};

(() => {
  console.log(options);
})()