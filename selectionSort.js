//***********************************************************************************************************
// Problem Statement:
// Given a sentence with alphabetic characters and spaces, sort all characters
// and return an array of the unique characters in descending order.

// Solution: 
// This function implements a brute-force search for the first lower-case character, 'a', 
// by iterating over all characters in the sentence.
// If the character is found, append it to the array.
// Repeat the procedure to search for the next sequential character up to the last lower-case character. 
// Upper case and whitespace characters are less than all lower-case characters, 
// and are inserted to the beginning of the array in descending order.
//
//***********************************************************************************************************

function selectionSort() {
    const inc = i => ++i,
        incChar = c => String.fromCharCode(inc(c.charCodeAt(i))),
        foundChar = c => s.includes(c) ? arr.indexOf(c) == -1 ? true : false : false;
    let s = "The quick brown fox jumped over the lazy dog",
        i = 0,
        // get the first char in the sentence
        start = s[i],
        arr = [start],
        num = start.charCodeAt(i),
        // get the first upper-case char in the alphabet from the start char above
        c = String.fromCharCode(('' + ('' + num)[i].charCodeAt(i)).split('').reverse().join('')).toLowerCase(),
        // get the last lower-case char in the alphabet to sort
        end = String.fromCharCode(inc(parseInt((+('' + c.charCodeAt(i)).split('').reverse().join('')), 16))),
        done = false;
    while (!done) {
        if (foundChar(c)) {
            arr.push(c);
            if (c == end) {
                done = true;
            }
        }
        c = incChar(c);
    }
    return arr;
} 
selectionSort();
