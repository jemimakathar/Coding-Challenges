//  Example 1:
// Input: nums = [2,1,3,5,6], k = 5, multiplier = 2
// Output: [8,4,6,5,6]
// Explanation:


// Operation
// Result
// After operation 1
// [2, 2, 3, 5, 6]
// After operation 2
// [4, 2, 3, 5, 6]
// After operation 3
// [4, 4, 3, 5, 6]
// After operation 4
// [4, 4, 6, 5, 6]
// After operation 5
// [8, 4, 6, 5, 6]
// Example 2:
// Input: nums = [1,2], k = 3, multiplier = 4
// Output: [16,8]
// Explanation:

// Operation
// Result
// After operation 1
// [4, 2]
// After operation 2
// [4, 8]
// After operation 3
// [16, 8]

function finalArray(nums: number[], k: number, multiplier: number): number[] {
    for (let i = 0; i < k; i++)
    {
        let minIndex = 0;
        for (let j = 1; j < nums.length; j++) {
            if (nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }
        nums[minIndex] *= multiplier;
    }
    return nums;
}
console.log(finalArray([2, 1, 3, 5, 6], 5, 2)); 
console.log(finalArray([1, 2], 3, 4)); 


