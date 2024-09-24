//Write a function that takes a string (a) and a number (n) as argument. Return the nth character of 'a'.

function getNthCharacter(a, n) {
    if (n < 0 || n >= a.length) {
        return undefined; 
    }
    return a[n];
}
var str = "Hello, World!";
var index = 7;
var result = getNthCharacter(str, index);
console.log(result);
var getNthCharacte;
getNthCharacte = function (a, n) {
    if (n < 0 || n >= a.length) {
        return undefined; 
    }
    return a[n]; 
};
var st = "Hello, World!";
var inde = 7;
var resul = getNthCharacte(st, inde);
console.log(resul);
