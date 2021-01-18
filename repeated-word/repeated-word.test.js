'use strict';

let repeatedWords = require('./repeated-word');

let string = 'Harry had been saying that he had been there';

describe(' the first word to occur more than once in that provided string.', () => {
    it('split words on string', () => {
        let count = repeatedWords.splitWords(string);
        expect(count.length).toStrictEqual(9);
    }),

    it('repeatedWord on string', () => {
        expect(repeatedWords.repeatedWords(string)).toStrictEqual('had');
      })
});