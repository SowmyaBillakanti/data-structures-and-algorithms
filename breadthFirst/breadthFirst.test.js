'use Strict';

const BreadthFirstSearch = require('./breadthFirst');

let graph = new BreadthFirstSearch();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('A', 'E');
graph.addEdge('C', 'F');


describe('tests breadfirst traversal', () => {
  test('BreadthFirstSearch returns the full set of values', () => {
    expect(graph.breadthFirst('A')).toStrictEqual(['A', 'B', 'C', 'D', 'E', 'F']);
  });
});