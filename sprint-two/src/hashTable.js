

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];  
  var foundKey = false;

  // Access the container stored in ._storage with the key of our index value
  var currentContainer = this._storage.get(index);

  // If currentContainer is undefined, push an array containing the tuple into the current container, and set the the 
  if(currentContainer === undefined){
    currentContainer = [];
    currentContainer.push(tuple);
    this._storage.set(index, currentContainer);
  } else {
    // Otherwise, iterate over the container
    for(var i = 0; i < currentContainer.length; i++) {
      // Compare each tuple's key with k
      if(currentContainer[i][0] === k) {
        // If it matches, overwrite it and adjust foundKey to indicate a matching key was found
        currentContainer[i][1] = v;
        foundKey = true;
      }
    }
    // Otherwise, key does not exist, so push tuple to container and set it as the value of the index
    if(!foundKey) {
      currentContainer.push(tuple);
    }
    this._storage.set(index, currentContainer);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  // Access the container stored in ._storage with the key of our index value
  var currentContainer = this._storage.get(index);
  
  // If currentContainer is undefined, return undefined;
  if(currentContainer === undefined){
    return currentContainer;
  } else {
    //iterate over container
    for(var i = 0; i < currentContainer.length; i++) {
  
      //if key exists, return the value if value matches
      if(currentContainer[i][0] === k) {
        return currentContainer[i][1];
      } 
    }    
    return currentContainer;
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

/*

Creates a new hash table:
var ht = new HashTable()

ht._storage will contain the following functions:

1) each(callback)
  - For every element within the hash table, call 'callback' on that element

2) get(index)
  - Input: takes in an index
  - Output: returns the value within the hash table at that index

3) set(index, value)
  - Input: an index and a value
  - Outputs: nothing
  - Within the hash table, it stores the value at the given index within 
    the storage array.

*/


