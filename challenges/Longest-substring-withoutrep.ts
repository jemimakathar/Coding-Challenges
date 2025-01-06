// Write a function longestSubstringWithoutRepeatingCharacters
// that takes a string as input and returns the longest substring without repeating characters.
// Example 1:
// Input: abcabcbb
// Output: abc
// Example 2:
// Input: dvdf
// Output: vdf

function longestSubstringWithoutRepeatingCharacters(str: string): string {
    let maxLength = 0;
    let longestSubstring = "";

    for (let i = 0; i < str.length; i++) 
    {
        let currentSubstring = "";

        for (let j = i; j < str.length; j++) 
        {
            const char = str[j];
            if (currentSubstring.indexOf(char) !== -1) 
            {
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

