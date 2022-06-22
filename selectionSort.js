function selectionSort() {
    const inc = i => ++i,
        incChar = c => String.fromCharCode(inc(c.charCodeAt(i))),
        foundChar = c => s.includes(c) ? arr.indexOf(c) == -1 ? true : false : false;
    let s = "The quick brown fox jumped over the lazy dog",
        i = 0,
        start = s[i],
        arr = [start],
        num = start.charCodeAt(i),
        c = String.fromCharCode(('' + ('' + num)[i].charCodeAt(i)).split('').reverse().join('')).toLowerCase(),
        end = String.fromCharCode(inc(parseInt((+('' + c.charCodeAt(i)).split('').reverse().join('')), 16))),
        done = false;
    while (!done) {
        if (foundChar(c)) {
            arr.push(c);
            if (c == end) {
                done = true;
            }
        }
        c = incChar(c);
    }
    return arr;
} 
selectionSort();
