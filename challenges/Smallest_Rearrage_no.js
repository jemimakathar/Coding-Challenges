// You are given an integer num. Rearrange the digits of num such that its value is minimized and it does not contain any leading zeros.
// Return the rearranged number with minimal value.
// Note that the sign of the number does not change after rearranging the digits.
// Example 1:
// Input: num = 310
// Output: 103
// Explanation: The possible arrangements for the digits of 310 are 013, 031, 103, 130, 301, 310. 
// The arrangement with the smallest value that does not contain any leading zeros is 103.
// Example 2:
// Input: num = -7605
// Output: -7650
// Explanation: Some possible arrangements for the digits of -7605 are -7650, -6705, -5076, -0567.
// The arrangement with the smallest value that does not contain any leading zeros is -7650.
function Smallest_Rearrange_no(num) {
    var s = num.toString().split('').sort().join('');
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var i = s_1[_i];
        if (i == '0') {
            var re = s[1] + s[0] + s.substring(2);
            return Number(re);
        }
        else if (i == '-') {
            var x = s.replace("-", "");
            var max = "-" + x.split('').reverse().join("");
            return Number(max);
        }
    }
    return Number(s);
}
console.log(Smallest_Rearrange_no(310));
console.log(Smallest_Rearrange_no(103));
console.log(Smallest_Rearrange_no(-103));
console.log(Smallest_Rearrange_no(-7605));
console.log(Smallest_Rearrange_no(102));
