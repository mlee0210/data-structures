var BinarySearchTree = function(value) {

  var binaryTree = Object.create(binaryTreeMethods);
  
  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;
  
  return binaryTree;
};

var isGreaterThan = function(newNode, parentNode) {
  var val1 = newNode.value;
  var val2 = parentNode.value;
  if(val1 > val2) {
    if(parentNode.right){
      isGreaterThan(newNode, parentNode.right);
    } else {
      parentNode.right = newNode; 
    }
  } else if(val1 < val2) {
    if(parentNode.left) {
      isGreaterThan(newNode, parentNode.left);
    } else {
      parentNode.left = newNode;
    }
  } 
  
};

var binaryTreeMethods = {
  'insert' : function(value) {
  
  //create a new node
  var treeNode = BinarySearchTree(value);
  
  //store object keys
  var treeKeys = this;

  //compare the value of new node to the value of first key
  isGreaterThan(treeNode, treeKeys);



  },

  'contains' : function(value) {
  },

  'depthFirstLog' : function(fn) {
  }
  
}