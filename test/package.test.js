/* global describe, it, expect */

var environment = require('..');

describe('bootable-environment', function() {
    
  it('should export function', function() {
    expect(environment).to.be.a('function');
  });
  
});
