function solution(cards1, cards2, goal) {
  let answer = 'YES'
  goal.map((card) => {
    if (card === cards1[0]) cards1.shift()
    else if (card === cards2[0]) cards2.shift()
    else answer = 'NO'
  })
  return answer
}

cards1 = ['i', 'sadness', 'sad']
cards2 = ['tired']
goal = ['i', 'sadness', 'sad', 'tired']
console.log(solution(cards1, cards2, goal))
