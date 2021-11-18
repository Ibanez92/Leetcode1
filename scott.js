var twoSum = function(nums, target) {
    // for loop for going through each number 
    for (var i = 0;i < nums.length;i++) {
        for (var j = 0; j < nums.length;j++) {
            if (i === j) {
                continue
            } else if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};
var input = [3,2,4]
var target = 6
console.log(twoSum(input, target));