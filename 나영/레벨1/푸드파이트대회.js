function solution(food) {
  let r = '';
  food.forEach((f, i) => {
    if (f % 2 == 1 && i !== 0) {
      f -= 1;
    }
    r += String(i).repeat(f / 2);
  });
  return [r, 0, r.split('').reverse().join('')].join('');
}
