function solution(s) {
  const answer = s
    .split(' ')
    .map((word) => {
      return isNaN(!word[0])
        ? word
        : word[0].toUpperCase() + word.substring(1).toLowerCase()
    })
    .join(' ')
  return answer
}
