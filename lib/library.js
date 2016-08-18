// The derivative of a function y = f(x) is denoted as df(x)/d(x). For functions ax^n, the derivate is nax^(n-1). Write a function that calculates the coefficient and power of the derivate of a function ax^n where a and n are given.
'use strict'

module.exports = {
  quadraticDerivative: function(a, n) {
    if (!a || !n)
      return false;
    let d = n * a;
    let p = n - 1;
    return { a: d, n: p };
  },
  compareCoefficients: function(coeff1, coeff2) {
    if (Object.keys(coeff1).length !== Object.keys(coeff2).length)
      return false;
    for(var i = 0; i < Object.keys(coeff1).length; i++) {
      var coeff = Object.keys(coeff1)[i];
      if(coeff1[coeff] !== coeff2[coeff])
        return false;
    }
    console.log("Returning the value");
    return true
  }
}