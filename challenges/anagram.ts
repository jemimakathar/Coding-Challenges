//string
function Anagram(a:string,b:string):string
{
    var n=a.length;
    var m=b.length;
    if(n!=m)
    {
        return "not an anagram";
    }
    var x=a.split("").sort().join();
    var y=b.split("").sort().join();
    if(x==y)
    {
        return "anagram";
    }
    else{
        return "not an Anagram";
    }
}
console.log(Anagram("12345","23415"));


//Anagram number
function Anagram1(a1:number,b1:number):string
{
    var n1=a1.toString();
    var m1=b1.toString();
    var x1=n1.split("").sort().join();
    var y1=m1.split("").sort().join();
    if(x1==y1)
    {
        return "anagram";
    }
    else{
        return "not an Anagram";
    }
}
console.log(Anagram1(23413,1234));