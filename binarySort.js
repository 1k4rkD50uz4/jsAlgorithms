function main() {
    const inc = i => ++i,
        compare = (c,val) => c < val ? true : false;
    let s = "The quick brown fox jumped over the lazy dog",
        i = 0,
        c,
        arr = [];
        obj =
        {
            i: i,
            cb: function() {
                this.i++;
                return s[this.i];
            }
        };
    function sort() {
        let i = !this.i ? 0 : this.i,
            c = s[i],
            res = { value: this.cb(), done: false };
        if (!set(res.value)) {
            res.value = this.cb();
        }
        function set(value) {
            if (compare(c, value)) {
                if (c == " ") {
                    let _s = s.slice(++i);
                    i = _s.indexOf(c);
                }
                else {
                    c = value;
                }
            }
            else {
                if (c == " ") {
                    let _s = s.slice(++i);
                    i = _s.indexOf(c);
                }
                else {
                    arr.push(value);
                    return false;
                }
            }
        }
        function get() {
            
        }
        return sort.call(obj)
    }    
    return sort.call(obj);
}
main();