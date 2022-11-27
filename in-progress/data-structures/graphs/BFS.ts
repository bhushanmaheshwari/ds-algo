// Use of BFS
// 1. to find the shortest route

import { createGraph, printGraph } from "./graph-al";
import { createGraph_AM } from "./graph-am";

const al = createGraph();
printGraph(al);

function bfs_al(start, search) {
  const queue = [start];
  const visited = new Set();
  while (queue.length > 0) {
    const airport = queue.shift();
    const destinations = al.get(airport);
    for (const d of destinations) {
      if (!visited.has(d)) {
        console.log(d);
        visited.add(d);
        queue.push(d);
        if (d === search) {
          console.log("Found it");
          ``;
        }
      }   
    }
  }
}

bfs_al("PHX", "BKK");

const am = createGraph_AM();
function bfs_am() {}
