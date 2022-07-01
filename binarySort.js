function main() {
    const inc = i => ++i;
    let s = "The quick brown fox jumped over the lazy dog",
        iter = s[Symbol.iterator](),
        res = iter.next(),
        c = res.value,
        arr=[],
        prepend = (function () {
            const compare = val => c < val ? -1 : c > val ? 1 : 0;
            let c = res.value;
            let f = function () {
                let _res = compare(res.value);
                if (_res == -1) {
                    arr.unshift(res.value);
                }
            };
            return f;
        })();
    function sort() { 
        updateVars();
        while (!res.done) {
            prepend();
            updateVars();
        }
    }
    function updateVars() {
        res = iter.next();
        c = res.value;
        if (res.value == " ") {
            let i = inc(s.lastIndexOf(res.value));
            res.value = s[i];
            i = inc(i);
            c = s[i]; 
            i = s.indexOf(c);
            c = s[inc(i)];
            while (i != -1) {
                
            }
        }
    }
    return sort();
}
main();