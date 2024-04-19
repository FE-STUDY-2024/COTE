function solution(name, yearning, photo) {
    return photo.map((ph) => {
        let sum = 0
        name.map((n,j) => {
            if (ph.includes(n)) sum += yearning[j]
        })
        return sum
    })
}