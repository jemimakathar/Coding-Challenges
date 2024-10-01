//Write a JavaScript program that returns a subset of a string.
//Sample Data: dog
//Expected Output: ["d", "do", "dog", "o", "og", "g"]

function sub_String(str:string):string[]
{
    const subset:string[]=[];
    for(var i=0;i<=str.length;i++)
    {
        for(var j=i+1;j<=str.length;j++)
        {
            subset.push(str.substring(i,j));
        }
    }
    return subset;
}
console.log(sub_String("jemi"));