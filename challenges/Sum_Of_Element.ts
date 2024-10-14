// You are a given with an array ar[] and number n.
// You have to print the sum of elements which are lesser than the n in the array.

// Example 1:
// Input:
// ar = [2,3,4,1,6,7];
// n = 4;
// Output :
// 6
// Explanation:
// 2,3,1 are the only elements which are less than 4. So 2 + 3 + 1 is 6.


function Sum_Of_Number(array:number[],target:number):number
{
    var sum=0;
    for(var i=0;i<array.length;i++)
    {
        var value=array[i];
        if(value<target)
        {
            sum=sum+value;
        }
    }
    return sum;
}
console.log(Sum_Of_Number([2,3,4,1,6,7],4));