<a href="/walmartlabs/blammo"><img src="https://raw.github.com/walmartlabs/blammo/master/images/from.png" align="right" /></a>
![furballs Logo](https://raw.github.com/walmartlabs/furballs/master/images/furballs.png)

[**hapi**](https://github.com/walmartlabs/hapi) plugin utilities and endpoints

[![Build Status](https://secure.travis-ci.org/walmartlabs/furballs.png)](http://travis-ci.org/walmartlabs/furballs)

**furballs** provides a basic set of endpoints for **hapi**-based servers. Once registered, the plugin adds two endpoints:
- __/version__ - the version number of the current root module.
- __/plugins__ - a list of the plugins loaded in the server with their versions.

The main purpose of **furballs** is to provide a template for writing other **hapi** plugins.

Both endpints can be disabled or the path customized:
```javascript
var config = {
    furballs: {
        version: {
            path: '/VERSION'
        },
        plugins: false
    }
};

var server = new Hapi.Server();
server.plugin(config).register('furballs', function (err) { });
```

The module also registers the _'plugins()'_ API method:
```javascript
console.log(server.plugins.furballs.plugins());
```

