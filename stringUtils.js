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

console.log(capitalizeString("hello node"));
console.log(reverseString("javascript"));
console.log("Vowel count:", countVowels("backend development"));