require('fs');
require('readline');
require('googleapis');
require('babel-register')({
    presets: ['babel-preset-env'],
    plugins: ["transform-runtime"]
});
require('babel-polyfill');

require('./google_auth.js');