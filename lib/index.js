// Load modules

var Hoek = require('hoek');
var Endpoints = require('./endpoints');
var Api = require('./api');


// Declare internals

var internals = {};


// Defaults

internals.config = {
    version: {
        path: '/version'
    },
    plugins: {
        path: '/plugins'
    }
};


exports.register = function (pack, options, next) {

    Hoek.merge(internals.config, options);

    if (internals.config.version) {
        pack.route({ method: 'GET', path: internals.config.version.path, config: Endpoints.version });
    }

    if (internals.config.plugins) {
        pack.route({ method: 'GET', path: internals.config.plugins.path, config: Endpoints.plugins });
    }

    pack.api(Api);

    next();
};

