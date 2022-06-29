function checkBalancedBrackets(s) {
    const Stack = () => ({
        Bracket: {
            get data() {
                return this._data ? this._data : undefined;
            },
            set data(inData) {
                if (inData != undefined) {
                    this._data = inData;
                }
            },
            get next() {
                return this._next ? this._next : undefined;
            },
            set next(nextBracket) {
                if (nextBracket != undefined) {
                    this._next = nextBracket;
                }
            }
        },
        get top() {
            return this._top ? this._top : null;
        },
        set top(inData) {
            if (inData != undefined) {
                this._top = inData;
            }
        },
        pop: function () {
            let item = null;
            if (top != null) {
                item = top.data;
                top = top.next;
                return item;
            }
        },
        push: function (data) {
            let _bracket = Object.create(this.Bracket);
            _bracket.data = data;
            _bracket.next = this.top;
            this.top = _bracket;
        },
        peek: function () {
            if (top != null) {
                return top.data;
            }
        },
        isEmpty: function () {
            return top == null;
        }
    }),
    isBalanced = checkValue => {    
        if (!checkValue) {
            const getKey = key => brackets.filter(item => item.key == key)[0];
            let prevKey = getKey(c),
                curKey = getKey(res.value);                
            if (prevKey && curKey) {
                if (prevKey.key != curKey.key || prevKey.value == curKey.key) {
                    balanced = true;
                    i++;
                }
            }
            else if (prevKey && !curKey) {
                if (prevKey.value == res.value) {
                    balanced = true;
                    i++;
                }
                else {
                    balanced = false;
                    i++;
                }
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
        stack = Stack(),
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
expRes = true;
if (actualRes == expRes) {
    console.log(`Test 3 of 3 passed.`);
}