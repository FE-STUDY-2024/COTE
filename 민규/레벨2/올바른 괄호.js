function solution(s) {
  let num = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      num++
    } else {
      if (num === 0) return false
      num--
    }
  }
  return num === 0 ? true : false
}
