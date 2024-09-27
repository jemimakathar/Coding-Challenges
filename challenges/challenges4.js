// Function to swap two numbers
function swap(x, y) {
    x = x + y;
    y = x - y;
    x = x - y;
    console.log("Swapped values: x = ".concat(x, ", y = ").concat(y));
}
// Call the swap function
swap(2, 4);
// Use CommonJS syntax to import readline
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Prompt user for input
rl.question('Please enter something: ', function (input) {
    console.log("You entered: ".concat(input)); // Use backticks for string interpolation
    rl.close();
});
