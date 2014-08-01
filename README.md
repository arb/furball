<a href="https://github.com/hapijs"><img src="https://raw.github.com/hapijs/spumko/master/images/from.png" align="right" /></a>
![furball Logo](https://raw.github.com/hapijs/furball/master/images/furball.png)

# No longer being maintained

[**hapi**](https://github.com/hapijs/hapi) plugin utilities and endpoints

[![Build Status](https://secure.travis-ci.org/hapijs/furball.png)](http://travis-ci.org/hapijs/furball)

**furball** provides a basic set of endpoints for **hapi**-based servers. Once registered, the plugin adds two endpoints:
- __/version__ - the version number of the current root module.
- __/plugins__ - a list of the plugins loaded in the server with their versions.

The main purpose of **furball** is to provide a template for writing other **hapi** plugins.

Both endpoints can be disabled or the path customized:
```javascript
var options = {
  plugin: {
    version: { path: '/VERSION' },
    plugins: false
  }
};

var server = new Hapi.Server();
server.plugin().register('furball', options, function (err) { });
```

The module also registers the _'plugins()'_ API method:
```javascript
console.log(server.plugins.furball.plugins(server));
```

