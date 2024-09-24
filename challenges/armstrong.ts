// Write a program to check Armstrong and Perfect numbers using the function.
// Input any number: 371
// Expected Output :
//  The 371 is an Armstrong number.                                                 
//  The 371 is not a Perfect number. 


function armStrongNumber(a:any):any
{
    var i=a;
    var temp=a;
    var str=i.toString();
    var l =str.length;
    var result=0;
    while(temp > 0)
    {
        var d=temp%10;
        result=result+Math.pow(d,l);
        temp = Math.floor(temp / 10);
    }
    if(result==i)
    {
        return "Armstrong number";
    }

}
console.log(armStrongNumber(153));