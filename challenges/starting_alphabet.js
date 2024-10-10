// Write a function that takes an array of strings as argument. Group those strings by their first letter.
//  Return an object that contains properties with keys representing first letters.
//   The values should be arrays of strings containing only the corresponding strings.
//    For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
//    { a: ['Alf', 'Alice'], b: ['Ben']}
function grouping_Alphabet(strings) {
    var grouped = {};
    for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
        var str = strings_1[_i];
        var firstLetter = str.charAt(0).toLowerCase();
        if (!grouped[firstLetter]) {
            grouped[firstLetter] = [];
        }
        grouped[firstLetter].push(str);
    }
    // Sort each group's array
    for (var k in grouped) {
        grouped[k].sort();
    }
    // Create a new object with sorted keys
    var sortedGrouped = {};
    var sortedKeys = Object.keys(grouped).sort(); //Object.keys() is a built-in JavaScript method that takes an object as an argument and returns an array containing all the keys of that object.
    for (var _a = 0, sortedKeys_1 = sortedKeys; _a < sortedKeys_1.length; _a++) {
        var s = sortedKeys_1[_a];
        sortedGrouped[s] = grouped[s]; //value
    }
    return sortedGrouped;
}
console.log(grouping_Alphabet(["jemima", "jemi", "nithya", "nithu", "kaviya", "kavi"]));
