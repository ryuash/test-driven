const wrap = (line, maxLen) => {
    if(line.length<=maxLen){
        return line;
    }
    let split = line.split(' ');
    //[puppy,love]
    let result = '';
    // let counter = 
    for(let i=0;i<split.length-1;i++){
            let currentWord = split[i];
            let nextWord = split[i+1];
            if(currentWord.length+nextWord.length+1 <= maxLen){
                result+=`${currentWord} ${nextWord}`
            }
            else{
                result+=`${currentWord}\n${nextWord}`;
            }
    }
    return result;
};
module.exports = wrap;