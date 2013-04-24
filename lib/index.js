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


exports.register = function (plugin, options, next) {

    var settings = Hoek.applyToDefaults(internals.defaults, options);

    if (settings.version) {
        plugin.route({
            method: 'GET',
            path: settings.version,
            handler: function () {

                this.reply(internals.version);
            }
        });
    }

    if (settings.plugins) {
        plugin.route({
            method: 'GET',
            path: settings.plugins,
            handler: function () {

                this.reply(listPlugins(this.server));
            }
        });
    }

    var listPlugins = function (server) {

        var plugins = [];
        Object.keys(server.pack.list).forEach(function (name) {

            var plug = server.pack.list[name];
            plugins.push({
                name: plug.name,
                version: plug.version
            });
        });

        return plugins;
    };

    plugin.api({ plugins: listPlugins });

    next();
};



