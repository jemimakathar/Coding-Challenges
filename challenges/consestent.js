// 1684. Count the Number of Consistent Strings
// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.
// Return the number of consistent strings in the array words.
// Example 1:
// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
// Example 2:
// Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
// Output: 7
// Explanation: All strings are consistent.
// Example 3:
// Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
// Output: 4
// Explanation: Strings "cc", "acd", "ac", and "d" are consistent.
function countConsistentStrings(words, allow) {
    var count = 0;
    for (var i = 0; i < words.length; i++) {
        var consist = true;
        for (var j = 0; j < words[i].length; j++) {
            if (!allow.includes(words[i][j])) {
                var consist = false;
                break;
            }
        }
        if (consist) {
            count++;
        }
    }
    return count;
}
var result = countConsistentStrings(["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"], "cad");
console.log(result); // Output: 4
