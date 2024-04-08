function solution(nums) {
  let s = new Set();
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      s.add(nums[i] + nums[j]);
    }
  }
  return [...s].sort((a, b) => a - b);
}
