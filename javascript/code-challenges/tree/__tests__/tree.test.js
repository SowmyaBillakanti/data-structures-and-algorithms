const treeModule = require('../tree');
const BinaryTree = treeModule.BinaryTree;
const BTNode = treeModule.BTNode;
const BST = treeModule.BST;

describe('tree testing', () => {

    it('Can successfully instantiate an empty tree', () => {
        let rootNode = null;
        let bt = new BinaryTree(rootNode);
        expect(bt.treeRootNode).toBe(null);
    }),

    it('Can successfully instantiate a tree with a single root node', () =>  {
        let rootNode = new BTNode("abc", null, null);
        let bt = new BinaryTree(rootNode);
        expect(bt.treeRootNode).not.toBe(null);
    }),

    it('Can successfully add a left child and right child to a single root node', () =>  {
        let singleRootNode = new BTNode(5, null, null);
        let bst = new BST(singleRootNode);

        let newleftNode = new BTNode(4, null, null);
        bst.add(newleftNode);

        let newRightNode = new BTNode(6, null, null);
        bst.add(newRightNode);

        expect(bst.treeRootNode.leftNode).toBe(newleftNode);
        expect(bst.treeRootNode.rightNode).toBe(newRightNode);
    }),

    it('Can successfully return a collection from a preorder traversal', () =>  {
        let kNode = new BTNode('k', null, null);
        let nNode = new BTNode('n', null, null);
        let ashNode = new BTNode('ash', null, null);
        let hvNode = new BTNode('hv', null, null);
        let plNode = new BTNode("pl", kNode, nNode);
        let avrNode = new BTNode('avr', ashNode, hvNode);
        const billakantiRoot = new BTNode('kmr', avrNode, plNode);
        const bt = new BinaryTree(billakantiRoot);
        var outputArray = [];
        var expectedArray = [billakantiRoot, avrNode, ashNode, hvNode, plNode, kNode, nNode];

        bt.preOrder(outputArray);

        expect(outputArray).toStrictEqual(expectedArray);
    }),

    it('Can successfully return a collection from an inorder traversal', () =>  {
        let kNode = new BTNode('k', null, null);
        let nNode = new BTNode('n', null, null);
        let ashNode = new BTNode('ash', null, null);
        let hvNode = new BTNode('hv', null, null);
        let plNode = new BTNode("pl", kNode, nNode);
        let avrNode = new BTNode('avr', ashNode, hvNode);
        const billakantiRoot = new BTNode('kmr', avrNode, plNode);
        const bt = new BinaryTree(billakantiRoot);
        var outputArray = [];
        var expectedArray = [ashNode, avrNode, hvNode, billakantiRoot, kNode, plNode, nNode];

        bt.inOrder(outputArray);

        expect(outputArray).toStrictEqual(expectedArray);
    }),

    it('Can successfully return a collection from a postorder traversal', () =>  {
        let kNode = new BTNode('k', null, null);
        let nNode = new BTNode('n', null, null);
        let ashNode = new BTNode('ash', null, null);
        let hvNode = new BTNode('hv', null, null);
        let plNode = new BTNode("pl", kNode, nNode);
        let avrNode = new BTNode('avr', ashNode, hvNode);
        const billakantiRoot = new BTNode('kmr', avrNode, plNode);
        const bt = new BinaryTree(billakantiRoot);
        var outputArray = [];
        var expectedArray = [ashNode, hvNode, avrNode, kNode, nNode, plNode, billakantiRoot];

        bt.postOrder(outputArray);

        expect(outputArray).toStrictEqual(expectedArray);
    }),

    it('Can find max value in empty tree', () => {
        let bt = new BinaryTree(null);
        const maxValue = bt.findMaximumValue();
        expect(maxValue).toBe(-100);
    }),

    it('Can find max value in single node tree', () => {
        let childlessRoot = new BTNode(7, null, null);
        let bt = new BinaryTree(childlessRoot);
        const maxValue = bt.findMaximumValue();
        expect(maxValue).toBe(7);
    }),

    it('Can find max value in simple tree', () => {
        const node4 = new BTNode(4, null, null);
        const node9 = new BTNode(9, node4, null);
        const node5a = new BTNode(5, null, node9);
        const node11 = new BTNode(11, null, null);
        const node5b = new BTNode(5, null, null);
        const node6 = new BTNode(6, node5b, node11);
        const node2 = new BTNode(2, null, null);
        const node7 = new BTNode(7, node2, node6);

        let root = new BTNode(2, node7, node5a);

        const bt = new BinaryTree(root);

        const maxValue = bt.findMaximumValue();
        
        expect(maxValue).toBe(11);
    })
});
