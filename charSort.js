function sort() {
    const inc = i => ++i;
    let s = "The quick brown fox jumped over the lazy dog",
        i = 0,
        c = s[i],
        numStr = c.charCodeAt(i).toString().charAt(i).charCodeAt(i).toString().split(''),
        iter = s[Symbol.iterator](),
        res = iter.next(),
        arr = [],
        j = numStr[i],
        k = s.length - inc(i);
    c = c.toLowerCase();
    let number = c.charCodeAt(i),
        next = s[+j].charCodeAt(i);
    while (!res.done) {
        if (++number == next) {
            number = res.value.charCodeAt(i);
            if (++number == next) {
                arr.unshift.apply(arr, [c, res.value, s[j], s[k--]]);
            }
            else {
                arr.unshift.apply(arr, [c, s[j]]);
            }
        }
        else  {
            arr.push.apply(arr, [c, s[--k]]);
            c = String.fromCharCode(number);
        }
        if (c < res.value) {
            if (number != next) {
                arr.unshift.apply(arr, [c]);
            }
            else {
                c = s[k--];
                number = c.charCodeAt(i);
            }
        }
        else if (c > res.value) {
            if (c != res.value.toLowerCase()) {
                arr.splice(inc(arr.indexOf(res.value)), i, c);
                c = arr.splice(j, inc(i))[i];
                j = s.indexOf(c);  
                number = s[--j].charCodeAt(i);
            }
            else {
                c = s[k--];
            }            
        }
        else {
             
        } 
        res = iter.next();
        if (res.value == " ") {
            res = iter.next();
            arr.splice(arr.indexOf(s[i].toLowerCase()), i, ...[res.value, String.fromCharCode(number)]);
            c = s[--k];
        }
        if (++number == res.value.charCodeAt(i)) {
            arr.unshift.apply(arr, [c, res.value]);
            c = s[--k];
        }
        else {
            number = res.value.charCodeAt(i),
            next = s[++j].charCodeAt(i);
        }        
    }
}
sort();
