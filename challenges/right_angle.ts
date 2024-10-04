// Input: 5
// Output:
// 1
// 22
// 333
// 4444
// 55555

import { log } from "console";

function printRightAngledTriangle(rows: number):void{
    for (let i = 1; i <= rows; i++) {
        let number = '';
        for (let j = 1; j <= i; j++) {
            number += ` ${i}`;
        }
        console.log(number.trim());
    }
}
const numberOfRows = 5;
printRightAngledTriangle(numberOfRows);
console.log("------------------------------------")



// 1
// 2 3
// 4 5 6
// 7 8 9 10

function printRightAngledTriangles(rows: number):void{
    let num=1;
    for (let i = 1; i <= rows; i++) {
       
        let number = '';
        for (let j = 1; j <= i;j++) {
            number += ` ${num}`;
            num++; 
        }
        console.log(number.trim());
    }
}
const numberOfRow = 5;
printRightAngledTriangles(numberOfRow);
console.log("--------------------------------")
