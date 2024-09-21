// sort using an index and character variable 
// repeated operations in an iterator with callbacks 
// on iOS 

const fs=require("fs"),
s = "The quick brown fox jumped over the lazy dog",
inc=i=>++i,
iter = s[Symbol.iterator]();
let res = iter.next(),
i = 0,
c = s[++i],
arr = [c];
function main(){
  while(!res.done) {
    res = iter.next();
    let cur=res.value;
    if(c<cur){
      write();
      res = iter.next();
      i++;
      res = iter.next();
      i++;
      arr=[res.value,c,cur];
      res = iter.next();
      c = res.value;
      res = iter.next();
      cur=res.value;
      arr.push(cur,c);
      console.log(`i:${i},arr:${arr},cur:${cur},c:${c}`);
      break;    
    }
    else if(c>cur) {
      res = iter.next();
      c = res.value;
      res = iter.next();
      cur=res.value;
      res = iter.next();
      arr.push(res.value,c,s[i].toLowerCase(),cur);
      res = iter.next();
      c=res.value;        
    }
    else{
      c=s[s.length-i++];
      res = iter.next();
      cur=s[s.length-++i];
      arr.unshift((()=>{
        let j=i;
        i=0;
        return s[j];
      })(),s[i],cur,res.value,c);      
    }
  } 
}
function write(){
  fs.writeFileSync("strings/en.strings",arr.toString());
}
main();