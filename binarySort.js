function main() {
    const inc = i => ++i,
        dec = i => --i;
    let s = "The quick brown fox jumped over the lazy dog",
        iter = s[Symbol.iterator](),
        res = iter.next(),
        i=0,
        c = res.value,
        arr = [],
        _s,
        prepend = (function () {
            const compare = val => c < val ? -1 : c > val ? 1 : 0;
            let _i, c = res.value, _c;
            let f = function () {
                let _res = compare(res.value);
                if (_res == -1) {
                    arr.unshift(res.value);
                    return true;
                }
                else if (_res == 1) {
                    arr.unshift(s[inc(s.lastIndexOf(res.value))]);
                    _s = s.slice(inc(s.indexOf(res.value)));
                    _s = _s.slice(i);
                    //if (!_s) {
                        

                    //    //c = c.toLowerCase();
                    //    return false;
                    //}
                    //else {
                    //    //i = inc(_s.indexOf(res.value));
                        
                       
                    //    c = _s[inc(i)];
                    //    arr.unshift(c);
                    //    c = String.fromCharCode(parseInt('' + _i, 16)).toLowerCase();
                    //    arr.unshift(c);
                    //    arr.push(_s[0]);
                    //    return true;
                    //}
                }
            };
            return f;
        })();
    function sort() { 
        updateVars();
        while (!res.done) {
            if (prepend()) {
                updateVars();
            }
            else {
                continue;
            }            
        }
    }
    function updateVars() {  
        res = iter.next();
        c = res.value;
        i++;
        //if (res.value == " ") {
        //    let temp = s.substr(inc(s.indexOf(res.value)));
        //    temp = temp.substr(inc(temp.indexOf(res.value)));
        //    let i = 0, _c, arr = [];
        //    c = s[i].toLowerCase();
        //    res = iter.next();
        //    while (!res.done) {
        //        if (res.value < c) {
        //            arr.unshift.apply(arr, [res.value, c]);
        //        }
        //        else if (res.value > c) {
        //            arr.push(res.value);
        //            arr.unshift(_c);
        //        }
        //        _c = temp[i++];
        //        res = iter.next();
        //    }
        //}
    }
    return sort();
}
main();