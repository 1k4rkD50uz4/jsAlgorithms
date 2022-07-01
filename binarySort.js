function main() {
    const inc = i => ++i,
        dec = i => --i;
    let s = "The quick brown fox jumped over the lazy dog",
        iter = s[Symbol.iterator](),
        res = iter.next(),
        c = res.value,
        arr = [],
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
            arr.unshift.apply(arr, [String.fromCharCode(parseInt('' + i, 16)).toLowerCase(), s[i]]); 
            i = inc(inc(i));
            c = arr.pop();
            arr.push(s[i]);
            arr.push(c);
            res = iter.next(); 
            c = res.value;
            res = iter.next();
            i = 0;
            c += String.fromCharCode(s[i].toLowerCase().charCodeAt(i));
            c += res.value;
            res = iter.next();
            arr.push(res.value);
            res = iter.next();
            arr.splice(inc(i), i, res.value);
            res = iter.next();
            arr.push(res.value);
            res = iter.next();
            res = iter.next();
            arr.splice(inc(i), i, res.value);
            res = iter.next();
            c = c.split('');
            c.splice(inc(i), i, res.value);
            res = iter.next();
            c.unshift(res.value);
            res = iter.next();
            i = arr.length - c.length;
            c.push(res.value);
            res = iter.next();
            c.unshift(res.value);
            arr = arr.concat(c);
            res = iter.next();
            i = inc(i);
            res = iter.next();
            arr.splice(i, 0, res.value);
            i++;
            res = iter.next();
            i++;
            c = res.value;
            res = iter.next();
            c += res.value;
            i++;
            res = iter.next();
            i++;
            res = iter.next();
            arr.splice(i, 0, res.value);

            arr.push(c);
        }
    }
    return sort();
}
main();