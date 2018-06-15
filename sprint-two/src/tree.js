var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};



var treeMethods = {};

treeMethods.addChild = function(value) {
  //create new tree and declare a variable to store the value
  var newNode = new Tree(value);

  //push the new tree to the last child's children array
    this.children.push(newNode);
};

treeMethods.contains = function(target) {
  
  // Create a function that takes in a node and returns child nodes
  function returnChildren(node){
      return node.children //array
  
  }

  // Base Case: check current object value. If target matches value, return true
  if(this.value === target){
    return true; 
  } 

  // Resursive case: 
  // If current tree node contains children
  if(this.children.length > 0){

    // Create a variable which will be an indicator if child contains target:
    var containsTarget = false; 

    // Call returnChildren on current node to return children
    var allChildren = returnChildren(this);

    // Call contains on all children, and set variable to true if it finds a child with matching target:
    allChildren.forEach(function(child){
      if(child.contains(target)){
        containsTarget = true;
      }
    });
  } 
  
  // Return varible to indicate if target was found at any node: 
  return containsTarget; 
};
  


/*
 * Complexity: What is the time complexity of the above functions?
 */