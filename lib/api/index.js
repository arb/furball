// Load modules

var Config = require('../config');


// Declare internals

var internals = {};


// Generate a presentable list of loaded plugins

exports.plugins = function (server) {

    var plugins = [];
    Object.keys(server.plugins).forEach(function (name) {

        var plugin = server.plugins[name];
        plugins.push({
            name: plugin.name,
            version: plugin.version
        });
    });

    return plugins;
};

