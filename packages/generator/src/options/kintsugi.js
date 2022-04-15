import def from "@interlay/interbtc-types";
const definitions = def.default;

function parseProviderRpcDefinitions(rpcDefs) {
  const parsedDefs = {};
  for (const module in rpcDefs) {
    const definitions = rpcDefs[module];
    for (const definitionName in definitions) {
      const definitionBody = definitions[definitionName];
      const decoratedDefinitionBody = {
        ...definitionBody,
        aliasSection: module,
      };
      parsedDefs[definitionName] = decoratedDefinitionBody;
    }
  }
  return parsedDefs;
}

const kintDefinitions = {
  types: definitions.types[0].types,
  rpc: parseProviderRpcDefinitions(definitions.rpc),
  providerRpc: definitions.rpc,
};

const kintsugiOptions = {
  typesBundle: {
    spec: {
      "interbtc-parachain": kintDefinitions,
    },
  },
  rpc: kintDefinitions.providerRpc,
}

;(() => {
  console.log(kintsugiOptions)
})();
