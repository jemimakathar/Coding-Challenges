"use strict";
// Input: 5
// Output:
// 1
// 22
// 333
// 4444
// 55555
Object.defineProperty(exports, "__esModule", { value: true });
function printRightAngledTriangle(rows) {
    for (var i = 1; i <= rows; i++) {
        var number = '';
        for (var j = 1; j <= i; j++) {
            number += " ".concat(i);
        }
        console.log(number.trim());
    }
}
var numberOfRows = 5;
printRightAngledTriangle(numberOfRows);
console.log("------------------------------------");
// 1
// 2 3
// 4 5 6
// 7 8 9 10
function printRightAngledTriangles(rows) {
    var num = 1;
    for (var i = 1; i <= rows; i++) {
        var number = '';
        for (var j = 1; j <= i; j++) {
            number += " ".concat(num);
            num++;
        }
        console.log(number.trim());
    }
}
var numberOfRow = 5;
printRightAngledTriangles(numberOfRow);
console.log("--------------------------------");
//      1
//     2 2
//    3 3 3
//   4 4 4 4
//  5 5 5 5 5
function printPyramidPattern(rows) {
    for (var i = 1; i <= rows; i++) {
        var line = ' '.repeat(rows - i);
        for (var j = 1; j <= i; j++) {
            line += "".concat(i, " ");
        }
        console.log(line.trim());
    }
}
printPyramidPattern(5);
