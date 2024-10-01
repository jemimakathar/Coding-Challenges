//output:d,do,dog,o,g,g
function sub_String(str) {
    var subset = [];
    for (var i = 0; i <= str.length; i++) {
        for (var j = i + 1; j <= str.length; j++) {
            subset.push(str.substring(i, j));
        }
    }
    return subset;
}
console.log(sub_String("jemi"));
