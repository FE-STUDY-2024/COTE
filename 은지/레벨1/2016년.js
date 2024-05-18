function solution(a, b) {
  let answer = ''
  let sum
  if (a >= 8 && a % 2 === 1) {
    sum = (a - 1) * 31 - Math.floor((a - 1) / 2) + b
  } else if (a === 1) {
    sum = b
  } else if (a === 2) {
    sum = b + 31
  } else {
    sum = (a - 1) * 31 - Math.floor((a - 1) / 2) + b - 1
  }
  answer = (5 + (sum % 7)) % 7
  if (answer === 1) answer = 'SUN'
  else if (answer === 2) answer = 'MON'
  else if (answer === 3) answer = 'TUE'
  else if (answer === 4) answer = 'WED'
  else if (answer === 5) answer = 'THU'
  else if (answer === 6) answer = 'FRI'
  else answer = 'SAT'

  return answer
}
