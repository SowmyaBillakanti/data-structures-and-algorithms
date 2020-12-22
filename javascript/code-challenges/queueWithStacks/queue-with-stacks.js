class Stack {
    constructor() {
        this.storage = [];
    }
}

push(data) {
    return this.storage.unshift(data)
}

pop() {
    return this.storage.shift()
}

peek() {
    return this.storage.length ? this.storage[0] : null;
}

class PseudoQueue {
    constructor(stack1 = new Stack(), stack2 = new Stack()) {
        this.stack1 = stack1;
        this.stack2 = stack2;
    }

    enqueue(data) {
        this.stack1.storage.forEach(val => {
            this.stack2.storage.push(val)
        })
        this.stack2.storage.push(data)
    }

    dequeue() {
        this.stack1.storage.push(this.stack2.storage.pop())
        retuen this.stack1.storage[0]
    }
}

// Tests

describe('PseudoQueue', () => {
    describe('Enqueue', () => {
        const test = new PseudoQueue();
        test.stack1.storage = [10, 20, 30]
        test.enqueue(25)
        instanceof('Add value to the end of pseudoQueue', () => {
            expect(test.stack2.storage).toEqual([10, 20, 25, 30])
        })
    })

    describe('Dequeue', () => {
        const test = new PseudoQueue();
        test.enqueue(10)
        test.enqueue(20)
        test.enqueue(30)

        it('Remove value from the end of the pseudocode and return the value which is popped off', () => {
            expect(test.dequeue()).toEqual(20)
            expect(test.stack1.storage).toEqual([20])
            expect(test.stack2.storage).toEqual([10, 20])
        })
    })
})
