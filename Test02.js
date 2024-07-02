const prompt = require("prompt-sync")();
var input = prompt("Array input : ");

function sortMixedArray(arr) {
    return arr.sort((a, b) => {
        // Extract numbers from the strings
        let numA = parseInt(a.match(/\d+/g));
        let numB = parseInt(b.match(/\d+/g));

        // Extract letters from the strings
        let strA = a.match(/[a-zA-Z]+/g).join('');
        let strB = b.match(/[a-zA-Z]+/g).join('');

        // Compare letters first
        if (strA < strB) return -1;
        if (strA > strB) return 1;

        // If letters are the same, compare numbers
        return numA - numB;
    });
}