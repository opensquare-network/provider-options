const { moonbeam } = require("./moonbeam");

const options = {
  typesBundle: {
    spec: {
      moonriver: moonbeam,
    }
  }
}

module.exports = {
  options
}
