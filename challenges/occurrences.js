//Input a string of alphabets. Find out the number of occurrence of all alphabets in that string. 
//Find out the alphabet with maximum occurrence.
var occurrence = function (a) {
    var count = {}; //key value pair ku const count={}; kuduthurukom
    for (var i = 0; i < a.length; i++) {
        var char = a[i].toLowerCase();
        if (char >= 'a' && char <= 'z') {
            count[char] = (count[char] || 0) + 1;
        }
    }
    console.log(count);
    var maxChar = '';
    var maxCount = 0;
    for (var char in count) {
        if (count[char] > maxCount) {
            maxCount = count[char];
            maxChar = char;
        }
    }
    return maxCount > 0 ? "Character:'".concat(maxChar, ",Count:").concat(maxCount) : 'Not found';
};
console.log(occurrence("hello"));
