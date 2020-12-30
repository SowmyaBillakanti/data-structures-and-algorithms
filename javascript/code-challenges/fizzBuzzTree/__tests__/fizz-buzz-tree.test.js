const {fizzBuzzTree, Node, Tree} = require('./fizz-buzz-tree');


describe('fizz buzz tree', () => {
    // let testTree = new Tree()
    //     testTree.root(5)
    //     testTree.root.left(10)
    //     testTree.root.right(12)
    //     testTree.root.right.right(8)
    //     testTree.root.left.right(3)
    //     testTree.root.left.left.left(15)
        it('returns fizz if divisable by 3', () => {
            let test = fizzBuzzTree(testTree)
            console.log(fizzBuzzTree(testTree))
            expect(fizzBuzzTree(testTree)).toEqual(['buzz', 'buzz', 'fizz', '8', 'fizz', 'fizzbuzz'])

    }),

    it('returns buzz if divisable by 5', () => {

    }),

    it('returns fizzbuzz if divisable by 3 and 5', () =>{

    })
})