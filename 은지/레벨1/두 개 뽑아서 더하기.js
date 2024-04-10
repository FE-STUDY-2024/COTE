function solution(numbers) {
  var answer = []
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let sum = 0
      sum = numbers[i] + numbers[j]
      answer.push(sum)
      answer = Array.from(new Set(answer)).sort((a, b) => a - b)
    }
  }
  return answer
}

let arr = [5, 0, 2, 7]
console.log(solution(arr))
