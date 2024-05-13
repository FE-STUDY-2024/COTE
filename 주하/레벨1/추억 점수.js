const solution = (name, yearning, photo) =>
  photo.map((friends) =>
    friends.reduce(
      (acc, cur) =>
        name.indexOf(cur) === -1 ? acc : acc + yearning[name.indexOf(cur)],
      0
    )
  )
