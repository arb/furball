// Load modules

var Config = require('../config');


// Declare internals

var internals = {};


// Generate a presentable list of loaded plugins

exports.plugins = function (server) {

    var plugins = [];
    Object.keys(server.plugin.list).forEach(function (name) {

        var plugin = server.plugin.list[name];
        plugins.push({
            name: plugin.name,
            version: plugin.version
        });
    });

    return plugins;
};

