'use strict';

const HashTables = require('./hashTables')

describe('hash tables', () => {
    it('Adding a key/value to your hashtable results in the value being in the data structure', () => {
        var ht = new HashTables(5)
        ht.add("SB", "May 1")
        ht.add("MT", "May 30")

        const hashIndex = ht.hash("MT")
        expect(ht.map[hashIndex]).not.toBeNull()
    }),

    it('Retrieving based on a key returns the value stored', () => {
        var ht = new HashTables(5)
        ht.add("SB", "May 1")
        ht.add("MT", "May 30")

        expect(ht.get("SB")).toStrictEqual("May 1")
    }),

    it('Successfully returns null for a key that does not exist in the hashtable', () => {
        var ht = new HashTables(5)
        ht.add("SB", "May 1")
        ht.add("MT", "May 30")

        expect(ht.get("NG")).toBeNull()
    }),

    it('Successfully handle a collision within the hashtable', () => {
        var ht = new HashTables(5)
        ht.add("SB", "May 1")
        ht.add("MT", "May 30")
        ht.add("BS", "June 1")

        expect(ht.contains("SB")).toBe(true)
        expect(ht.contains("BS")).toBe(true)
    }),

    it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
        var ht = new HashTables(5)
        ht.add("SB", "May 1")
        ht.add("MT", "May 30")
        ht.add("BS", "June 1")

        expect(ht.get("BS")).toStrictEqual("June 1")
    }),

    it('Successfully hash a key to an in-range value', () => {
        const hashTableSize = 5
        var ht = new HashTables(hashTableSize)
        const hashIndex = ht.hash("SB")

        expect(hashIndex).toBeLessThan(hashTableSize)
        expect(hashIndex).toBeGreaterThanOrEqual(0)
    })
})
