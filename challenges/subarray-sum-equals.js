// 560. Subarray Sum Equals K
// Medium
// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
// A subarray is a contiguous non-empty sequence of elements within an array.
// Example 1:
// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:
// Input: nums = [1,2,3], k = 3
// Output: 2
// Example 3:
// Input
// nums = [1,2,3,6,4,2,0,4]
// k = 6
// Output:
// 5
function subarraySum(nums, k) {
    var count = 0;
    for (var i = 0; i < nums.length; i++) {
        var sum = 0;
        for (var j = i; j < nums.length; j++) {
            sum = sum + nums[j];
            if (sum === k) {
                count++;
            }
        }
    }
    return count;
}
console.log(subarraySum([1, 2, 3, 6, 4, 2, 0, 4], 6));
