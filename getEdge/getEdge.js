'use strict';

let Graph = require('../graphs/graph');

function getEdge(graph, array) {
    for (let i = 0; i < array.length; i++) {
        let cityList = array[i];
        let cityListLength = cityList.length;
        let neighbors = graph.getNeighbors(array[i][0]);
        neighbors.forEach(neighbor => {
            if (neighbor.vertex.value === array[i][0].toString()) {
                console.log(array[i][0].toString());
            }
        });
    }
}




let cityGraph = new Graph();
const pandora = cityGraph.addVertex('pandora');
const arendelle = cityGraph.addVertex('arendelle');
const metroville = cityGraph.addVertex('metroville');
const monstropolis = cityGraph.addVertex('monstropolis');
const narnia = cityGraph.addVertex('narnia');
const naboo = cityGraph.addVertex('naboo');
cityGraph.addEdge(pandora, arendelle, 150);
cityGraph.addEdge(arendelle, pandora, 150);
cityGraph.addEdge(pandora, metroville, 82);
cityGraph.addEdge(metroville, pandora, 82);
cityGraph.addEdge(arendelle, metroville, 99);
cityGraph.addEdge(metroville, arendelle, 99);
cityGraph.addEdge(arendelle, monstropolis, 42);
cityGraph.addEdge(monstropolis, arendelle, 42);
cityGraph.addEdge(metroville, monstropolis, 105);
cityGraph.addEdge(monstropolis, metroville, 105);
cityGraph.addEdge(metroville, naboo, 26);
cityGraph.addEdge(naboo, metroville, 26);
cityGraph.addEdge(narnia, metroville, 37);
cityGraph.addEdge(metroville, narnia, 37);
cityGraph.addEdge(naboo, monstropolis, 73);
cityGraph.addEdge(monstropolis, naboo, 73);
cityGraph.addEdge(naboo, narnia, 250);
cityGraph.addEdge(narnia, naboo, 250);

let startCitySearch = cityGraph.getNeighbors(pandora);
console.log(startCitySearch[0].vertex.value);
console.log(startCitySearch[0].weight);
console.log(startCitySearch.length);