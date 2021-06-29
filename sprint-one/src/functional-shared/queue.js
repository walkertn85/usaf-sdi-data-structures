var Queue = function() {
    var someInstance = {}; 

    someInstance._storage = {};
    someInstance._start = 0; 
    someInstance._end = 0; 
  
    _.extend(someInstance, queueMethods)
    someInstance.enqueue = queueMethods.enqueue; 
    someInstance.dequeue = queueMethods.dequeue; 
    someInstance.size = queueMethods.size;
     
    return someInstance;
};

var queueMethods = {};


queueMethods.enqueue = function(value) {
  this._storage[this._end++] = value; 
};

queueMethods.dequeue = function() {
  var result = this._storage[this._start];
  if(this.size() ){
    delete this.delete._storage[this._start]; 
    this._start++;
  }
  return result;
};

queueMethods.size = function() {
  return this._end-this._start;
};