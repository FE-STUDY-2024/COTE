function solution(k, score) {
  let answer = []
  let result = []
  for (let x of score) {
    let min = result.sort((a, b) => a - b)[0]
    if (result.length < k) result.push(x)
    else if (x > min) {
      result.splice(0, 1)
      result.push(x)
    }
    answer.push(result.sort((a, b) => a - b)[0])
  }
  return answer
}
