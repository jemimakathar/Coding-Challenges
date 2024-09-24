//Create a program that takes an array of numbers and prints the square of each number using a loop.
function arrayManipulation(array:number[]):number[]
{
    var square:number[]=[];
    for(var i of array)
    {
        square.push(i*i);
    
    } return (square);

}
console.log(arrayManipulation([2,4,6,7]));
