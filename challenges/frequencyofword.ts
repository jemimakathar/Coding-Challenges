// Input: "this is a test this is only a test"
// Output: {'this': 2, 'is': 2, 'a': 2, 'test': 2, 'only': 1}
function Frequency(a:string):any
{
    const keyvalue:{[key:string]:number}={};
    var datas = a.split(" ");
    for(var words of datas)
    {
        if(keyvalue[words])
        {
            keyvalue[words]++
        }
        else
        {
            keyvalue[words]=1
        }
    }
    return keyvalue;
}
const result = Frequency("this is a test this is only a test");
console.log(result);
