import { compare, inc } from './utils/helperFunctions.js';
const s = "The quick brown fox jumped over the lazy dog";

//***********************************************************************************************************
// Problem Statement:
// Given a sentence with alphabetic characters and spaces, sort all characters
// and return an array of the unique characters in descending order.

// Analysis:
// The first solution is a brute-force method that solves the problem by implementing the simplest algorithm 
// which has the worst-case run time (explained after the searchNCharsNTimes function).  

// The second solution implements a more complex algorithm by finding the position in the array to 
// insert the next string character based on the current state of the array that is sorted in descending order.  

// Note:
// In both solutions, the uppercase and whitespace characters are inserted to the beginning of the array to 
// simplify the algorithm.
//***********************************************************************************************************

//*****************************************************************************************************************
// Brute-Force Solution- Array.sort
// JS array's built-in sort method takes a callback that returns a value based on comparing two charcters, and 
// implements sorting using this value.  The code is concise but there is no optimization.  The sort algorithm
// loops over the entire array for each character to find the position to insert it into the array.  This is 
// useful as a quick solution.  
//***********************************************************************************************************
let arr = s.split('').sort((a, b) => compare(a, b));

//***********************************************************************************************************
// Brute-Force Solution- searchNCharsNTimes
// Starting with the min char, search the entire string to determine if the character is in the string and append to the array.  Repeat this procedure up to 
// the max character.  The advantage of this approach is that it is a simple to 
// implement as the focus is only on coding to insert the next character without thinking about optimizing for
// the character's positon in the string with respect to the other charcters.
// It is adequate to quickly find the solution.  The disadvantages are that it is not scalable 
// as the run time would increase exponentially to traverse all charactes in the string for each character
// for larger strings.  The code to get the first and last characters is complex, not portable as it
// is specific to JS and cannot be easily reused to find the solution to other similiar problems.  
//***********************************************************************************************************

function searchNCharsNTimes() {
    const incChar = c => String.fromCharCode(inc(c.charCodeAt(i))),
        foundChar = c => s.includes(c) ? arr.indexOf(c) == -1 ? true : false : false;
    let i = 0,
        // get the first char in the sentence
        start = s[i],
        arr = [' ', start],  // initialize the array with the minimum charcters space and upper-case letter to simplify the code
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
searchNCharsNTimes();

//***********************************************************************************************************
// Worst-case run-time analysis:
// The searchNCharsNTimes function iterates over the string n times to search for the next sequential character,
// and increments n times from the min character to the max character.  Thus, the worst-case run time 
// is exponential since n x n = O(n ^ 2).  
//***********************************************************************************************************

//*******************************************************************************************************************
// Improved Solution - searchSpliceArray
// For each character in the string, traverse the array to the position of the character that is greater than 
// the current string character.  Insert the string character at this position.  The function searchSpliceArray 
// mutates the array in constant time using the array built-in splice method.  This solution scales well for larger 
// input sizes because only the first character in the array (min) is checked against the current char.  
//*******************************************************************************************************************

function searchSpliceArray() {
    let i = 0,
        iter = s[Symbol.iterator](),
        res = iter.next(),
        arr = [res.value.toLowerCase()],
        compRes;
    return (function () {
        while (!res.done) {
            res = iter.next();
            if (res.value == ' ') {
                res = iter.next();
            }
            for (let c of arr) {
                compRes = compare(res.value, c);
                if (compRes) {
                    break;
                }
                else if (compRes == false) {
                    i++;
                }
            }
            if (arr[i] != res.value) {
                arr.splice(i, 0, res.value);
            }
            i = 0;
        }
        arr.unshift.apply(arr,[' ', s[0]]);
        return arr;
    })();
}
searchSpliceArray();

//***********************************************************************************************************
// Worst-case run-time analysis:
// The searchSpliceArray function iterates over the array for each string character.  A custom algorithm 
// can be implemented to determine the insertion method.  Optimization points are repeat characters, 
// encountering a character that is already sorted, etc.  Because the array is partially sorted, the worst 
// case run time is reduced to logarithmic time O(n * log(n)).
//***********************************************************************************************************
