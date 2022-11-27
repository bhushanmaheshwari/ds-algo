// SOURCE : https://youtu.be/cWNEl4HE2OE

export {};

const al = new Map();

const airports = 'PHX BKK OKC JFK MEX EZE HEL LAX LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];

// graph data structure and apis
function addNode(airport) {
    al.set(airport, []);
}

function addEdge(origin, destination) {
    al.get(origin).push(destination);
    al.get(destination).push(origin);
}

// create graph from airport and routes
export function createGraph() : any {
    airports.forEach(addNode);
    routes.forEach(route => addEdge(route[0], route[1]));    
    console.log(al);
    return al;
}


export function printGraph(graph) {
    console.log(graph.forEach(function (value, key) { console.log(key + ' => ' + value) }))
}

