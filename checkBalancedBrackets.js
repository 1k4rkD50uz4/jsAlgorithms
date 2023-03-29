import { inc, log } from './utils/helperFunctions.js';
import client from '../client/app.js';
//***********************************************************************************************************
// Problem Statement:
// Given a string with brackets (parenthesis (), brackets [] and braces {}), write a function to check if
// the brackets are balanced.
//
// Solution: 
// 
//***********************************************************************************************************
export function checkBalancedBrackets() {
    const iter = s[Symbol.iterator]();
    let res = iter.next(),
        i = 0,
        mid = s.length % 2 == 0 ? s.length / 2 : (s.length - 1) / 2,
        obj = Object.create({ next: next }, {
            i: {
                value: i,
                writable: true
            },
            c: {
                value: res.value
            },
            match: {
                value: undefined,
                writable: true
            }
        });
    obj.match = obj.next();
    while (!res.done) { 
        res = iter.next();
        if (obj.c != res.value) {
            let i = s.substring(inc(s.indexOf(obj.c)), s.indexOf(obj.match)).indexOf(obj.c);
            if (!i) {
                i = s[s.length - inc(i)];
            }
            else {
                i = inc(obj.i + i);
                obj.i = i;
                client.write(JSON.stringify(obj));
            }
        }
    }
    function next() {
        let n = this.c.charCodeAt(0),
            s = n.toString(2);
        // get the bracket's closing bracket by checking it's binary value to determine
        // it's ascii code
        if (s.substring(s.length - 2) === '11') {
            return String.fromCharCode(inc(++n));
        }
        else {
            return String.fromCharCode(inc(n));
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