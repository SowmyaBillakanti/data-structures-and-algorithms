'use strict';

const insertionSort = require('./insertionSort');

describe('accuracy of the insertion sort function', () => {
    it('sort an array from smallest to highest number', () => {
        const testArray = [8, 4, 23, 42, 16, 15];
        expect(insertionSort(testArray)).toStrictEqual([4, 8, 15, 16, 23, 42]);
    });
});
