// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'
//   capitalize('hi there, how is it going?') --> 'Hi There, How Is It Going?'

// --- Solution:
// Iterate over the characters in the string.If the character is a whitespace, save the index.  Use the index
// to capitalize the next character and add the other characters in the word if they are not the index char.

function capitalize(str) {
    const inc = i => ++i;
    let delim = ' ', s, j;
    for (let [i, c] of Object.entries(str)) {
        if (!s) {
            s = c.toUpperCase();
        }
        else {
            if (c == delim) {
                j = +i;
                c = str[inc(j)].toUpperCase();
                s += delim + c;
            }
            else {
                if (+i!=inc(j)) {
                    s += c;
                }
            }
        }       
    }
    return s;
}
module.exports = capitalize;