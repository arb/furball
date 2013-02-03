// Load modules

var Hoek = require('hoek');
var Endpoints = require('./endpoints');
var Api = require('./api');
var Config = require('./config');


// Declare internals

var internals = {};


exports.register = function (pack, options, next) {

    Config.init(pack.config, options);

    if (Config.version) {
        pack.route({ method: 'GET', path: Config.version.path, config: Endpoints.version });
    }

    if (Config.plugins) {
        pack.route({ method: 'GET', path: Config.plugins.path, config: Endpoints.plugins });
    }

    pack.api(Api);

    next();
};

