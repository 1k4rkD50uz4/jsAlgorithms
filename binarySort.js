function main() {
    const inc = i => ++i,
        compare = val => c < val ? -1 : c > val ? 1 : 0;
    let s = "The quick brown fox jumped over the lazy dog",
        i = 0,
        arr = [],
        cb = inc;
        prepend = (function () {            
            let i = 0,
                j = inc(i),
                k = inc(j),
                c = s[k];
            let f = function () {
                arr.unshift(c);
                //c = String.fromCharCode(s[i].toLowerCase().charCodeAt(i));
                c=s[inc(k)];
            };
            return f;
        })(),
        done=false;
    function sort() { 
        while (!done) {
            prepend();          
        }
    }
    return sort();
}
main();