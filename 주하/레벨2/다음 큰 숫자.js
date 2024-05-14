const solution = (n) => {
  const count = n.toString(2).replaceAll('0', '').length
  let cnt = 0

  while (cnt !== count) {
    cnt = (++n).toString(2).replaceAll('0', '').length
  }

  return n
}
