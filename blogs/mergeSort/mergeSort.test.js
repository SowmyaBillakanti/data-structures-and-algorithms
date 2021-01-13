'use strict';

const mergeSort = require('./mergeSort');

describe('mergeSort', () => {
    it('Should sort an array in ascending order', () => {
        let array = [10, -1, 2, 5, 0, 6, 4, -5]
        expect(mergeSort(array)).toStrictEqual([-5, -1, 0, 2, 4, 5, 6, 10]);
    });
});