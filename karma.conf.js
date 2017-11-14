let webpackConfig = require("./webpack.conf.js");

module.exports = function(config) {
  const wc = webpackConfig;

  wc.plugins = [];

  config.set({
    browsers: ["Chrome"],
    frameworks: ["jasmine"],
    files: [
      "./app/bin/frontend/app.bundle.css",
      "./test/test.index.js",
      // serve assets, script, data file used in testing
      {
        pattern: "./app/testdata/*",
        served: true,
        included: false,
        watched: false,
      },
      {
        pattern: "./app/img/*",
        served: true,
        included: false,
        watched: false,
      },
      {
        pattern: "./app/bin/frontend/*",
        served: true,
        included: false,
        watched: false,
      },
    ],

    // the proxy path-keys below are used in the application
    // in the intial page load and for data requests,
    // and must be mapped to the corresponding
    // karma-served files listed in the "files" properties
    proxies: {
      "/testdata/": "/base/app/testdata/",
      "/img/": "/base/app/img/",
      "/bin/frontend/": "/base/app/bin/frontend/",
    },

    // we will pass the entry file to webpack for bundling.
    preprocessors: {
      "./test/*.js": ["webpack"],
      "*.js": ["webpack"],
      "*": ["webpack"],
    },

    // use the webpack config
    webpack: wc,
    singleRun: true,
    client: {
      captureConsole: true,
      mocha: {
        bail: true,
      },
    },

    webpackMiddleware: {
      noInfo: true,
    },
  });
};