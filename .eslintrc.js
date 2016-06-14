'use strict';

let rules = require.resolve('./index');

module.exports = {
    extends: [
        rules
    ],

    'env': {
        'node': true,
        'es6' : true
    },

    "globals": {
        "browser": true
    },

    'parserOptions': {
        'ecmaVersion': 6
    }
};
