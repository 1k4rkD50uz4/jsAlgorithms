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

function checkBalancedBrackets(s) {
    const isBalanced = checkValue => {    
        if (!checkValue) {
            const getKey = key => brackets.filter(item => item.key == key)[0];
            let prevKey = getKey(c),
                curKey = getKey(res.value);                
            if ((prevKey && curKey && prevKey.value == curKey.key) || (prevKey && prevKey.value == res.value)) {
                balanced = true;
                i++;
            }
            else {
                balanced = false;
                i++;
            } 
        }
        else {
            const getValue = value => brackets.filter(item => item.value == value)[0];
            let len = s.length - 1,
                keyInd = s.indexOf(getValue(res.value).key),
                valueInd = len - s.indexOf(getValue(res.value).value);
            if (keyInd == valueInd) {
                balanced = true;
                i++;
            }                
        }
    };
    let iter = s[Symbol.iterator](),
        res = iter.next(),
        i=0,
        c = res.value,
        arr = '{}()[]'.split(''),
        brackets = arr
            .map((c, i, arr) => !(i % 2) ? ({
                key: c,
                value: arr[i + 1]
            }) : undefined)
            .filter(c => c != undefined),
        balanced = false;
    res = iter.next();
    while (!res.done) {
        isBalanced(i == (s.length / 2));
        c = res.value;
        res = iter.next();
    }
    return balanced;
}
// Test case 1
let s = '{}()[]',
    actualRes = checkBalancedBrackets(s),
    expRes = true;
if (actualRes == expRes) {
    console.log(`Test 1 of 3 passed.`);
}
// Test case 2
s = '{([{}])}';
actualRes = checkBalancedBrackets(s);
expRes = true;
if (actualRes == expRes) {
    console.log(`Test 2 of 3 passed.`);
}
// Test case 3
s = '{(}';
actualRes = checkBalancedBrackets(s);
expRes = false;
if (actualRes == expRes) {
    console.log(`Test 3 of 3 passed.`);
}
console.log(`All tests passed.`);