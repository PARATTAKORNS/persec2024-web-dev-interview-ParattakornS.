var type = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f'];
var rgb = [];
var num = 0;
var word = '';
function CodeColor(hexcolor) {
    if (hexcolor.length === 4 || hexcolor.length === 7) {
        var code = hexcolor.substring(1).split("");
        if (code.length === 3) {
            for (var i = 0; i < code.length; i++) {
                var hex = code[i];
                if (type.indexOf(hex) || typeof hex == 'string') {
                    num = parseInt(hex, 16);
                    rgb.push((num * 16) + num);
                }
                else { // False
                    return "Error";
                    break;
                }
            }
        }
        if (code.length === 6) {
            for (var i = 0; i < code.length; i++) {
                var hex = code[i];
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
        var code = hexcolor.split("");
        for (var i = 0; i < code.length; i++) {
            var hex = code[i];
            if (type.indexOf(hex) || typeof hex === 'string') {
                num = parseInt(hex, 16);
                rgb.push((num * 16) + num);
            }
            else {
                return "Error";
            }
        }
    }
    // ถ้าไม่มี # เลข6หลัก
    else if (hexcolor.length === 6) {
        var code = hexcolor.split("");
        for (var i = 0; i < code.length; i++) {
            var hex = code[i];
            word += hex;
            if (word.length === 2) {
                rgb.push(parseInt(word, 16));
                word = "";
            }
        }
    }
    else {
        return "Error";
    }
    // Print Output
    if (rgb.some(isNaN)) {
        return 'Error';
    }
    else {
        return { R: rgb[0], G: rgb[1], B: rgb[2] };
    }
}
var input = "#abc"; // or any other input value
var result = CodeColor(input);
if (typeof result === "string") {
    console.log(result);
}
else {
    console.log("{ R: ".concat(result.R, ", G: ").concat(result.G, ", B: ").concat(result.B, " }"));
}
