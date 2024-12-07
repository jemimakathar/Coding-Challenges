// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
var getPrompts = require('prompt-sync')();
var getArrayno = getPrompts("Enter the numbers:");
var getTarget = getPrompts("Enter the target:");
var toNumberArrays = getArrayno.split(' ').map(Number);
var toTarget = Number(getTarget); //The map() function is designed to operate on arrays, not on strings or individual values.
function Twosum(toNumberArrays, target) {
    for (var i = 0; i < toNumberArrays.length; i++) {
        for (var j = i + 1; j < toNumberArrays.length; j++) {
            if (toNumberArrays[i] + toNumberArrays[j] == target) {
                return [i, j];
            }
        }
    }
    return "No target is Matched";
}
var result = Twosum(toNumberArrays, toTarget);
console.log(result);
