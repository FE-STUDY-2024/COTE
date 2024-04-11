function solution(strings, n) {
  strings = strings.sort()
  let answer = []
  // strings.sort((a, b) => a.charCodeAt(n) - b.charCodeAt(n))
  strings.sort((a, b) => a[n].localeCompare(b[n]))
  answer = strings

  return answer
}

let str = ['sun', 'bed', 'car']
console.log(solution(str, 1))
