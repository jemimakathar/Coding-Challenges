// Write a program that reads an array of ints and outputs the length of the
// longest sequence in strictly ascending order. Print the elements of longest
// ascending sequence in an array Elements of the sequence must go one after
// another. A single number is assumed to be an ordered sequence with the length= 1.

// Enter the number of elements 
// 5
// Enter 5 numbers in any order to find the longest ascending sequence

// 45
// 40
// 0
// 39
// 10
// The max value is : 2
// 2numbers in ascending order
// 0 39

function ascOrder(a:number[]):void{
    let maxlength=1;
    let currentlen=1;
    let startIndex=0;
    let maxstartIndex=0;
    for(let i=0;i<a.length;i++)
    {
        if(a[i]>a[i-1])
        {
            currentlen++;
        }
        else
        {
            if(currentlen>maxlength)
            {
                maxlength=currentlen;
                maxstartIndex=startIndex;
            }
            currentlen=1;
            startIndex=i;
        } 
    }
    if(currentlen>maxlength)
    {
        maxlength=currentlen;
        maxstartIndex=startIndex;
    }
    console.log(`The length of the longest ascending sequence is:${maxlength}`);
    const longestSequence=a.slice(maxstartIndex,maxstartIndex+maxlength);
    console.log("The longest ascending sequence is:",longestSequence.join(" "));
}
const a:number[]=[45,40,0,39,10];
ascOrder(a);



