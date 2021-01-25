const Graph = require('./graph').Graph;
const Vertex = require('./graph').Vertex;

describe('Graphs', () => {
    it('Node can be successfully added to the graph', () => {
        let graph = new Graph()
        let vertex = new Vertex(5)

        graph.addVertex(vertex)
        
        expect(graph.adjacencyList.keys()).toContain(vertex)
    }),

    it('An edge can be successfully added to the graph', () => {
        let graph = new Graph()
        let vertexA = new Vertex(5)
        let vertexF = new Vertex(6)

        graph.addVertex(vertexA)
        graph.addVertex(vertexF)
        
        let edgeWeight = 9
        graph.addDirectEdge(vertexA, vertexF, edgeWeight)

        expect(graph.getNeighbors(vertexA)[0].vertex).toBe(vertexF)
        expect(graph.getNeighbors(vertexA)[0].weight).toBe(edgeWeight)
    }),

    it('A collection of all nodes can be properly retrieved from the graph', () => {
        let graph = new Graph()
        let vertexA = new Vertex(5)
        let vertexB = new Vertex(6)
        let vertexC = new Vertex(19)
        
        expect(graph.adjacencyList.keys).not.toBeNull()

    }),

    it('All appropriate neighbors can be retrieved from the graph', () => {
        let graph = new Graph()
        let vertexA = new Vertex(7)
        let vertexF = new Vertex(41)
        let vertexH = new Vertex(9)

        expect(graph.getNeighbors(vertexA)).toContain(vertexF)
        expect(graph.getNeighbors(vertexA)).toContain(vertexH)
    }),

    it('Neighbors are returned with the weight between nodes included', () => {
        let graph = new Graph()
        let vertexA = new Vertex(9)
        let vertexC = new Vertex(1)

        const edgeWeight = 1
        graph.addDirectEdge(vertexC, vertexA, edgeWeight)
        
        expect(graph.getNeighbors(vertexC).vertex).toBe(vertexA)
        expect(graph.getNeighbors(vertexC).weight).toBe(edgeWeight)
    }),

    it('The proper size is returned, representing the number of nodes in the graph', () => {
        let graph = new Graph()
        let vertex = new Vertex(5)
        let vertexH = new Vertex(11)

        graph.addVertex(vertex)
        graph.addVertex(vertexH)
        
        expect(graph.size).toStrictEqual(2)
    }),

    it('A graph with only one node and edge can be properly returned', () => {
        let graph = new Graph()
        let vertex = new Vertex(41)
        let vertexH = new Vertex(11)

        graph.addDirectEdge(vertex, vertexH, 9)

        expect(graph.adjacencyList.keys.size).toBe(2)
        expect(graph.getNeighbors(vertex).length).toBe(1)
    }),

    it('An empty graph properly returns null', () => {
        let graph = new Graph()

        expect(graph.adjacencyList.keys).toBeNull();
    })
})