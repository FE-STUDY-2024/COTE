function solution(strings, n) {
  strings = strings.sort()
  let answer = []
  let result = []
  for (let x of strings) {
    result.push(x[n])
    result = Array.from(new Set(result)).sort()
  }
  for (let i = 0; i < strings.length; i++) {
    for (let j = 0; j < strings.length; j++)
      if (result[i] === strings[j][n]) answer.push(strings[j])
  }

  return answer
}
