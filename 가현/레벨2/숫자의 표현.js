function solution(n) {
  let answer = 1
  for (let i = 1; i < n; i++) {
    let curr = 0
    for (let j = i; j < n; j++) {
      curr += j
      if (curr >= n) {
        if (curr === n) answer++
        break
      }
    }
  }
  return answer
}
