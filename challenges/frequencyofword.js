// Input: "this is a test this is only a test"
// Output: {'this': 2, 'is': 2, 'a': 2, 'test': 2, 'only': 1}
function Frequency(a) {
    var keyvalue = {};
    var datas = a.split(" ");
    for (var _i = 0, datas_1 = datas; _i < datas_1.length; _i++) {
        var words = datas_1[_i];
        if (keyvalue[words]) {
            keyvalue[words]++;
        }
        else {
            keyvalue[words] = 1;
        }
    }
    return keyvalue;
}
var result = Frequency("This is a test this is only a test");
console.log(result);
