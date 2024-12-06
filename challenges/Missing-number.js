// Given an array of numbers from 1 to N, one number is missing. Write a function to find the missing number.
//  input = [1, 2, 4,6];
// output = [1,2,3,4,5,6]
var getPrompt = require('prompt-sync')();
var getArray = getPrompt("Enter the Array Elements: ");
var toNumberArray = getArray.split(' ').map(Number).sort();
function toFindMissingElement(toNumberArray) {
    var start = toNumberArray[0];
    var end = toNumberArray[toNumberArray.length - 1];
    var emparr = [];
    for (var i = start; i <= end; i++) {
        emparr.push(i);
    }
    return emparr;
}
var completeArray = toFindMissingElement(toNumberArray);
console.log("Complete Array:", completeArray);
