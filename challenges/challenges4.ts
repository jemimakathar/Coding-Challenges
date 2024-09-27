import { log } from 'console';
import *as readline from 'readline';
const a = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
a.question("Enter a and b",(val:string)=>
{
    var x:number=Number(val.split(" ")[0]);
    var y:number=Number(val.split(" ")[1]);
    x=x+y;
    x=x-y;
    x=x-y;
    console.log("The values are",x,y);

});
