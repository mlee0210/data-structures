

// Instantiate a new graph
var Graph = function() {
  
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = {node};
  this[node].edges = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for(var key in this) {
    if(parseInt(key) === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // Find keys in graph
  var graphNodes = Object.keys(this);

  // Loop over the keys
  for(var k = 0; k < graphNodes.length; k++) {
    
    // If key is equal to node
    if(parseInt(graphNodes[k]) === node) {
    
      // Delete node from graph
      delete this[node];
    } else {
      // Otherwise call removeEdges to remove edges
      this.removeEdge(parseInt(graphNodes[k]), node);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // Find keys in graph 
  var graphNodes = Object.keys(this);

  // Iterate over keys
  for(var k = 0; k < graphNodes.length; k++){

    // If object.node equals fromNode:
    if(this[parseInt(graphNodes[k])].node === fromNode){

      // Iterate over all of object's edges:
      for(var e = 0; e < this[parseInt(graphNodes[k])].edges.length; e++){
         
        // If object node contains an edge to toNode
        if(this[parseInt(graphNodes[k])].edges[e] === toNode){
          // Return true
          return true;
        }
      }
    }
  }
  // If not, return false
  return false;
};


// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // Create a property on fromNode with the value of toNode
  this[fromNode].edges.push(toNode);

  // Create a property on toNode with the value of fromNode
  this[toNode].edges.push(fromNode);
  
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  // Store edges within fromNode in a variable 
  var edgeListFrom = this[fromNode].edges;

  // Store edges within toNode in a variable 
  var edgeListTo = this[toNode].edges;

  // Loop over the edges of fromNode
    for(var i = 0; i < edgeListFrom.length; i++) {  
    
    // If toNode is equal to current edge, delete edge
      if(toNode === edgeListFrom[i]) {
        edgeListFrom.splice(i, 1);
      }
    }
    for(var i = 0; i < edgeListTo.length; i++) {  
    
    // If fromNode is equal to current edge, delete edge
      if(fromNode === edgeListTo[i]) {
        edgeListTo.splice(i, 1);
      }
    }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // Find keys in graph 
  var graphNodes = Object.keys(this);
   
  // Loop over keys
  for(var i = 0; i < graphNodes.length; i++){

    // Call function on each node
    cb(parseInt(graphNodes[i]));
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */