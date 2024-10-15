// Hint
// Given a string s, return the longest 
// palindromic substring in s.

import { log } from "console";

 

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:
// Input: s = "cbbd"
// Output: "bb"


function longest_substring(string:string):any
{
    var longestString="";
    for(var j=0;j<string.length;j++)
    {
       for(var k=j+1;k<=string.length;k++) 
       {
          var substring=string.substring(j,k);
          console.log(substring);
          
          var reverse="";
            for(var i=substring.length-1;i>=0;i--)
            {
               reverse=reverse + substring.charAt(i);//bab
            }
               if(reverse===substring)//radar
                {
                    if(longestString.length<reverse.length)
                    {
                        longestString=reverse;//radar
                    }
                }
        }
    }
     return longestString.length > 0 ? longestString :"no palindrome";
}
console.log(longest_substring("babdradaracecar"));




// function isPalindrome(str) {
//     return str === str.split('').reverse().join('');
// }
