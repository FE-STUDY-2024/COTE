function solution(array, commands) {
  const answer = []
  for (rule of commands) {
    let num = array.slice(rule[0] - 1, rule[1]).sort((a, b) => a - b)[
      rule[2] - 1
    ]
    answer.push(num)
  }
  return answer
}
