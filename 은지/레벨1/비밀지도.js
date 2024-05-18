function solution(n, arr1, arr2) {
  let answer = []
  let leg = arr1.length
  for (i = 0; i < leg; i++) {
    let result = []
    let a = arr1[i].toString(2).padStart(leg, '0')
    let b = arr2[i].toString(2).padStart(leg, '0')
    for (let j = 0; j < leg; j++) {
      if (a[j] === '1' || b[j] === '1') result.push('#')
      else result.push(' ')
    }
    answer.push(result.join('').toString())
  }
  return answer
}
