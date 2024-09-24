//Implement a function that receives a string, and lets you extend it with repeated calls. When no argument is passed you should return a string consisting of space-separated words you've received earlier.
//Note: There will always be at least 1 string; all inputs will be non-empty.

function joinStrings(a:string):string
{
    var join="";
    for(var i=0;i<a.length;i++)
    {
    while(a[i]!=null)
    {
         join=join+a;
         return join;
    }
}
    return "enter the input";

}
console.log(joinStrings("jemima"),("is"),("a"),("good"),("girl..!"));



//The toString() method has been disabled for booleans, numbers, arrays and objects. Your goal is to retrive toString() for the following data types.

function toStrings(a:any):string
{
    a=a.toString();
    return a;
}
console.log(toStrings(23));
console.log(toStrings("jemi"));
console.log(toStrings(true));

//For the purposes of this Kata, you will only be expected to convert arrays with numbers only into strings.
// However, on top of fixing it, we would also like to improve it as well. We would like to keep the square brackets ([]) around the "stringified" array.

function Strings(n:number[]):string
{
    var n1 =n.toString();
    return`[${n1}]`;
}
console.log(Strings([3,67,90,87]));

