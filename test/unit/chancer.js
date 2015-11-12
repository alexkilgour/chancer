'use strict';

var assert = require('proclaim');

describe('lib/chancer', function () {
    var chancer;

    beforeEach(function () {
        chancer = require('../../lib/chancer');
    });

    it('should be an object', function () {
        assert.isObject(chancer);
    });

    it('should have a `random` method', function () {
        assert.isFunction(chancer.random);
    });

    describe('chancer.random()', function () {
        var result;

        beforeEach(function () {
            result = chancer.random();
        });

        it('should return a floating-point number between 0 and 1', function () {
            assert.greaterThanOrEqual(result, 0);
            assert.lessThan(result, 1);
        });

    });
});
