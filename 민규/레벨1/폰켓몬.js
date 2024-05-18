// 객체 길이 구하기
function solution(nums) {
  const monsterType = new Set(nums).size
  const allowance = nums.length / 2
  return allowance > monsterType ? monsterType : allowance
}
