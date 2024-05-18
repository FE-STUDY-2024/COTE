const solution = (answers) => {
  let max = 0
  const methods = [0, 0, 0]
  const num1 = [1, 2, 3, 4, 5]
  const num2 = [2, 1, 2, 3, 2, 4, 2, 5]
  const num3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  const result = []

  answers.forEach((answer, index) => {
    num1[index % num1.length] === answer && methods[0]++
    num2[index % num2.length] === answer && methods[1]++
    num3[index % num3.length] === answer && methods[2]++
  })

  max = Math.max(...methods)
  methods.forEach((num, index) => num === max && result.push(index + 1))

  return result
}
