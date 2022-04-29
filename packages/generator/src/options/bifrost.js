import {
  rpc,
  signedExtensions,
  types,
  typesAlias,
  typesBundle,
} from "@bifrost-finance/type-definitions";

const options = {
  rpc,
  types,
  typesAlias,
  typesBundle,
  signedExtensions,
};

(() => {
  console.log(options);
})()
