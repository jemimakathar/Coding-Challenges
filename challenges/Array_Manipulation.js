//Create a program that takes an array of numbers and prints the square of each number using a loop.
function arrayManipulation(array) {
    var square = [];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var i = array_1[_i];
        square.push(i * i);
    }
    return (square);
}
console.log(arrayManipulation([2, 4, 6, 7]));
