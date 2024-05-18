function solution(answers) {
    let one = [1,2,3,4,5]
    let two = [2,1,2,3,2,4,2,5]
    let thr = [3,3,1,1,2,2,4,4,5,5]
    let n = [0,0,0]
    let r = []
    for (i = 0; i<answers.length; i++) {
        answers[i] === one[i % 5] && n[0]++;
        answers[i] === two[i % 8] && n[1]++;
        answers[i] === thr[i % 10] && n[2]++;
    }
    n.map((num,i) => num === Math.max(...n) && r.push(i+1))
    return r.sort((a,b) => a-b)
}