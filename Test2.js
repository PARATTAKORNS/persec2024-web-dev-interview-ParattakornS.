function sortMixedArray(arr) {
    return arr.sort((a, b) => {
        // หาอักษร
        let str1 = a.match(/[a-zA-Z]+/g).join('');
        let str2 = b.match(/[a-zA-Z]+/g).join('');
        console.log(str1,str2);
        // หาตัวเลข
        let num1 = parseInt(a.match(/\d+/g));
        let num2 = parseInt(b.match(/\d+/g));
        console.log(num1,num2);
        // เทียบอักษร
        if (str1 < str2){
            return -1
        } else {
            return 1
        }
        // เทียบตัวเลข
        return num1 - num2;
    });
}

console.log(sortMixedArray(["SF20","TH3","TH10","SG20"])) // ใส่ Input ได้เลยครับ
