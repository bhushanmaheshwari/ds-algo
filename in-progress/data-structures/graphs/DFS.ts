// DFS using recursion

import { createGraph, printGraph } from "./graph-al";

const al = createGraph();

function dfs(start, search, visited = new Set()) {
    visited.add(start);
    const destinations = al.get(start);
    for (let d of destinations) {
        if (d === search) {
            console.log('Found ' + search);
            return;
        }
        if (!visited.has(d)) {
            console.log(d);
            dfs(d, search, visited);
        }
    }
}

dfs('JFK', 'BKK');

