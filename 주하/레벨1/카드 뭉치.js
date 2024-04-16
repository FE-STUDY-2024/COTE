const solution = (cards1, cards2, goal) => {
  cards1 = cards1.reverse()
  cards2 = cards2.reverse()
  goal = goal.reverse()

  while (goal.length > 0) {
    const currentWord = goal.pop()

    if (cards1.at(-1) === currentWord) {
      cards1.pop()
    } else if (cards2.at(-1) === currentWord) {
      cards2.pop()
    } else {
      return 'No'
    }
  }
  return 'Yes'
}
