// Write a function longestSubstringWithoutRepeatingCharacters
// that takes a string as input and returns the longest substring without repeating characters.
// Example 1:
// Input: abcabcbb
// Output: abc
// Example 2:
// Input: dvdf
// Output: vdf
function longestSubstringWithoutRepeatingCharacters(str) {
    var maxLength = 0;
    var longestSubstring = "";
    for (var i = 0; i < str.length; i++) {
        var currentSubstring = "";
        for (var j = i; j < str.length; j++) {
            var char = str[j];
            if (currentSubstring.indexOf(char) !== -1) {
                break;
            }
            currentSubstring += char;
            if (currentSubstring.length > maxLength) {
                maxLength = currentSubstring.length;
                longestSubstring = currentSubstring;
            }
        }
    }
    return longestSubstring;
}
console.log(longestSubstringWithoutRepeatingCharacters("abcabcbb"));
console.log(longestSubstringWithoutRepeatingCharacters("dvdf"));
