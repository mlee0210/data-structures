var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = 1; // fix me
  set.contents = []; 
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // If the set does not include the item, add it.
  if(!this.contains(item)){
    this.contents.push(item);
  }

};

setPrototype.contains = function(item) {
  // If the set contains the item, return true
  if(this.contents.includes(item)){
    return true;
  } else {
  // Otherwise, return false.
    return false; 
  }
};

setPrototype.remove = function(item) {
  // If the set includes the item, remove it.
  if(this.contains(item)){
    this.contents.splice(this.contents.indexOf(item), 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
