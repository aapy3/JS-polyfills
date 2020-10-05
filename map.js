// define custom map()
if (!Array.prototype.map) {
 Array.prototype.map = function(callback) {
    let newArray = [];
     // iterate array elements
    for(let item of this) {
    // pass each element to callback and push response to new array
      newArray.push(callback(item));
    }
    // return final array
    return newArray;
  }
}
