function solution(food) {
  var answer = ''
  for (let i = 1; i < food.length; i++) {
    if (food[i] % 2 === 1) {
      food[i]--
    }
    for (let j = 0; j < food[i] / 2; j++) answer += i
  }
  answer += 0 + answer.split('').reverse().join('')
  return answer
}
