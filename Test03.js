//1. แปลง A->Z/ B->Y ไปเรื่อยๆ
//2. Reverse คำ
const prompt = require("prompt-sync")();
var input = prompt("text input : ");
var encode = '';
var decode = '';

// Encode
var txt = input.toLocaleLowerCase();
function encode(txt){
    for (let i = 0; i < txt.length; i++) {
        if (txt.charCodeAt(i) >= 97 && txt.charCodeAt(i) <= 122) {
            // txt.fromCharCode(219 - txt.charCodeAt(i));
            encode += String.fromCharCode(219 - txt.charCodeAt(i))
        }else{
            encode += String.fromCharCode(txt.charCodeAt(i))
        }
    }
    var tense = encode.split(" ").reverse();
    console.log(tense.join(" "));    
}
// Decode
function decode(txt){
    for (let i = 0; i < txt.length; i++) {
        if (txt.charCodeAt(i) >= 97 && txt.charCodeAt(i) <= 122) {
        decode += String.fromCharCode(219 - txt.charCodeAt(i))
        }else{
            encode += String.fromCharCode(txt.charCodeAt(i))
        }
    }
    var tense = decode.split(" ").reverse();
    var ans = tense.join(" ");
    console.log(ans[0].toUpperCase + ans.slice(1));
}
