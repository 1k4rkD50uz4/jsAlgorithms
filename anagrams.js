/*
Description:  Two words are anagrams of each other if they contain the same number of characters and the same characters.
You should only need to sort the characters in lexicographic order, and determine if all the characters in one string
are equal to and in the same order as all of the characters in the other string.
*/
const testObj=[{
  s1:"listen",
  s2:"silent",
  output:true
},
{
    s1:"angel",
    s2:"glean",
    output:0
},
{
    s1:"arc",
    s2:"car",
    output:0
},
{
    s1:"bored",
    s2:"robed",
    output:0
},
{
    s1:"players",
    s2:"parsley",
    output:0
},
{
    s1:"sadder",
    s2:"dreads",
    output:0
}];
let i=0;
while(i<testObj.length){
    console.log(chkAnagrams.call(testObj[i++]));
}
function chkAnagrams() {
    let s1=this.s1.split('').sort().join(''),
        s2=this.s2.split('').sort().join('');
    return s1.localeCompare(s2);
}
