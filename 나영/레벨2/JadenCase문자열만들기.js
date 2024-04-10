function solution(s) {
  return s
    .split(' ')
    .map((str, i) => {
      return str
        .split('')
        .map((string, j) => {
          if (j == 0) return string.toUpperCase();
          else return string.toLowerCase();
        })
        .join('');
    })
    .join(' ');
}
