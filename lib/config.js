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
    }
};


module.exports.init = function (config) {

    Hoek.merge(module.exports, config.furballs);
};

