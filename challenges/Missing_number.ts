// Given an array of numbers from 1 to N, one number is missing. Write a function to find the missing number.
//  input = [1, 2, 4, 5, 6];
// output = 3



// const getPrompt=require('prompt-sync')();
// const getArray=getPrompt("Enter the Array Elements: ");

// const toNumberArray=getArray.split('').map(Number).sort();

function toFindMissingElement(toNumberArray:number[]):any {
    for (let i=0;i<toNumberArray.length-1;i++){
        if(toNumberArray[i+1]-toNumberArray[i]!==1){
            return toNumberArray[i]+1;
        }
    }
   
}

console.log(toFindMissingElement([1,2,4,5]));