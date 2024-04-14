const solution = (k, score) => {
  let stack = []

  return score.map((num) => {
    if (stack.length < k) {
      stack.push(num)
    } else if (num > stack.at(-1)) {
      stack.pop()
      stack.push(num)
    }
    stack = stack.sort((a, b) => b - a)

    return stack.at(-1)
  })
}
