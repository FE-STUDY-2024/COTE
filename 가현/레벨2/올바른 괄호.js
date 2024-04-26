function solution(s){
    let answer = [];
    
    for (let i=0; i < s.length; i++){
        if (s[i] === "(") answer.push("(")
        else if (answer.length === 0) return false;
        else answer.pop();
    }
    return answer.length === 0;
}