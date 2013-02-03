// Load modules

var Chai = require('chai');
var Hapi = require('hapi');
var Furballs = process.env.TEST_COV ? require('../lib-cov') : require('../lib');


// Declare internals

var internals = {};


// Test shortcuts

var expect = Chai.expect;


describe('Furballs', function () {

    // Wrapper is required for coverage

    var plugin = {
        name: 'furballs',
        version: Hapi.utils.loadPackage().version,
        hapi: {
            plugin: true
        },
        register: Furballs.register
    };

    it('returns current version', function (done) {

        var config = {
            furballs: {
                version: {
                    path: '/VERSION'
                }
            }
        };

        var server = new Hapi.Server();
        server.plugin(config).register(plugin, function (err) {

            expect(err).to.not.exist;
            server.inject({ method: 'GET', url: '/VERSION' }, function (res) {

                console.log(res.result);
                expect(res.result).to.equal(Hapi.utils.loadPackage().version);
                done();
            });
        });
    });

    it('returns current plugins', function (done) {

        var server = new Hapi.Server();
        server.plugin().register(plugin, function (err) {

            expect(err).to.not.exist;
            server.inject({ method: 'GET', url: '/plugins' }, function (res) {

                console.log(res.result);
                expect(res.result).to.deep.equal([{ name: 'furballs', version: Hapi.utils.loadPackage().version }]);
                done();
            });
        });
    });
});


