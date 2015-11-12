'use strict';

var sinon  = require('sinon');
var assert = require('assert');

describe('lib/chancer', function () {
    var chancer;

    beforeEach(function () {
        chancer = require('../../lib/chancer');
    });

    it('should be an object', function () {
        assert.strictEqual(typeof chancer, 'object', 'chancer is an object');
    });
});