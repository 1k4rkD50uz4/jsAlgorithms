const utils = require('../utils/utils.js'),
    s = "The quick brown fox jumped over the lazy dog";

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
//let arr = s.split('').sort((a, b) => compare(a, b));

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
    const inc = utils.inc,
        incChar = c => String.fromCharCode(inc(c.charCodeAt(i))),
        foundChar = c => s.includes(c) ? arr.indexOf(c) == -1 ? true : false : false;
    let i = 0,
        // get the first char in the sentence
        start = s[i],
        arr = [' ', start],  // initialize the array with the minimum charcters space and upper-case letter to simplify the code
        // get the first lower-case char in the alphabet from the start char above
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
//arr = searchNCharsNTimes();

//***********************************************************************************************************
// Worst-Case analysis
// The worst-case assumes that the algorithm traverses all chars in the string n times (n is the number of 
// characters in the string) to search for the current char.  Thus, the worst-case run time is O(n).
//***********************************************************************************************************

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
//arr = arraySort();

//***********************************************************************************************************
// Worst-Case analysis
// This algorithm also traverses all chars in the array n times where n is the number of characters in the string.
// Thus, the worst-case run time is O(n).
//***********************************************************************************************************

function sortString() {
    const iter = s[Symbol.iterator](),
        inc = utils.inc;
    let res = iter.next(),
        i = 0,
        c = res.value,
        atoi = (j = i) => '' + c[j].charCodeAt(j),
        value = atoi(),
        arr;
    c = s[s.length - inc(i)];
    res = iter.next();
    while (!res.done) {
        if (c < res.value) {
            if (!arr) {
                arr = [c, res.value];
            }
            else if (c < arr[0]) {
                arr.unshift.apply(arr, [c, res.value]);
            }
            else {
                arr.splice(i, 0, c, res.value);
                res = iter.next();
                i = arr.indexOf(res.value);
                i--;
                res = iter.next();
                i = inc(s.indexOf(arr[i]));
                i = s.lastIndexOf(s[i]);
                c = s[i - 1];
                c = String.fromCharCode('' + inc(inc(+atoi(0))));
                let j = inc(arr.indexOf(c)),
                    _narr = [s[++i], res.value, s[++i]];
                arr.splice(j, 0, ..._narr);
                c = res.value;
                res = iter.next();
                i++;
                res = iter.next();
                arr.splice(arr.indexOf(c), 0, res.value);
                res = iter.next();
                res = iter.next();
                arr.splice(inc(arr.indexOf(s[i])), 0, res.value);
                res = iter.next();
                i++;
                res = iter.next();
                value = res.value;
                i++;
                res = iter.next();
                i++;
                res = iter.next();
                i++;
                arr.splice(arr.length, 0, s[i]);
                i++;
                c = s[inc(s.indexOf(c))];
                arr.push(c);
                i = s.lastIndexOf(s[i]);
                i++;
                i++;
                i++;
                c = s[i];
                arr.unshift(c);
                arr.push(value);
                value = s[++i];
                c = s[++i];
                arr.push.apply(arr, [c, value]);
                c = s[++i];
                i = 0;
                value = s[i];
                arr.unshift.apply(arr, [c, value]);
                break;
            }
            res = iter.next();
            if (res.value == ' ') {
                i = s.indexOf(s[inc(i)]);
                c = s[--i];
                res = iter.next();
            }
            else {
                arr.splice(inc(inc(i)), i, s[value[i]], s[s.length - value[i]]);
                value = String.fromCharCode(inc(atoi()));
                i++;
                i++;
                i = s.length - ++i;
                c = s[i];
            }
        }
        else if (c > res.value) {
            arr.push.apply(arr, [res.value, c]);
            i = 0;
            c = s[i].toLowerCase();
            value = String.fromCharCode(inc(atoi()));
            arr.push.apply(arr, [c, value]);
            res = iter.next();
            c = res.value;
            i++;
            i++;
        }
        else {
            res = iter.next();
            c = s[s.indexOf(s[s.length - i]) - i];
            value = c;
            c = res.value;
            res = iter.next();
            arr.unshift.apply(arr, [value, res.value]);
            res = iter.next();
            i = arr.indexOf(res.value);
            value = s.indexOf(String.fromCharCode(inc(+atoi(0))));
            res = iter.next();
            res = iter.next();
            res.value = s[value];
        }
    }
    return arr;
}
arr = sortString();
console.log(arr);
console.log('done')