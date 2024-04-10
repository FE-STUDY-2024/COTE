const solution = (s) =>
  s
    .split(" ")
    .map(
      (word) => word && word[0].toUpperCase() + word.substring(1).toLowerCase()
    )
    .join(" ");
