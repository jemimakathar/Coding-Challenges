//Print Alphabets From A to Z Using function
function printAlphabets(): void {
    for (let i = 97; i<= 122; i++) 
    { 
        console.log(String.fromCharCode(i)); 
    }
}
printAlphabets();
