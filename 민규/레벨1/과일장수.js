function solution(k, m, score) {
  score.sort().reverse()
  let sum = 0
  
  for (let i = 0; i <= score.length / m - 1; i++) {
    sum += score[(i + 1) * m - 1] * m
  }

  return sum
}
