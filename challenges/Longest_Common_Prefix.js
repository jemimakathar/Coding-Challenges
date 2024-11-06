"use strict";
// 14. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
Object.defineProperty(exports, "__esModule", { value: true });
// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
function Longest_Common_Prefix(strs) {
    if (strs.length === 0)
        return "";
    // Find the minimum length of strings in the array
    var minLen = Math.min.apply(Math, strs.map(function (str) { return str.length; }));
    var prefix = "";
    for (var i = 0; i < minLen; i++) {
        var char = strs[0][i];
        for (var j = 1; j < strs.length; j++) {
            if (strs[j][i] !== char) {
                return prefix;
            }
        }
        prefix += char;
    }
    return prefix;
}
console.log(Longest_Common_Prefix(["flight", "flower", "floew"])); // Output: "fl"
console.log(Longest_Common_Prefix(["nithya", "nith", "nit"])); // Output: "ni"
