function reversedText(text){
    const len = text.length;
    let reversedStr = "";

    for(let i = len-1; i>=0; i--){
        reversedStr += text[i];
    }
    return reversedStr;
}

const string = 'I Love Programming';
const result = reversedText(string);

console.log(result)
