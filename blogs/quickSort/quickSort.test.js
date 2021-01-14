'use strict';

const { TestScheduler } = require('jest');
const quickSortRecursive = require('./quickSort');

describe('Testing the quick sort function', () => {
    it('unsorted array to return the same array sorted', () => {
        expect(quickSortRecursive([7, -2, 4, 1, 6, 5, 0, -4, 2])).toStrictEqual([-4, -2, 0, 1, 2, 4, 5, 6, 7]);
    });
});