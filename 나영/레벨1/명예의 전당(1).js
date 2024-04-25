function solution(k, score) {
    let scores = []
    return score.map((s,i) => {
        if (i<k) {
            scores.push(s)
        } else {
            scores = [...scores,s].sort((a,b) => b-a).slice(0,k)
        }
        return Math.min(...scores)
    })
}