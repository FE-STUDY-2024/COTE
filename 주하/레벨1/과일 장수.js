const solution = (k, m, score) => {
  const apples = score.sort((a, b) => a - b)
  let arr = []
  let answer = 0

  while (apples.length > 0) {
    arr.push(apples.pop())

    if (arr.length === m) {
      answer += arr.at(-1) * m
      arr = []
    }
  }

  return answer
}
