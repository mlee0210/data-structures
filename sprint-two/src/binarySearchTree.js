var BinarySearchTree = function(value) {

  var binaryTree = Object.create(binaryTreeMethods);
  
  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;
  
  return binaryTree;
};

var isGreaterThan = function(newNode, parentNode) {
  var checkForEquality;
  var val1 = newNode.value || newNode;
  var val2 = parentNode.value;
  if(val1 > val2) {
    if(parentNode.right){
      return isGreaterThan(newNode, parentNode.right);
    } else {
      parentNode.right = newNode; 
    }
  } else if(val1 < val2) {
    if(parentNode.left) {
      return isGreaterThan(newNode, parentNode.left);
    } else {
      parentNode.left = newNode;
    }
  } else if (val1 === val2) {
    return true;
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
    if(isGreaterThan(value, this) === true){
      return true;
    } else {
      return false;
    }
  },

  'depthFirstLog' : function(fn) {
    
    var node = this.value;

    fn(node);

    if(this.left){
      this.left.depthFirstLog(fn);
    }

    if(this.right){
      this.right.depthFirstLog(fn);
    }
  }
}