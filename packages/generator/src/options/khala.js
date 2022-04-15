import { versionedKhala, typesChain } from "@phala/typedefs";

const options = {
  typesBundle: {
    spec: {
      khala: versionedKhala,
    },
  },
  typesChain,
}

console.log(options);
