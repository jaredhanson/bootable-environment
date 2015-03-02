# bootable-environment

[![Build](https://travis-ci.org/jaredhanson/bootable-environment.png)](https://travis-ci.org/jaredhanson/bootable-environment)
[![Coverage](https://coveralls.io/repos/jaredhanson/bootable-environment/badge.png)](https://coveralls.io/r/jaredhanson/bootable-environment)
[![Quality](https://codeclimate.com/github/jaredhanson/bootable-environment.png)](https://codeclimate.com/github/jaredhanson/bootable-environment)
[![Dependencies](https://david-dm.org/jaredhanson/bootable-environment.png)](https://david-dm.org/jaredhanson/bootable-environment)

Environment initialization phase for [Bootable](https://github.com/jaredhanson/bootable).

## Install

    $ npm install bootable-environment

## Usage

Register the phase to be invoked during the application boot sequence.

```javascript
app.phase(require('bootable-environment')('config/environments'));
```

If no path is specified `bootable-environment` will default to looking in `etc/env`

When invoked, this phase will load an environment initialization script for the
current environment (as set by `NODE_ENV`).  As a special case, if an `all.js`
script exists, that file will be loaded for *all* environments, prior to the
environment-specific script itself.

## Tests

    $ npm install
    $ npm test

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
