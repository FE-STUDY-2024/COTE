function solution(n) {
  let answer = 0
  let curr = n
    .toString(2)
    .split('')
    .reduce((acc, curr) => acc + (curr === '1' ? 1 : 0), 0)

  while (true) {
    n++ // 조건 1
    let next = n
      .toString(2)
      .split('')
      .reduce((acc, curr) => acc + (curr === '1' ? 1 : 0), 0)

    if (curr === next) {
      answer = n
      break
    }
  }

  return answer
}
