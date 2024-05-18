function solution(n) {
    const ones = n.toString(2).split("").filter((s) => s === "1").length
    while(true){
        n += 1
        const result = n.toString(2).split("").filter((s) => s === "1").length
        if (result === ones) {
            return n
        }
    }
}