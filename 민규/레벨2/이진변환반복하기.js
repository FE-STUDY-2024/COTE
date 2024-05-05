function solution(s) {
  let cnt = 0
  let zeroCnt = 0
  let numStr = s

  while (numStr.length !== 1) {
    const len = numStr.split(0).join('').length
    zeroCnt += numStr.length - len
    numStr = len.toString(2)
    cnt++
  }
  
  return [cnt, zeroCnt]
}
