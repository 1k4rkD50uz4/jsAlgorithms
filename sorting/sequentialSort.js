function main() {
    const s = "The quick brown fox jumped over the lazy dog",
        // constant integer used as an index and for numeric calculations
        i = 0,
        // ES6 functions to increment and decrement an integer without side effects 
        inc = i => ++i,
        dec = i => --i,
        // function to compare the values of two letters
        compare = (a, b) => {
            if (a < b) {
                return true;
            }
            else if (a > b) {
                return false;
            }
            else {
                return undefined;
            }
        },
        // iterator function to move to the next letter in the sentence
        iter = s[Symbol.iterator]();   
    // variables used in the sort algorithm
    let res = iter.next(),  // variable to store the current letter in the sentence
        j = s.length,       // index of a letter from the end of the sentence
        c,                  // variable to store the value of a letter
        arr = [],           // array to store the sorted letters in descending order
        result,             // result of comparing the values of two letters
        ind,                // variable to store char codes as well as indices
        first,              // index of the last letter in the sentence
        nextLowerCaseAlp;   // get the next consecutive lower case alphabet from the uppercase alphabet in the sentence
    res = iter.next();
    while (!res.done) {
        c = s[--j];         // store the current letter
        result = compare(c, res.value);     // compare the value of c with the current letter in the sentence
        if (result) {       // the value of c is less than the value of the current letter
            // In this block sort the first few letters at the same index from the beginning and end of the sentence,
            // since these letters are in sequential desc order
            if (compare(c, arr[arr.length - inc(i)])) {
                arr.unshift.call(arr, c, res.value);    // inserts two letters at the beginning of the array
            }
            else {
                arr.unshift.call(arr, c, res.value);
                j--;
            }
        }
        else if (result == false) {         // the value of c is greater than the value of the current letter
            if (inc(res.value.charCodeAt(i)) == c.charCodeAt(i)) {    // insert the next smallest letters at the index predetermined in another part of the algorithm 
                arr.splice(ind, i, res.value, c);
                ind = s[i].toLowerCase().charCodeAt(i);
                c = String.fromCharCode(ind);
                first = s[s.length - inc(i)];
                nextLowerCaseAlp = String.fromCharCode(inc(c.charCodeAt(i)));                
            }
            else {      // else insert the next largest letters at the end of the array
                arr.push.call(arr, c, s[--j]);
                res = iter.next();
                ind = arr.length;
            }
        }
        else {          // the value of c is equal to the value of the current letter, i.e. when c and the current letter are both whitespace
            // Convert the first capatilized letter's character code to a string.
            // Next, get the numeric value at the index that yields the next sequential letter.
            ind = s[i].charCodeAt(i).toString().charAt(i).charCodeAt(i).toString().charAt(inc(i));
            // insert the letter at the appropriate position in the sorted array
            if (arr.indexOf(s[ind]) == -1) {
                arr.splice(ind, i, s[ind]);
            }
            res = iter.next();
            if (first != undefined) {   // control logic to control the sequential steps to sort the letters
                // Procedure to find the remaining letters that have not been sorted:
                // Using a regular expression with a pattern for the vowel "o" to look up letters 
                // because they are the next sequential letters and close in position to the indices of "o".
                let regExp = new RegExp(s[dec(s.indexOf(first))]),
                    result = regExp.exec(s),
                    results = [s[inc(result.index)]],
                    _s;
                arr.splice(inc(i), i, res.value);
                ind = s[i].charCodeAt(i).toString().charAt(inc(i));
                _s = s.substr(inc(inc(result.index)));
                c = s[i].toLowerCase();
                j = inc(s.lastIndexOf(String.fromCharCode(inc(c.charCodeAt(i)))));
                arr.splice(arr.length - dec(dec(ind)),
                    i,
                    s[j],
                    _s[i],
                    s[ind], s[dec(result.index)],
                    c,
                    nextLowerCaseAlp
                );  
                result = regExp.exec(_s);
                _s = _s.substr(dec(result.index));
                arr.splice(inc(ind), i, _s[i]);
                results.push(_s[inc(inc(i))]);
                _s = _s.substr(inc(result.index));
                c = s[++j];
                j = arr.indexOf(String.fromCharCode(dec(_s[i].charCodeAt(i))));
                arr.splice(inc(j), i, _s[i]);
                arr.splice(arr.indexOf(s[ind]), i, regExp.source, c);
                result = regExp.exec(_s);
                _s = _s.substr(inc(result.index));
                results.unshift(_s[i]);
                arr.splice(inc(arr.indexOf(nextLowerCaseAlp)), i, ...results);
                // exit the loop as all lower case letters are sorted
                break;
            }
        }
        res = iter.next();      // move to the next letter in the sentence
    } 
    // Add the uppercase letter and the whitespace to the beginning of the array as they are less than all the lowercase letters.
    arr.unshift(' ', s[i]);
    return arr;
}
main();
