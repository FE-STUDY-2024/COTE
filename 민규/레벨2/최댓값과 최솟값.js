function solution(s) {
  let arr = s
    .split(' ')
    .map((s) => Math.floor(s))
    .sort((a, b) => a - b)
  return String(arr[0]) + ' ' + arr[arr.length - 1]
}
