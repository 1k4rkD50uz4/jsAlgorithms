// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let s = n.toString().split('').reverse().join(''),
        l = s.length - 1;
    return parseInt((s => s)(s[l] === '-' ? s[l].concat(s.substring(0,l)):s));
}
module.exports = reverseInt;
