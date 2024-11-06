// 14. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

import { log } from "util";



 
// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

function Longest_Common_Prefix(strs: string[]): string {
    if (strs.length === 0) return "";
    
    // Find the minimum length of strings in the array
    let minLen = Math.min(...strs.map(str => str.length));
    let prefix = "";
    for (let i = 0; i < minLen; i++) {//outer loop contains 1st element in array
        const char = strs[0][i];//n
        
        for (let j = 1; j < strs.length; j++) {//j=1 -- nith
           if (strs[j][i] !== char) {//--> j=nith ,i=n (0th index) !== n
                 return prefix;
             }
         }
         prefix += char;//prefix=n
    } 
    return prefix;
}

console.log(Longest_Common_Prefix(["flight", "flower", "floew"])); 
console.log(Longest_Common_Prefix(["nithya", "nith", "nit"]));    

