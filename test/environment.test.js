/* global describe, it, expect */

var environment = require('../lib');

describe('phases/environment', function() {

  it('should export a setup function', function() {
    expect(environment).to.be.a('function');
  });

  describe('phase with all environments script', function() {
    var app = new Object();
    app.envs = [];

    var phase = environment(__dirname + '/data/all');
    phase.call(app);

    it('should load environments', function() {
      expect(app.envs).to.have.length(2);
      expect(app.envs[0]).to.equal('all');
      expect(app.envs[1]).to.equal('development');
    });
  });

  describe('phase with custom submodule', function() {
    var app = new Object();
    app.envs = [];

    var phase = environment({dirname:__dirname + '/data/all', module:'test'});
    phase.call(app);

    it('should load environments', function() {
      expect(app.envs).to.have.length(3);
      expect(app.envs[0]).to.equal('all');
      expect(app.envs[1]).to.equal('all_test');
      expect(app.envs[2]).to.equal('development_test');
    });
  });

  describe('phase with string argument', function() {
    var app = new Object();
    app.envs = [];

    var phase = environment(__dirname + '/data/env');
    phase.call(app);

    it('should load environments', function() {
      expect(app.envs).to.have.length(1);
      expect(app.envs[0]).to.equal('development');
    });
  });

  describe('phase with dirname and env options', function() {
    var app = new Object();
    app.envs = [];

    var phase = environment({ dirname: __dirname + '/data/env', env: 'production' });
    phase.call(app);

    it('should load environments', function() {
      expect(app.envs).to.have.length(1);
      expect(app.envs[0]).to.equal('production');
    });
  });

  describe('phase with environment that lacks a script', function() {
    var app = new Object();
    app.envs = [];

    var phase = environment({ dirname: __dirname + '/data/env', env: 'test' });
    phase.call(app);

    it('should load environments', function() {
      expect(app.envs).to.have.length(0);
    });
  });

});
