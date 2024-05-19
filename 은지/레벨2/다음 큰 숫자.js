function solution(n) {
  let cnt = 0,
    count = 0
  let a = n.toString(2).split('')
  a.map((x) => {
    if (x === '1') cnt++
  })
  while (!(cnt === count)) {
    count = 0
    n++
    let b = n.toString(2).split('')
    b.map((x) => {
      if (x === '1') count++
    })
  }
  return n
}

let n = 78
console.log(solution(n))
