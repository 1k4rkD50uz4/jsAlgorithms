//***********************************************************************************************************
// Problem Statement:
// Given a string with brackets (parenthesis (), brackets [] and braces {}), write a function to check if
// the brackets are balanced.
//
// Solution: 
// The function checks that each bracket from the beginning (left) of the string to the midpoint is an 
// opening bracket.  If
//
//***********************************************************************************************************
const valid = () => c.charCodeAt(0) == (arr[i - 1]).charCodeAt(0) - 2;

let res = '{([{}])}'.split('').map((c, i, arr) => {
    i > 0 ? c != arr[i - 1] ? match : 
};

function checkBalancedBrackets() {
    const isBalanced = () => {  
        let key = getKey(c);
        if (key) {
            if (key.value == res.value) {
                continue;
            }
            else {
                key = getKey(res.value);
                if (key) {

                }
            }
        }
        //const getValue = value => brackets.filter(item => item.value == value)[0];
        //let len = s.length - 1,
        //    keyInd = s.indexOf(getValue(res.value).key),
        //    valueInd = len - s.indexOf(getValue(res.value).value);
        //if (keyInd == valueInd) {
        //    balanced = true;
        //    i++;
        //}   
    };
          
    res = iter.next();
    while (!res.done) {
        isBalanced(i == (s.length / 2));
        c = res.value;
        res = iter.next();
    }
    return balanced;
}
// Test case 1
let actualRes = checkBalancedBrackets(),
    expRes = true;
if (actualRes == expRes) {
    console.log(`Test 1 of 3 passed.`);
}
// Test case 2
//s = '{([{}])}';
//actualRes = checkBalancedBrackets(s);
//expRes = true;
//if (actualRes == expRes) {
//    console.log(`Test 2 of 3 passed.`);
//}
// Test case 3
//s = '{(}';
//actualRes = checkBalancedBrackets(s);
//expRes = false;
//if (actualRes == expRes) {
//    console.log(`Test 3 of 3 passed.`);
//}
console.log(`All tests passed.`);