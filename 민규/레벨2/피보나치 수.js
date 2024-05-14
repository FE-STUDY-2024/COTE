function solution(n) {
  let sum = 0
  let x = 0
  let y = 1

  for (let i = 0; i < n - 1; i++) {
    sum = (x + y) % 1234567
    x = y
    y = sum
  }

  return sum
}
