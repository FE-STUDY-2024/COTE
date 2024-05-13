function solution(food) {
  const arr = []

  for (i = 1; i < food.length; i++) {
    const foods = Math.floor(food[i] / 2)
    arr.push(String(i).repeat(foods))
  }

  reverseArr = [...arr].reverse()
  answer = arr.concat(0, reverseArr)

  return answer.join('')
}
