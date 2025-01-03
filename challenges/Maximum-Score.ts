// Input: s = "011101"
// Output: 5 
// Explanation: 
// All possible ways of splitting s into two non-empty substrings are:
// left = "0" and right = "11101", score = 1 + 4 = 5 
// left = "01" and right = "1101", score = 1 + 3 = 4 
// left = "011" and right = "101", score = 1 + 2 = 3 
// left = "0111" and right = "01", score = 1 + 1 = 2 
// left = "01110" and right = "1", score = 2 + 1 = 3
// Example 2:
// Input: s = "00111"
// Output: 5
// Explanation: When left = "00" and right = "111", we get the maximum score = 2 + 3 = 5
// Example 3:
// Input: s = "1111"
// Output: 3


function maxString(input:string):number
{
    let rightCount=0;
    let leftCount=0;
    var maxCount=0;
    
    for(var char of input)
    {
        if(char=="1")
        {
            rightCount++;
        }
    }
    
    for(var i=0;i<input.length-1;i++)
    {
        if(input[i]==="0")
        {
            leftCount++;
        }
        else{
            rightCount--;
        }
        var score=leftCount+rightCount;
        maxCount =Math.max(maxCount,score);
    }
    return maxCount;
}
console.log( maxString("1111"));
