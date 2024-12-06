// Given an array of numbers from 1 to N, one number is missing. Write a function to find the missing number.
//  input = [1, 2, 4,6];
// output = [1,2,3,4,5,6]

const getPrompt=require('prompt-sync')();
const getArray=getPrompt("Enter the Array Elements: ");
const toNumberArray=getArray.split(' ').map(Number).sort();

function toFindMissingElement(toNumberArray:number[]):any 
{
    var start = toNumberArray[0];
    var end = toNumberArray[toNumberArray.length-1];
    var emparr:number[]=[]
    for(var i=start;i<=end;i++)
    {
            emparr.push(i);
    }
    return emparr;    
}
const completeArray = toFindMissingElement(toNumberArray);
console.log("Complete Array:", completeArray);