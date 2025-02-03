//https://school.programmers.co.kr/learn/courses/30/lessons/155652

function solution(s, skip, index) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let answer = [];

    for (let i = 0; i < s.length; i++) {
        let idx = alphabet.indexOf(s[i]);
        let cnt = 0;
        let newIdx = idx;
        while (cnt < index) {
            newIdx = (newIdx + 1) % 26;
            if (!skip.includes(alphabet[newIdx])) {
                cnt++;
            }
        }
        answer.push(alphabet[newIdx]);
    }
    return answer.join('');
}
