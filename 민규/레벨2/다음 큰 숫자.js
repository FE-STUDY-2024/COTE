function solution(n) {
  const cnt = n.toString(2).split(1).length - 1
  n++

  while (cnt != n.toString(2).split(1).length - 1) n++

  return n
}
