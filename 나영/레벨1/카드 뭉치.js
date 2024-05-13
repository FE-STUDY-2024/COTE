function solution(cards1, cards2, goal) {
    let stack = []
    goal.forEach((g)=>{
        if (cards1[0] == g) stack.push(cards1.shift())
        else if (cards2[0] == g) stack.push(cards2.shift())
    })
    return goal.filter((g,i) => g !== stack[i]).length > 0 ? "No" : "Yes"
}