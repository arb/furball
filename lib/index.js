// Load modules

var Hoek = require('hoek');


// Declare internals

var internals = {};


// Defaults

internals.defaults = {
    version: '/version',
    plugins: '/plugins'
};


// Version

internals.version = Hoek.loadPackage().version;


exports.register = function (pack, options, next) {

    var settings = Hoek.applyToDefaults(internals.defaults, options);

    if (settings.version) {
        pack.route({
            method: 'GET',
            path: settings.version,
            handler: function () {

                this.reply(internals.version);
            }
        });
    }

    if (settings.plugins) {
        pack.route({
            method: 'GET',
            path: settings.plugins,
            handler: function () {

                this.reply(listPlugins(this.server));
            }
        });
    }

    var listPlugins = function (server) {

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

    pack.api({ plugins: listPlugins });

    next();
};



