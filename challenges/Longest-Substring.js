"use strict";
// Hint
// Given a string s, return the longest 
// palindromic substring in s.
Object.defineProperty(exports, "__esModule", { value: true });
// Example 1:
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:
// Input: s = "cbbd"
// Output: "bb"
function longest_substring(a) {
    var rev = "";
    for (var i = a.length - 1; i >= 0; i--) {
        rev = rev + a.charAt(i);
    }
    if (rev === a) {
        return a;
    }
    else {
        return "no";
    }
}
console.log(longest_substring("mom"));
