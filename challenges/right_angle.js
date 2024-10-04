// Input: 5
// Output:
// *
// **
// ***
// ****
// *****
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
