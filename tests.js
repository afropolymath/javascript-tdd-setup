'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/library.js');

describe("Test that constants are computed properly", function() {
  it("should give 10, 4 for constants 2, 5 as a and n respectively", function() {
    assert(
      lib.compareCoefficients(lib.quadraticDerivative(2, 5), { a: 10, n: 4 })
    );
  });
  it("should give 2, 1 for constants 1, 2 as a and n respectively", function() {
    assert(
      lib.compareCoefficients(lib.quadraticDerivative(1, 2), { a: 2, n: 1 })
    );
  });
  it("should give 8, 1 for constants 4, 2 as a and n respectively", function() {
    assert(
      lib.compareCoefficients(lib.quadraticDerivative(4, 2), { a: 8, n: 1 })
    );
  });
});