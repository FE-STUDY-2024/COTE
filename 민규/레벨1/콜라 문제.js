function solution(required, bonus, n) {
  let empty = n
  let coke = 0
  while (empty >= required) {
    const newCoke = Math.floor(empty / required) * bonus
    empty = empty % required
    coke += newCoke
    empty += newCoke
  }
  return coke
}
