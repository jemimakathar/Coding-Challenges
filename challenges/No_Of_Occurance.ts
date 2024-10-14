// You are a given with an array ar[] and number n. You have to print the number of occurrences of n.

// Example 1:
// Input:
// ar = [1,2,1,2,3,4,1];
// n = 1;
// Output :
// 3

// Example 2:
// Input:
// ar = [2,2,5,5,3]
// n = 3;
// Output :
// 1


function No_Of_Occurance(Input:number[],Occurance:number):number
{
    var count=0;
    for(var i=0;i<Input.length;i++)
    {
        var array=Input[i];
        if(array==Occurance)
        {
            count++;
        }
    }
    return count;
    

}
console.log(No_Of_Occurance([1,2,1,2,3,4,1,1],1));
