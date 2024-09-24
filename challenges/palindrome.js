var repeatAsterisk = function (length) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result.push("*");
    }
    return result.join("");
};
var palindrome;
palindrome = function (n1) {
    var words = n1.split(" ");
    var result = words.map(function (word) {
        var rev = word.split("").reverse().join("");
        return rev === word && word.length > 1 ? repeatAsterisk(word.length) : word;
    });
    return result.join(" ");
};
console.log(palindrome("bob has a radar plane"));
