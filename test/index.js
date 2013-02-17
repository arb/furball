// Load modules

var Chai = require('chai');
var Hapi = require('hapi');
var Furball = require('../lib');


// Declare internals

var internals = {};


// Test shortcuts

var expect = Chai.expect;


describe('Furball', function () {

    it('returns current version', function (done) {

        var options = {
            plugin: {
                version: {
                    path: '/VERSION'
                }
            }
        };

        var server = new Hapi.Server();
        server.plugin().require('../', options, function (err) {

            expect(err).to.not.exist;
            server.inject({ method: 'GET', url: '/VERSION' }, function (res) {

                expect(res.result).to.equal(Hapi.utils.loadPackage().version);
                done();
            });
        });
    });

    it('returns current plugins', function (done) {

        var server = new Hapi.Server();
        server.plugin().require('../', function (err) {

            expect(err).to.not.exist;
            server.inject({ method: 'GET', url: '/plugins' }, function (res) {

                expect(res.result).to.deep.equal([{ name: 'furball', version: Hapi.utils.loadPackage().version }]);
                done();
            });
        });
    });

    it('returns current plugins via API', function (done) {

        var server = new Hapi.Server();
        server.plugin().require('../', function (err) {

            expect(err).to.not.exist;
            expect(server.plugins.furball.plugins(server)).to.deep.equal([{ name: 'furball', version: Hapi.utils.loadPackage().version }]);
            done();
        });
    });
});


