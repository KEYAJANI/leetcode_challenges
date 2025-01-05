// https://leetcode.com/problems/two-sum/ 5/1/2025 
// two-sum

nums = [1, 3, 7, 5];
target = 4;

for (i = 0; i < nums.length; i++) {
  for (x = i + 1; x <= nums.length; x++) {
    if (nums[i] + nums[x] == target) {
      return (output = [i, x]);
    }
  }
}
