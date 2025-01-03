// const array1 = [1, 3, 5, 7];
// const array2 = [2, 3, 6, 8, 9];
// const result = mergeArrays(array1, array2);
// Expected Output:
// [1, 2, 3, 5, 6, 7, 8, 9]
function mergeArray(input1, input2) {
    var input = input1.concat(input2).sort();
    var merge = [];
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var data = input_1[_i];
        if (input.indexOf(data) === input.lastIndexOf(data)) {
            merge.push(data);
        }
    }
    return merge;
}
console.log(mergeArray([1, 3, 5, 7], [2, 3, 6, 8, 9]));
