const solution = (s) => {
  const stack = []

  s.split('').forEach((char) => {
    if (stack.at(-1) === '(' && char === ')') {
      stack.pop()
    } else {
      stack.push(char)
    }
  })

  return stack.length === 0
}
