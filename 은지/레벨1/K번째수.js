function solution(array, commands) {
    var answer = []
    for (let i=0;i<commands.length;i++){
        let result = []
        result = array.slice(commands[i][0]-1, commands[i][1])
        result = result.sort((a,b)=>a-b)
        answer.push(result[commands[i][2]-1])
    }
    return answer
}