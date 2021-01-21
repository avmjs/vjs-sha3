const sha3 = require('../index.js');
const Web3 = require('web3');
const web3 = new Web3();
const assert = require('chai').assert;

function randomString(length, chars) {
  var result = ''; // eslint-disable-line

  for (var i = length; i > 0; --i) { // eslint-disable-line
    result += chars[Math.floor(Math.random() * chars.length)];
  }

  return result;
}

function testSha3(length) {
  const value = randomString(length, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');

  assert.equal(sha3(value), web3.sha3(value));
}

describe('sha3 method', () => {
  it('should preform normally as compared with web3.sha3', () => {
    for (var length = 0; length < 64; length++) { // eslint-disable-line
      for (var count = 0; count < 64; count++) { // eslint-disable-line
        testSha3(length);
      }
    }
  });
});
