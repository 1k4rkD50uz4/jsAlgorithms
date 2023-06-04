//import { compare, inc } from './utils/helperFunctions.js';
const s = "The quick brown fox jumped over the lazy dog";

//***********************************************************************************************************
// Problem Statement:
// Given a sentence with alphabetic characters and spaces, sort all characters
// and return an array of the unique characters in descending order.
//***********************************************************************************************************

//*****************************************************************************************************************
// Brute-Force Solutions
// The following are a few brute-force sorting algorithms implemented in JS to sort the characters in the string.  
// These algorithms are quick and easy to design and code in JS.  However, they are not optimized and will be slow 
// for large strings.  
//*****************************************************************************************************************


//*****************************************************************************************************************
// Brute-Force Solution 1:  Use JS built-in Array.sort
// JS array's built-in sort method takes a callback that returns a value based on comparing two charcters, and 
// implements sorting using this value.  The code is concise but there is no optimization.  The sort algorithm
// loops over the entire array for each character to find the position to insert it into the array.  This is 
// useful as a quick solution.  
//*****************************************************************************************************************
let arr = s.split('').sort((a, b) => compare(a, b));

//***********************************************************************************************************
// Brute-Force Solution 2: Search and sort from the min char to the max char
// Starting with the min char, search the entire string to determine if the character is in the string and append to the array.  
// Repeat this procedure up to the max character.  The advantage of this approach is that it is a simple to 
// implement as the focus is only on searching for and inserting the next character.  Since JS is a single-threaded language
// (i.e. can only do one thing at a time), this algorithms works well because there are only a few steps to implement.  
// It is also easy to design to quickly find the solution.  The disadvantages are that it is not scalable 
// as the run time would increase exponentially to traverse all charactes in the string for each character
// for larger strings.  The code to get the first and last characters is complex and not portable as it
// is specific to JS and cannot be easily reused to find the solution to other similiar problems.  
//***********************************************************************************************************

function searchNCharsNTimes() {
    const incChar = c => String.fromCharCode(inc(c.charCodeAt(i))),
        foundChar = c => s.includes(c) ? arr.indexOf(c) == -1 ? true : false : false;
    let i = 0,
        // get the first char in the sentence
        start = s[i],
        arr = [' ', start],  // initialize the array with the minimum charcters space and upper-case letter to simplify the code
        // get the first upper-case char in the alphabet from the start char above
        c = String.fromCharCode(('' + ('' + start.charCodeAt(i))[i].charCodeAt(i)).split('').reverse().join('')).toLowerCase(),
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

//*****************************************************************************************************************
// Brute-Force Solution 3:  Memoization using an array data structure
// This method sorts each consecutive char in the string by comparing it with an array of pre-sorted chars.  The
// sorted chars are stored in an array (memoization).  Iterate over each char in the string and insert it into 
// the array at the appropriate position.  This method mutates the array and sorts the chars in desc order.  
// Iterate over each char in the array and compare it with the current string char.  If the character is greater 
// than the array char, continute iterating the array and increment the index variable.  If the char is less than 
// the array char, insert the char at that index. 
//*****************************************************************************************************************
function arraySort() {
    const compare = utils.compare;
    let res = iter.next(),
        c = res.value,
        arr = [c];
    while (!res.done) {
        res = iter.next();
        sort.call({ c: res.value });
    }
    function sort() {
        let i = 0,
            c = this.c,
            res = true;
        if (arr.indexOf(c) == -1) {
            for (let val of arr) {
                let compRes = compare(c, val);
                if (compRes == -1) {
                    arr.splice(i, 0, c);
                    return res;
                }
                else if (compRes == 1) {
                    arr.splice(++i, 0, c);
                    return res;
                }
                else {

                }
            }
        }
    }
    return arr;
}
