var containsDuplicate = function(nums) {
  let cache = {};
  nums.forEach(function(x) {
    if (!cache[x]) cache[x] = 0;
    cache[x]++;
  });
  for (let key in cache) {
    if (cache[key] > 1) {
      return true;
    }
  }
  return false;
};

console.log(containsDuplicate([]));
console.log(containsDuplicate([1, 2, 3]));
console.log(containsDuplicate([1, 1, 1]));
