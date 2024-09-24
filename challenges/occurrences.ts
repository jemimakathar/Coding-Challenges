//Input a string of alphabets. Find out the number of occurrence of all alphabets in that string. 
//Find out the alphabet with maximum occurrence.
var occurrence = function(a: string): string | number
 {
    const count = {};//key value pair ku const count={}; kuduthurukom
    for (let i = 0; i < a.length; i++) {
        const char = a[i].toLowerCase(); 
        if (char >= 'a' && char <= 'z') {
            count[char] = (count[char] || 0) + 1; 
        }  
    } 
    console.log(count);
    let maxChar = '';
    let maxCount = 0;
    for (const char in count) {
        if (count[char] > maxCount) {
            maxCount = count[char];
            maxChar = char;
        }
    }
    return maxCount>0?`Character:'${maxChar},Count:${maxCount}`:'Not found';
}
console.log(occurrence("hello"));