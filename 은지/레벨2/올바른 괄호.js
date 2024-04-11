function solution(s) {
  let answer = true
  stack = []
  for (let x of s) {
    if (x === '(') stack.push(x)
    else {
      if (stack.length === 0) answer = false
      stack.pop()
    }
  }
  if (stack.length > 0) answer = false
  return answer
}
