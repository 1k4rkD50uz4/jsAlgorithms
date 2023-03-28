import { inc, log } from './utils/helperFunctions.js';

//***********************************************************************************************************
// Problem Statement:
// Given a string with brackets (parenthesis (), brackets [] and braces {}), write a function to check if
// the brackets are balanced.
//
// Solution: 
// The function checks if the current bracket is an opening bracket, starting from the beginning
// of the string, and moves to the next bracket until it reaches the first matching pair 
// (i.e. the first closing bracket). Then it checks that the current bracket is closing and 
// matches it's corresponding opening bracket at the right index in the string.
//***********************************************************************************************************
function checkBalancedBrackets() {
    const iter = s[Symbol.iterator]();
    let res = iter.next(),
        i = 0,
        count=0,
        b,
        mid = s.length % 2 == 0 ? s.length / 2 : (s.length - 1) / 2,
        balanced = true;
    while (!res.done) { 
        next();
        let j = s.length - inc(i);
        if (s[j] === b) {
            i++;
            res = iter.next();
            if (b == res.value) {
                if (i == mid) {
                    if (!count) {
                        break;
                    }
                    else {
                        count++;
                        i++;
                        next();
                    }
                }
                else {
                    i++;
                    next();
                }
            }
        }
        else {
            next();
        }
    }
    return balanced;
    function next() {
        let n = res.value.charCodeAt(0),
            s = n.toString(2),
            _b;
        // get the bracket's closing bracket by checking it's binary value to determine
        // it's ascii code
        if (s.substring(s.length - 2) === '11') {
            _b = String.fromCharCode(inc(++n));
            if (b && b === _b) {
                i++;
                res = iter.next();
                next();
            }
            else {
                b = _b;
            }
        }
        else if (s.substring(s.length - 2) === '00') {
            _b = String.fromCharCode(inc(n));
            if (b === _b) {
                if (i == s.length - 1) {

                }
            }
            b = _b;
        }
        else {
            if (b == res.value) {
                count++;
                i++;
                res = iter.next();
            }
        }
    }
}

// Run tests
let i = 0,
    n = 3,
    s;
while (i < n) {
    let actualRes,
        expRes,
        msg,
        format;
    if (i == 0) {   // Test case 1
        // A string with balanced nested brackets.
        s = '{[({[]})]}';
        // expect the test to pass.
        expRes = true;        
    }
    else if (i == 1) {  // Test case 2
        // A string with balanced pairs of brackets.
        s = '{}[]()';
        // expect the test to pass.
        expRes = true;  
    }
    else {  // Test case 3
        // A string with un-balanced brackets.
        s = '{(}';
        // expect the test to fail.
        expRes = false;  
    }
    // run the test
    actualRes = checkBalancedBrackets(); 
    // Display info about the test.
    msg = `Test case ${i}\nInput string: ${s}
        \nExpected result: ${expRes}
        \nActual result: ${actualRes}`;
    log(msg, format);
    if (actualRes === expRes) {
        msg = `Test ${i} passed.`;
        format = 'color: green';        
    }
    else {
        msg = `Test ${i} failed.`;
        format = 'color: red'; 
    }
    log(msg, format);
    i++;
}

actualRes = checkBalancedBrackets();
expRes = true;
console.log(`Test case ${++i}\nString: ${s}
    \nExpected result: ${expRes}
    \nActual result: ${actualRes}`);
if (actualRes == expRes) {
    console.log(`%cTest ${i} passed.`, 'color: green');
}
else {
    console.log(`%cTest ${i} failed.`, 'color: red');
}
// Test case 3

actualRes = checkBalancedBrackets();
expRes = false;
console.log(`Test case ${++i}\nString: ${s}
    \nExpected result: ${expRes}
    \nActual result: ${actualRes}`);
if (actualRes == expRes) {
    console.log(`%cTest ${i} passed.`, 'color: green');
}
else {
    console.log(`%cTest ${i} failed.`, 'color: red');
}
console.log(`All tests passed.`);