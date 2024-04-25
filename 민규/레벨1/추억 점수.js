function solution(name, yearning, photo) {
  const score = photo.map((members) => {
    return members.reduce((acc, member) => {
      const index = name.indexOf(member)
      if (index !== -1) {
        return acc + yearning[index]
      } else {
        return acc
      }
    }, 0)
  })
  return score
}
