'use strict';

var assert = require('proclaim');
var expect = require('chai').expect;

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

    describe('chancer.randomFloat()', function () {
        var result;

        beforeEach(function () {
            result = chancer.randomFloat(1,10);
        });

        it('should return a floating-point number between 1 and 10', function () {
            assert.greaterThanOrEqual(result, 1);
            assert.lessThan(result, 10);
        });

    });

    describe('chancer.randomInt()', function () {
        var result;

        beforeEach(function () {
            result = chancer.randomInt(1,10);
        });

        it('should return a integer number between 1 and 10', function () {
            assert.greaterThanOrEqual(result, 1);
            assert.lessThanOrEqual(result, 10);
        });

    });

    describe('chancer.coinToss()', function () {
        var result;

        beforeEach(function () {
            result = chancer.coinToss();
        });

        it('should return a 0 or 1 to represent a coin toss', function () {
            assert.include([0,1], result);
        });

    });

    describe('chancer.fromArray()', function () {
        var result;

        beforeEach(function () {
            result = chancer.fromArray([0,1,2,3,4,5]);
        });

        it('should return a random item from an array', function () {
            assert.include([0,1,2,3,4,5], result);
        });

    });

    describe('chancer.shuffleArray()', function () {
        var result;
        var expected;

        beforeEach(function () {
            result = chancer.shuffleArray([0,1,2,3,4,5]);
            expected = [0,1,2,3,4,5];
        });

        it('should return an array shuffled into a random order', function () {
            assert.isArray(result);
            expect(result).to.deep.have.same.members(expected);
            assert.notStrictEqual(result, expected);
        });

    });

    describe('chancer.randomArray()', function () {
        var result;
        var expected;

        beforeEach(function () {
            result = chancer.randomArray(0,10);
            expected = [0,1,2,3,4,5,6,7,8,9,10];
        });

        it('should return an array of integers between 0 and 10 (inclusive)', function () {
            assert.isArray(result);
            expect(result).to.deep.have.same.members(expected);
        });

    });

});
