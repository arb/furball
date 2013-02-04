// Load modules

var Chai = require('chai');
var Hapi = require('hapi');
var Furball = process.env.TEST_COV ? require('../lib-cov') : require('../lib');


// Declare internals

var internals = {};


// Test shortcuts

var expect = Chai.expect;


describe('Furball', function () {

    // Wrapper is required for coverage

    var plugin = {
        name: 'furball',
        version: Hapi.utils.loadPackage().version,
        hapi: {
            plugin: '1.x.x'
        },
        register: Furball.register
    };

    it('returns current version', function (done) {

        var options = {
            plugin: {
                version: {
                    path: '/VERSION'
                }
            }
        };

        var server = new Hapi.Server();
        server.plugin().register(plugin, options, function (err) {

            expect(err).to.not.exist;
            server.inject({ method: 'GET', url: '/VERSION' }, function (res) {

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

                expect(res.result).to.deep.equal([{ name: 'furball', version: Hapi.utils.loadPackage().version }]);
                done();
            });
        });
    });

    it('returns current plugins via API', function (done) {

        var server = new Hapi.Server();
        server.plugin().register(plugin, function (err) {

            expect(err).to.not.exist;
            expect(server.api.furball.plugins(server)).to.deep.equal([{ name: 'furball', version: Hapi.utils.loadPackage().version }]);
            done();
        });
    });
});


