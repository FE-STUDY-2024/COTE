function solution(answers) {
  let answer = []
  let max = -1
  let patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ]

  patterns.forEach((pattern, index) => {
    let result = []
    let i = 0,
      sum = 0
    while (result.length < answers.length) {
      result.push(pattern[i])
      i++
      if (i === pattern.length) i = 0
    }
    for (let j = 0; j < answers.length; j++) {
      if (result[j] === answers[j]) sum++
    }
    if (max < sum) {
      answer = []
      max = sum
      answer.push(index + 1)
    } else if (max === sum) answer.push(index + 1)
  })

  return answer
}
