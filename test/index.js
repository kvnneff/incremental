var increment = require('../');
var assert = require('assert');

describe('increment()', function () {
    it('increments a number value', function () {
        assert(increment(1) === 2);
    });
    it('increments a numerical string value', function () {
        assert(increment('1') === '2');
    });
    it('increments an alphabetical string value', function () {
        assert(increment('A') === 'B');
    });
    it('skips number values in a given array', function () {
        assert(increment(1, [2, 3, 4]) === 5);
    });
    it('skips alphabetical values in a given array', function () {
        assert(increment('A', ['B', 'C', 'D']) === 'E');
    });
    it('increments by given incremental value', function () {
        assert(increment(1, [], 2) === 3)
        assert(increment('A', [], 2) === 'C');
    })
});
