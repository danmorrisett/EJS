1.

var output = "";
  while(output.length < 7){
    output += '#';
  console.log(output);
  }

  for (var i = "#"; i.length < 8)

2.

for (var x = 1; x <= 100; x++) {
  var output = "";
  if (x % 3 === 0)
    output += "Fizz";
  if (x % 5 === 0)
    output += "Buzz";
  if (x % 15 === 0)
    output += "FizzBuzz";
  console.log(output || x);
}

3.

var size = 8, chessBoard = '';

for (var row = 1; row <= size; row++) {
  for (var space = 1; space <=size; space ++ ){
    if (row % 2 === 0)
      if (space % 2 === 0) {
        chessBoard += ' ';
      }
      else {
        chessBoard += '#';
      }
    else {
      if (space % 2 === 0) {
        chessBoard += '#';
      }
      else {
        chessBoard += ' ';
      }
    }
  }
  chessBoard += '\n';
}

console.log(chessBoard);
