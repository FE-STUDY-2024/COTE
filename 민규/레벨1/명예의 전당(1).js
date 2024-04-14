function solution(k, score) {
  const glory = []
  const result = []
  for (let i in score) {
    if (glory.length < k) {
      glory.push(score[i])
      glory.sort((a, b) => a - b)
    } else if (glory[0] < score[i]) {
      glory.shift()
      glory.push(score[i])
      glory.sort((a, b) => a - b)
    }
    result.push(glory[0])
  }
  return result
}
