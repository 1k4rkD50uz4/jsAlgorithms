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
    let i=0;
    for (let c of s) {
        if (i > 0) {
            let num = c.charCodeAt(0),
                matchNum = s[i - 1].charCodeAt(0);
            if (num == matchNum + 1 || num == matchNum + 2) {
                i--;
                if (i == 0) {
                    return true;
                }
                continue;
            }
            else {
                if (!(() => '{[('.includes(c))()) {
                    return false;
                }
            }
        }
        i++;
    }
}
// Test case 1
let s = '{([{}])}',
    actualRes = checkBalancedBrackets(),
    expRes = true;
if (actualRes == expRes) {
    console.log(`Test 1 of 3 passed.`);
}
// Test case 2
s = '{}[]()';
actualRes = checkBalancedBrackets();
expRes = true;
if (actualRes == expRes) {
    console.log(`Test 2 of 3 passed.`);
}
// Test case 3
s = '{(}';
actualRes = checkBalancedBrackets();
expRes = false;
if (actualRes == expRes) {
    console.log(`Test 3 of 3 passed.`);
}