require('fs');
require('googleapis');
require('babel-register')({
    presets: ['babel-preset-env'],
    plugins: ["transform-runtime"]
});
require('babel-polyfill');

require('./index.js');