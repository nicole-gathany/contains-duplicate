var containsDuplicate = function(nums) {
  let cache = {};
  for (let i = 0; i < nums.length; i++) {
    cache[nums[i]] = cache[nums[i]] + 1 || 1;
    if (cache[nums[i]] > 1) {
      return true;
    }
  }
  return false;
};

console.log(containsDuplicate([]));
console.log(containsDuplicate([1, 2, 3]));
console.log(containsDuplicate([1, 1, 1]));
