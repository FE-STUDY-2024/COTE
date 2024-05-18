function solution(name, yearning, photo) {
  let answer = []
  photo.map((row) => {
    let score = 0
    row.forEach((x) => {
      for (let j = 0; j < name.length; j++) {
        if (x === name[j]) score += yearning[j]
      }
    })
    answer.push(score)
  })
  return answer
}

let name = ['kali', 'mari', 'don']
let yearning = [11, 1, 55]
let photo = [
  ['kali', 'mari', 'don'],
  ['pony', 'tom', 'teddy'],
  ['con', 'mona', 'don'],
]

console.log(solution(name, yearning, photo))
