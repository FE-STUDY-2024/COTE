function solution(n) {
  let answer = 1
  for (i = 1; i <= n / 2; i++) {
    let result = 0
    let j = i
    while (result < n) {
      result += j
      j++
      if (result >= n) break
    }
    if (result === n) answer++
  }
  return answer
}

let n = 15
console.log(solution(n))
