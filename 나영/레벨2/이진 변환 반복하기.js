function solution(s) {
    let cnt = 0
    let i = 0
    while (s.length > 1) {
        s = s.split("").filter(str => {
            if (str == "0") cnt++
            return str == "1"
        }).length.toString(2)
        i++
    }
    return [i, cnt]
}