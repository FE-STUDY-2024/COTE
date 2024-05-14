function solution(answers) {
    const scoreSet = [0, 0, 0]
    const answer = []
  
    answers.forEach((answer, i) => {
      if ('12345'[i % 5] == answer) ++scoreSet[0]
      if ('21232425'[i % 8] == answer) ++scoreSet[1]
      if ('3311224455'[i % 10] == answer) ++scoreSet[2]
    })
  
    scoreSet.forEach((score, i) => {
      if (Math.max(...scoreSet) == score) answer.push(i + 1)
    })
  
    return answer
  }
  