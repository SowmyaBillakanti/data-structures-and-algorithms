const stackAndQueuesModule = require('../stacks-and-queues');
const Queue = stackAndQueuesModule.Queue;
const Stack = stackAndQueuesModule.Stack;


describe('Stack', () => {
    describe('Can successfully instantiate an empty stack', () => {
        it('Returns an empty stack', () => {
            const testStack = new Stack ()
            expect(testStack.storage.length).toEqual(0)
        })
    })

    describe('Push', () => {
        it('Can successfully push onto a stack', () => {
            const testStack = new Stack();
            testStack.push(2);
            expect(testStack.storage.length).toEqual(1);
            expect(testStack.storage[0]).toEqual(2)
        })
        it('Can successfully push multiple values onto a stack', () => {
            const testStack = new Stack();
            testStack.push(1);
            testStack.push(2);
            testStack.push(3);
            expect(testStack.storage.length).toEqual(3);
            expect(testStack.storage[0]).toEqual(3);
            expect(testStack.storage[1]).toEqual(2);
            expect(testStack.storage[2]).toEqual(1);
        })
    })

    describe('Pop', () => {
        describe('Can successfully pop off the stack', () => {
            const testStack = new Stack();
            testStack.push(3);
            testStack.push(2);
            testStack.push(1);
            it('returns the value of the node being removed', () => {
                expect(testStack.pop()).toEqual(1)
            })
            it('returns the length of the array' , () => {
                expect(testStack.storage.length).toEqual(2)
            })
            it('returns the remaining values in storage', () => {
            expect(testStack.storage).toEqual([2, 3]);
            })
            it('Can successful empy stack after multiple pops', () => {
                testStack.pop();
                testStack.pop();
                expect(testStack.storage.length).toEqual(0)
            })
        })
    })

    describe('Peek', () => {
        it('Can successfully peek the next item on the stack', () => {
            const testStack = new Stack();
            testStack.push(3);
            testStack.push(2);
            testStack.push(1);
            expect(testStack.peek()).toEqual(1)
        })
    })

    describe('isEmpty', () => {
        it('Will return true if stack is empty', () => {
            const testStack = new Stack();
            expect(testStack.isEmpty()).toBeTruthy
        })
        it('Will return false if stack is empty', () => {
            const testStack = new Stack();
            testStack.push(3);
            testStack.push(2);
            expect(testStack.isEmpty).toBeFalsy
        })
    })
})

describe('Queue', () => {
    describe('Can create a Queue', () => {
        it('Can successfully instantiate an empty queue', () => {
            const testQueue = new Queue();
            expect(testQueue.storage.length).toEqual(0)
        })
    })
    describe('Enqueue', () => {
        it('Can successfully enqueue into a queue', () => {
            const testQueue = new Queue();
            testQueue.enqueue(2);
            expect(testQueue.storage.length).toEqual(1)
            expect(testQueue.storage[0]).toEqual(2)
        })
        it('Can successfully enqueue multiple values into a queue', () => {
            const testQueue = new Queue();
            testQueue.enqueue(1);
            testQueue.enqueue(2);
            testQueue.enqueue(3);
            expect(testQueue.storage.length).toEqual(3)
            expect(testQueue.storage).toEqual([1, 2, 3])
        })
    })
    describe('Dequeue', () => {
        describe('Can successfully dequeue out of a queue the expected value', () => {
            const testQueue = new Queue();
            testQueue.storage = [1, 2, 3];
        })
        it('Returns value being removed from queue', () => {
            const testQueue = new Queue();
            testQueue.storage = [1, 2, 3];
            expect(testQueue.dequeue()).toEqual(1)
        })
        it('Removes the item from queue', () => {
            const testQueue = new Queue();
            testQueue.storage = [1, 2, 3];
            testQueue.dequeue();
            expect(testQueue.storage.length).toEqual(2);
            expect(testQueue.storage).toEqual([2, 3])
        })
        it('Can successfully empty a queue after multiple dequeues', () => {
            const testQueue = new Queue();
            testQueue.storage = [1, 2, 3];
            testQueue.dequeue();
            testQueue.dequeue();
            testQueue.dequeue();
            expect(testQueue.storage.length).toEqual(0);
            expect(testQueue.storage).toEqual([])
        })
    })

    describe('Queue peek()', () => {
        it('Can successfully peek into a queue, seeing the expected value', () => {
            const testQueue = new Queue();
            testQueue.storage = [1, 2, 3];
            expect(testQueue.peek()).toEqual(1);
        })
        it('Can peek into the queue without removing items from queue', () => {
            const testQueue = new Queue();
            testQueue.storage = [1, 2, 3];
            testQueue.peek();
            expect(testQueue.storage.length).toEqual(3)
        })
    })

    describe('Queue isEmpty()', () => { 
        it('Will return true if queue is empty', () => {
            const testQueue = new Queue ();
            expect(testQueue.isEmpty).toBeTruthy
        })
        it('Will return false is queue is not empty', () => {
            const testQueue = new Queue();
            testQueue.enqueue(2)
            expect(testQueue.isEmpty).toBeFalsy
        })
    })

})
