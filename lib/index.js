// Load modules

var Hoek = require('hoek');
var Endpoints = require('./endpoints');
var Api = require('./api');
var Config = require('./config');


// Declare internals

var internals = {};


exports.register = function (pack, next) {

    Config.init(pack.config);

    if (Config.version) {
        this.route({ method: 'GET', path: Config.version.path, config: Endpoints.version });
    }

    if (Config.plugins) {
        this.route({ method: 'GET', path: Config.plugins.path, config: Endpoints.plugins });
    }

    this.api(Api);

    next();
};

