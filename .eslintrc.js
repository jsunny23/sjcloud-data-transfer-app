module.exports = {
  "parser": "babel-eslint",
  "env": {
    "es6": true,
    "node": true,
    "browser": true,
    "jasmine": true
  },
  "extends": "airbnb",
  "plugins": ["jasmine"],
  "rules": {
    "import/no-dynamic-require": 0 // Disable string literal imports
  }
};
