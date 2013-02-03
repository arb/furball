// Load modules

var Hoek = require('hoek');
var Api = require('../api');


// Declare internals

var internals = {
    version: Hoek.loadPackage().version,
};


// Version of current process

exports.version = {
    handler: function () {

        this.reply(internals.version);
    }
};


exports.plugins = {
    handler: function () {

        this.reply(Api.plugins(this.server));
    }
};

