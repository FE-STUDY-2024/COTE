function solution(n) {
  let a = [0, 1]
  for (let i = 2; i <= n; i++) a[i] = (a[i - 1] + a[i - 2]) % 1234567
  return a[n]
}

let n = 50
console.log(solution(n))
