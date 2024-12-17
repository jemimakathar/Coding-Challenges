// Input: arr = [10,2,5,3]
// Output: true
// Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]

function Double(arr:number[]):boolean{
    for(var i=0;i<arr.length;i++)
    {
        for(var j=0;j<arr.length;j++)
        {
            if (arr[i] === 2 * arr[j] && i !== j)
            {
                return true
            }
        }
    }
    return false;
}
var res = Double([1,2,5,3])
console.log(res);
