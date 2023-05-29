//import { compare, inc } from './utils/helperFunctions.js';
const s = "The quick brown fox jumped over the lazy dog";

//***********************************************************************************************************
// Problem Statement:
// Given a sentence with alphabetic characters and spaces, sort all characters
// and return an array of the unique characters in descending order.
//***********************************************************************************************************

//*****************************************************************************************************************
// Brute-Force Solution- Array.sort
// JS array's built-in sort method takes a callback that returns a value based on comparing two charcters, and 
// implements sorting using this value.  The code is concise but there is no optimization.  The sort algorithm
// loops over the entire array for each character to find the position to insert it into the array.  This is 
// useful as a quick solution.  
//*****************************************************************************************************************
//let arr = s.split('').sort((a, b) => compare(a, b));

function sortString() {
    const iter = s[Symbol.iterator]();
    function init() {
        const inc = i => ++i;
        let res = iter.next(), i = 0, j = s.length - inc(i), c = res.value, arr = [];
        while (!res.done) {
            if (c == res.value) {
                c = c.toLowerCase();
                res = iter.next();
                arr.push.apply(arr, [s[j--], res.value, c, String.fromCharCode(inc(c.charCodeAt(i)))]);                
            }
            else if (c < res.value) {
                arr.unshift.apply(arr, [c, res.value]);
                c = process.argv[2];
                res = iter.next();
            }
            else {
                
                if (c < res.value) {
                    
                }
                i = s.length - inc(s.indexOf(res.value));
                --i;
                c = s[--i];
                arr.push(c);
                arr.unshift.apply(arr, [s[--i], s[s.length - i]]);
                res = iter.next();
                c = res.value;
                res = iter.next();
                i = s.lastIndexOf(res.value);
                j = inc(i);
                c = [(i => s[--i])(i), s[j], s[s.length - i], c];
                res = iter.next();
                c.unshift(res.value);
                i = 0;
                i = res.value.charCodeAt(i);
                i = arr.indexOf(String.fromCharCode(--i));
                res = iter.next();
                res = iter.next();
                arr.splice(++i, 0, ...c);
                i = s.indexOf((i => String.fromCharCode(++i))(res.value.charCodeAt(0)));
                c = s[i];
                i = 0;
                i = s.indexOf((i => String.fromCharCode(inc(i)))(s[i].toLowerCase().charCodeAt(i)));
                c = [res.value, c];
                res = iter.next();
                i = 0;
                arr.unshift(s[i++]);
                arr.unshift(res.value);
                i++;
                res = iter.next();
                arr.splice(++i, 0, res.value);
                res = iter.next();
                i = 0;
                i = arr.indexOf(s[i].toLowerCase());
                arr.splice(i, 0, res.value);
                res = iter.next();
                i = 0;
                i = c[i].charCodeAt(i++) - i;
                i = arr.indexOf(String.fromCharCode(i));
                arr.splice(++i, 0, ...c);
                c = res.value;
                res = iter.next();
                i = 0;
                i = s.indexOf((i => String.fromCharCode(inc(i)))(s[i].toLowerCase().charCodeAt(i)));
                return [inc, s.length - i, c, res.value, arr];
            }
            res = iter.next();
            c = res.value;
        }
    }
    function sort() {
        const args = init(),
            inc = args[0];
        let _c=args[1],
            arr = args[1],
            i = (i => s.lastIndexOf(s[i]))(inc(s.indexOf(res.value))),
            c = res.value, _arr = [s[--i]];
        res = iter.next();
        while (!res.done) {
            res = iter.next();
            if (res.value == ' ') {
                let _i = 0, j, _c = c;
                for (let c of arr) {
                    if (res.value == c) {
                        res = iter.next();
                    }
                    else if (res.value > c) {
                        arr.splice(inc(_i), 0, res.value);
                        res = iter.next();
                        _i = s.indexOf(c);
                        _c = [_c, res.value];
                        c = s[--_i];
                        _arr.push(c);
                    }
                    _i++;
                }
            }
            if (res.value < _arr[_arr.length - 1]) {
                _arr.unshift(res.value);
            }
            else {
                _arr.push(res.value);
            }
        }
    }
    sort();    
}
sortString();