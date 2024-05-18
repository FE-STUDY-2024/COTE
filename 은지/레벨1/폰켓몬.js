function solution(nums) {
  let answer = 0
  let num = nums.length / 2
  let length = [...new Set(nums)].length
  answer = length < num ? length : num
  return answer
}

let nums = [3, 3, 3, 3]
console.log(solution(nums))
