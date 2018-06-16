

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, v);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
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


