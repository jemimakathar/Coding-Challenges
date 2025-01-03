// const array1 = [1, 3, 5, 7];
// const array2 = [2, 3, 6, 8, 9];
// const result = mergeArrays(array1, array2);
// Expected Output:
// [1, 2, 3, 5, 6, 7, 8, 9]


function mergeArray(input1:number[],input2:number[]):any
{
    var input:number[]=input1.concat(input2).sort()
    var merge:number[]=[];
    for(var data of input)
    {
        if(input.indexOf(data) === input.lastIndexOf(data)||merge.indexOf(data) === -1)
        {
            merge.push(data)
        }
    }
    return merge
}
console.log(mergeArray([1, 3, 5, 7],[2, 3, 6, 8, 9]));
