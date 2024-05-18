function solution(s) {
  let answer = []
  let count = 0,
    cnt = 0
  while (s.length > 1) {
    let result = ''
    for (let x of s) {
      if (x === '1') result += x
      else count++
    }
    s = result.length.toString(2)
    cnt++
  }
  answer.push(cnt, count)
  return answer
}

let s = '1111111'
console.log(solution(s))
