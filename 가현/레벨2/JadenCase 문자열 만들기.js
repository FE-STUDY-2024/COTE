function solution(s) {
    let answer = '';
    const arr = s.toLowerCase().split('');
    arr.forEach((val, index) => {
        if(arr[index - 1] == ' '){
            answer += val.toUpperCase();
        }else{
            answer += val.toLowerCase();
        }
    })
    return answer;
}
console.log(solution("3people unFollowed me"))
console.log(solution("for the last week"))