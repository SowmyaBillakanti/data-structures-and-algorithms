const mbv = require('../multi-bracket-validation');

describe('multi-bracket-validation testing', () => {

    it('{}', () => {
        const result = mbv("{}");
        expect(result).toBe(true);
    });

    it('{}(){}', () => {
        const result = mbv('{}(){}');
        expect(result).toBe(true);
    });

    it('()[[Extra Characters]]', () => {
        const result = mbv('()[[Extra Characters]]');
        expect(result).toBe(true);
    });

    it('(){}[[]]', () => {
        const result = mbv('(){}[[]]');
        expect(result).toBe(true);
    });

    it('{}{Code}[Fellows](())', () => {
        const result = mbv('{}{Code}[Fellows](())');
        expect(result).toBe(true);
    });

    it('[({}]', () => {
        const result = mbv('[({}]');
        expect(result).toBe(false);
    });

    it('(](', () => {
        const result = mbv('(](');
        expect(result).toBe(false);
    });

    it('{(})', () => {
        const result = mbv('{(})');
        expect(result).toBe(false);
    });
})
