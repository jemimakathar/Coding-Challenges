function swap(a:number,b:number):number[]
{
     a=a+b;
     b=a-b;
     a=a-b;
     return [a,b];
}
console.log(swap(2,4));
