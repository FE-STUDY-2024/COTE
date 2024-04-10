const solution = (s) => {
  const arr = s
    .split(" ")
    .map((num) => parseInt(num))
    .sort((a, b) => a - b);

  return String(arr[0]) + " " + String(arr.at(-1));
};
