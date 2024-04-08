const solution = (a, b, n) => {
  let answer = 0;
  while (n / a >= 1) {
    const divide = Math.floor(n / a);

    n += divide * (b - a);
    answer += b * divide;
  }

  return answer;
};
