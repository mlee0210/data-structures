var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // if the current head and tail is not set, create new object and set 
    // head and tail to new object:
    if(this.head === null && this.tail === null){
      this[value] = new Node(value);
      this.tail = this[value];
      this.head = this[value];
    } else {
      // Create a new node by calling 'Node' function, store in list
      this[value] = new Node(value);

      // Find current tail:
      var currentTail = this.tail;

      // On current tail, assign 'next' property to new node:
      currentTail.next = this[value];
      
      // Set the list's tail to the new variable
      this.tail = this[value];


    }

  };

  list.removeHead = function() {
    //create a variable that will store current head
    var removedObject = this.head;

    //create variable to store the current head's value:
    var removedValue = removedObject.value; 

    //find out what the next node the current head points to
    //make head equal next node
    this.head = this.head.next;

    //delete variable from list
    delete this[removedValue];

    //return variable  
    return removedObject.value;
  };

  list.contains = function(target) {
  //declare result variable which will be a boolean
  var result = false;
  
  //create an array of object keys or use for..in loop through list
  for (var key in list) {
    //check if element.value is equal to target
    if (parseInt(key) === target) {
      //if true, set result to equal true;
      result = true;
    }
  }
  //return result
  return result;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// var node1 = Node(12)