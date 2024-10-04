// Input: 5
// Output:
// 1
// 22
// 333
// 4444
// 55555


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
