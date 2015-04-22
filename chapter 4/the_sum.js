var range = function (up, down, back) {
  var result = [];
  if (arguments.length === 2 && up < down) {
    var step = 1
  }
  else if (arguments.length === 2 && up > down) {
    var step = -1
  }
  if (back > 0) {
    for (var i = up; i <= down; i+= back) {
      result.push(i);
    }
  }
  else {
    for (var i = up; i >= down; i+= back) {
      result.push(i);
    }
  }
  return result;
}

var sum = function (range) {
  var result = 0;
  for (var i = 0; i < range.length; i++) {
    result += range[i];
  }
  return result;
}

////////////////////

function sum(array) {
  var total = 0;

  for (i=0; i < array.length; i++) {
    total += array[i];
  }
  console.log(total);
}

console.log(sum([1,2,3,4,5,6,7,8,9,10]));
