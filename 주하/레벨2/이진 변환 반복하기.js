const solution = (s) => {
  let changedCount = 0
  let deletedZeroCount = 0

  while (s !== '1') {
    const size = s.replace(/0/g, '').length

    deletedZeroCount += s.length - size
    changedCount++
    s = size.toString(2)
  }

  return [changedCount, deletedZeroCount]
}
