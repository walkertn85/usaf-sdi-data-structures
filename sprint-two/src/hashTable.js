

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  //retrive bucket
  var bucket = this._storage.get(index);
  //if !exist, create it
  if(!bucket){
    bucket = []; 
    this._storage.set(index, bucket)
  }

  //iterate over the bucket
    //if key exist update it

  //if no was found  
     //insert new tuple
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


