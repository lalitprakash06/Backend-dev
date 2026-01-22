function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function countVowels(str) {
    const matches = str.match(/[aeiouAEIOU]/g);
    return matches ? matches.length : 0;
}

module.exports = {
    capitalizeString,
    reverseString,
    countVowels
};

const testString = "hello world";

console.log("Original:", testString);
console.log("Capitalized:", capitalizeString(testString));
console.log("Reversed:", reverseString(testString));
console.log("Vowel Count:", countVowels(testString));