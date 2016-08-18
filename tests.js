'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./library.js');

describe("Test that constants are computer properly", function() {
  it("should give ?,? for constants 2, 5 as a, n and c respectively", function() {
    assert(
      lib.compareCoefficients(lib.quadraticDerivative(2, 5), { a: 10, n: 4 })
    )
  })
})