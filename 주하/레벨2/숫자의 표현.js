const solution = (n) => {
  let result = 1

  if (n === 1) return 1

  for (let i = 1; i < n / 2 + 1; i++) {
    let checkNum = 0
    let j = i

    while (checkNum < n) {
      checkNum += j
      j++
    }

    if (checkNum === n) {
      result++
    }
  }

  return result
}
