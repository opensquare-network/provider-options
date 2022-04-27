import { fullOverrideBundle } from '@sora-substrate/type-definitions';

const options = {
  typesBundle: {
    spec: {
      'sora-substrate': fullOverrideBundle.spec.sora,
    },
  },
}

console.log(options);
