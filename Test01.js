const prompt = require("prompt-sync")();
var input = prompt("Code Color : ");
let rgb = [];
let word = "";
let num = 0;
let type = ['1','2','3','4','5','6','7','8','9','0','A','a','B','b','C','c','D','d','E',
    'e', 'F', 'f'];

// ถ้ามี # นำหน้าเลข3หลักหรือ6หลัก
if(input.length == 4 || input.length == 7){
    let code = input.substring(1).split("");
    if(code.length == 3){
        for (let i = 0; i < code.length; i++) {
            const hex = code[i];
            // Check ว่า Hex อยู่ใน Array ไหม?
            if(type.includes(code[i]) || typeof code[i] == 'string'){
                num = parseInt(hex, 16);
                rgb.push((num*16)+ num);
            } else { // False
                console.log("Error");
                break;
            }
        }
    }if(code.length == 6){
        for (let i = 0; i < code.length; i++) {
            const hex = code[i];
            word += hex
            if(word.length == 2){
                rgb.push(parseInt(word,16));
                word = "";
            }
       }
    }
}
// ถ้าไม่มี # เลข3หลัก
if(input.length == 3){
    let code = input.split("");
    for (let i = 0; i < code.length; i++) {
        const hex = code[i];
        if(type.includes(code[i]) || typeof code[i] == 'string'){
            num = parseInt(hex, 16);
            rgb.push((num*16)+ num);
        } else {
            console.log("Error");
            break;
        }
    }
}  
// ถ้าไม่มี # เลข6หลัก
if(input.length == 6){
    let code = input.split("");
    for (let i = 0; i < input.length; i++) {
        const hex = code[i];
        word += hex
        if(word.length == 2){
            rgb.push(parseInt(word,16));
            word = "";
        }
    }
}
// Print Output
if(rgb.some(isNaN)){
    console.log('Error');}else{
    console.log(`{ R: ${rgb[0]}, G : ${rgb[1]}, B : ${rgb[2]}}`);}