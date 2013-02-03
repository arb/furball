<a href="/walmartlabs/blammo"><img src="https://raw.github.com/walmartlabs/blammo/master/images/from.png" align="right" /></a>
![furball Logo](https://raw.github.com/walmartlabs/furball/master/images/furball.png)

[**hapi**](https://github.com/walmartlabs/hapi) plugin utilities and endpoints

[![Build Status](https://secure.travis-ci.org/walmartlabs/furball.png)](http://travis-ci.org/walmartlabs/furball)

**furball** provides a basic set of endpoints for **hapi**-based servers. Once registered, the plugin adds two endpoints:
- __/version__ - the version number of the current root module.
- __/plugins__ - a list of the plugins loaded in the server with their versions.

The main purpose of **furball** is to provide a template for writing other **hapi** plugins.

Both endpints can be disabled or the path customized:
```javascript
var config = {
    furball: {
        version: {
            path: '/VERSION'
        },
        plugins: false
    }
};

var server = new Hapi.Server();
server.plugin(config).register('furball', function (err) { });
```

The module also registers the _'plugins()'_ API method:
```javascript
console.log(server.api.furball.plugins(server));
```

