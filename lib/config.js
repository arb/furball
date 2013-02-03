// Load modules

var Hoek = require('hoek');


// Declare internals

var internals = {};


// Defaults

module.exports = {
    version: {
        path: '/version'
    },
    plugins: {
        path: '/plugins'
    },
    globals: {}
};


module.exports.init = function (config, options) {

    Hoek.merge(module.exports, options);
    Hoek.merge(module.exports.globals, config);
};

