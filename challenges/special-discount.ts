// Example 1:
// Input: prices = [8,4,6,2,3]
// Output: [4,2,4,2,3]
// Explanation: 
// For item 0 with price[0]=8 you will receive a discount equivalent to prices[1]=4, therefore, the final price you will pay is 8 - 4 = 4.
// For item 1 with price[1]=4 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 4 - 2 = 2.
// For item 2 with price[2]=6 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 6 - 2 = 4.
// For items 3 and 4 you will not receive any discount at all.
// Example 2:
// Input: prices = [1,2,3,4,5]
// Output: [1,2,3,4,5]
// Explanation: In this case, for all items, you will not receive any discount at all.
// Example 3:
// Input: prices = [10,1,1,6]
// Output: [9,0,1,6]

function specialDiscount(input:number[]):number[]
{
    let output:number[]=[];
    for(var i=0;i<input.length;i++)
    {
        let discount = input[i];
        for(var j=i+1;j<input.length;j++)
        {
        if(input[j]<input[i])
        {
            discount=input[i]-input[j]
           break;
        }
        } 
        output.push(discount);
    }
    return output
}
console.log(specialDiscount([8,4,6,2,3]));