const solution = (a, b) => {
  const week = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED']
  const days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  let totalDays = b

  for (let i = 0; i < a - 1; i++) {
    totalDays += days[i]
  }

  return week[totalDays % 7]
}
