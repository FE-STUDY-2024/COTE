const solution = (strings, n) =>
  strings.sort().sort((a, b) => a[n].charCodeAt() - b[n].charCodeAt())
