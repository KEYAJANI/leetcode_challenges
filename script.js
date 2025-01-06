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


// https://leetcode.com/problems/counter/ 6/1/2025
// counter


var createCounter = function (n) {
  return function () {
    return n++;
  };
};

const counter = createCounter(10);
counter(); // 10
counter(); // 11
counter(); // 12
