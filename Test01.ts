const type : string[] = ['1','2','3','4','5','6','7','8','9','0','A','a','B','b','C','c','D','d','E','e', 'F', 'f'];
let rgb : number[] = [];
var num : number = 0;
var word : string = '';

function CodeColor(hexcolor : string) : { R: number, G: number, B: number } | string{
    if (hexcolor.length === 4 || hexcolor.length === 7) {
        let code : string[] = hexcolor.substring(1).split("");
        if (code.length === 3) {
            for (let i = 0; i < code.length; i++) {
                const hex = code[i];
                if(type.indexOf(hex) || typeof hex == 'string'){
                    num = parseInt(hex, 16);
                    rgb.push((num*16)+ num);
                } else { // False
                    return "Error";
                    break;
                }
            }
        }if (code.length === 6) {
            for (let i = 0; i < code.length; i++) {
                const hex = code[i];
                word += hex;
                if (word.length === 2) {
                    rgb.push(parseInt(word, 16));
                    word = "";
                }
            }
        }
    }
    // ถ้าไม่มี # เลข3หลัก
    else if (hexcolor.length === 3) {
        const code = hexcolor.split("");
        for (let i = 0; i < code.length; i++) {
            const hex = code[i];
            if (type.indexOf(hex) || typeof hex === 'string') {
                num = parseInt(hex, 16);
                rgb.push((num * 16) + num);
            } else {
                return "Error";
            }
        }
    }
    // ถ้าไม่มี # เลข6หลัก
    else if (hexcolor.length === 6) {
        const code = hexcolor.split("");
        for (let i = 0; i < code.length; i++) {
            const hex = code[i];
            if (type.indexOf(hex) || typeof hex === 'string') {
                word += hex;    
            }
            if (word.length === 2) {
                rgb.push(parseInt(word, 16));
                word = "";
            }
        }
    } else {
        return "Error";
    }

    // Print Output
    if (rgb.some(isNaN)) {
        return 'Error';
    } else {
        return { R: rgb[0], G: rgb[1], B: rgb[2] };
    }
}

const input: string = "#abc"; // แก้ไข Input ตรงนี้ได้เลยครับ
const result = CodeColor(input);

if (typeof result === "string") {
    console.log(result);
} else {
    console.log(`{ R: ${result.R}, G: ${result.G}, B: ${result.B} }`);
}