// Challenge 1
function addTwo(num) {
    return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
 console.log(addTwo(3));
 console.log(addTwo(10));

// Challenge 2
function addS(word) {
    return word + "s";
}

// uncomment these to check your work
console.log(addS('pizza'));
console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
    var arr = [];
    for(x of array) {
        arr.push(callback(x));
    }
return arr;
}
console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {
    for(x of array) {
        console.log(callback(x));
    }
}
console.log(forEach([1, 2, 3], addTwo));

// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
    var arr = [];
     array.forEach(x => { 
       arr.push(callback(x));
});
  return arr;
}
console.log(mapWith([1, 2, 3], addTwo));

//Extension 2

function reduce(array, callback, initialValue) {
    for(i of array) {
       initialValue =  callback(i, initialValue);
    }    
  return initialValue;
}
var nums = [4, 1, 3];
var add = function(a, b) { return a + b; }
console.log(reduce(nums, add, 0));   //-> 8
//Extension 3
function intersection(...arrays) {

    return arrays.reduce((acc, cv) => {
  
      acc.forEach((value, index) => {
  
          if (cv.indexOf(value) == -1) {
            acc.splice(index, 1);
          }
        }
      )
      return acc;
    });
  }
  console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(...arrays) {
    return arrays.reduce((acc, cv) => {
      cv.forEach((value) => {
        if (acc.indexOf(value) == -1) {
          acc.push(value);
        }
      })
      return acc;
    });
  }
  console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
  
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {

}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
    
}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
