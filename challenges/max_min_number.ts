function minmaxNumber(a:number[]):number[]
{
    var x=a.sort((a,b)=>a-b);
    return [x[0],x[a.length-1]];
    
}
console.log(minmaxNumber([65,43,108,6]));
