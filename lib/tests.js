// Load modules

var Hapi = require('hapi');


// Declare internals

var internals = {};


exports.register = function (registerFunc, config, callback) {

    var instances = {
        http: new Hapi.Server,
        https: new Hapi.Server,
        admin: new Hapi.Server
    };

    var server = function (name) {

        Hapi.utils.assert(instances[name], 'Invalid server name: ' + name);

        return {
            addRoute: function (route) {

                instances[name].addRoute(route);
            },
            addRoutes: function (routes) {

                instances[name].addRoutes(routes);
            }
        };
    };

    registerFunc({ http: server('http'), https: server('https'), admin: server('admin') }, config, function (err) {

        return callback(err, instances);
    });
};


