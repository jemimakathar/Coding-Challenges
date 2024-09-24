//Write a function that takes a string (a) and a number (n) as argument. Return the nth character of 'a'.


function getNthCharacter(a: string, n: number): string | undefined {
    if (n < 0 || n >= a.length) {
        return undefined; // Return undefined if n is out of bounds
    }
    return a[n]; // Return the nth character
}


const str = "Hello, World!";
const index = 7;
const result = getNthCharacter(str, index);
console.log(result); 




//other way

var getNthCharacte:(a:string,n:number)=> string | undefined;
getNthCharacte =function(a: string, n: number) {
    if (n < 0 || n >= a.length) {
        return undefined; // Return undefined if n is out of bounds
    }
    return a[n]; // Return the nth character
}

const st= "Hello, World!";
const inde = 7;
const resul= getNthCharacte(st, inde);
console.log(resul); 