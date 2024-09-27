"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function swap(x, y) {
    x = x + y;
    y = x - y;
    x = x - y;
    console.log("Swapped values: x =", x, ", y =", y);
}
rl.question("Enter the first number (x): ", function (inputX) {
    var x = parseInt(inputX, 10);
    rl.question("Enter the second number (y): ", function (inputY) {
        var y = parseInt(inputY, 10);
        if (!isNaN(x) && !isNaN(y)) {
            swap(x, y);
        }
        else {
            console.log("Please enter valid numbers.");
        }
        rl.close();
    });
});
