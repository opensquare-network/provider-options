const { options: moonbeam } = require("./moonbeam");
const { options: moonriver } = require("./moonriver");
const { karuraOptions } = require("./karura");
const { acalaOptions } = require("./acala");
const { vara } = require("./vara");

module.exports = {
  basiliskOptions: require("./basilisk"),
  basilisk: require("./basilisk"),
  hydradxOptions: require("./hydradx"),
  hydradx: require("./hydradx"),
  bifrostOptions: require("./bifrost"),
  bifrost: require("./bifrost"),
  crustOptions: require("./crust"),
  crust: require("./crust"),
  karuraOptions,
  karura: karuraOptions,
  acalaOptions,
  acala: acalaOptions,
  khalaOptions: require("./khala"),
  khala: require("./khala"),
  kintsugiOptions: require("./kintsugi"),
  kintsugi: require("./kintsugi"),
  interlayOptions: require("./interlay"),
  interlay: require("./interlay"),
  polkadexOptions: require("./polkadex"),
  polkadex: require("./polkadex"),
  soraOptions: require("./sora"),
  crabOptions: require("./crab"),
  crab: require("./crab"),
  centrifugeOptions: require("./centrifuge"),
  centrifuge: require("./centrifuge"),
  altairOptions: require("./altari"),
  altair: require("./altari"),
  zeitgeistOptions: require("./zeitgeist"),
  zeitgeist: require("./zeitgeist"),
  shidenOptions: require("./shiden"),
  shiden: require("./shiden"),
  litentryOptions: require("./litentry"),
  litentry: require("./litentry"),
  parallelOptions: require("./parallel"),
  parallel: require("./parallel"),
  edgeware: require("./edgeware"),
  edgewareOptions: require("./edgeware"),
  darwinia: require("./darwinia"),
  darwiniaOptions: require("./darwinia"),
  moonbeam,
  moonbeamOptions: moonbeam,
  moonriver,
  moonriverOptions: moonriver,
  stafi: require("./stafi"),
  stafiOptions: require("./stafi"),
  vara,
  varaOptions: vara,
  astar: require("astar"),
  shibuya: require("./shibuya"),
}
