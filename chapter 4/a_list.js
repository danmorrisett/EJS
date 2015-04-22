var arrayToList = function (array) {
  var list = null;
  for (var index = array.length -1; index >= 0; index--) {
    list = {value: array[index], rest: list};
  }
  return list;
};

console.log(arrayToList([1,2,3,4]));
