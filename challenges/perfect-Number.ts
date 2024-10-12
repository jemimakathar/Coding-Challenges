// Write a function that takes an integer as input
// and returns True if the number is a perfect square, otherwise returns False.

// eg:1
//input:6
// output:true
// explanation:1+2+3=6

//eg:2
//input:28
//output:true
//explanation: 1+2+4+7+14=28


function perfectNumber(number:number):boolean
{
     var add=0;
    for(var i=0;i<number;i++)
    {
        if(number%i==0)
        {
            add=add+i;
        }
    }
    return add==number? true:false;
}
console.log(perfectNumber(6));
console.log(perfectNumber(28));
console.log(perfectNumber(128));
console.log(perfectNumber(24));
