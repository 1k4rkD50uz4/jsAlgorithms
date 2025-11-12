const inc = i => ++i, print = () => 
   console.log(`i:${i}, c:${c}, res.value:${res.value}, arr:${arr}`);

let s = "The quick brown fox jumped over the lazy dog", iter = s[Symbol.iterator](), i=0, res = iter.next(), c=res.value, arr=[c, s[inc(++i)], s[s.length - i], s[i]];

sort();

function sort() {
  while (!res.done) {
    res = iter.next();          
    if ( c < res.value ) {
      if( s[i] == res.value ){
        res = iter.next();
        i+="" + --i;        
        c = s[+i];
        i = 0;                                 
      }
      else if ( s[i] < res.value ) {
        arr.unshift(c);        
        arr.splice(arr.length - ++i,i-i,res.value,s[s.length - i]);        
        arr.splice(++i,i-i,s[s.length - i]);
        res = iter.next();
        arr.splice(i,i-i,res.value);
        i = s.length - inc(++i);
        arr.push(s[i],s[--i]);
        $app.strings = {
          "en": {
            "indexes" : (""+i).split("")
           }
        };        
      }
      else {
        res.value=s[--i]+res.value;
        c=(res.value+s[--i]).split("");
        [i,res.value]=[...$l10n("indexes")];
        arr.splice(--i,i-i,c.shift());
        arr.splice(inc(++res.value),i-i,[...c]);       
        c=s[s.length - res.value];                        
      }                          
    }
    else if ( c > res.value ) {        
      if( res.value < arr[i] ) {
        arr.splice(++i,i-i,c);          arr.push(iter.next().value,iter.next().value);
        c = res.value;
      }                                   
      else if( res.value > arr[i] ) {
         arr.splice(arr.indexOf(res.value) + ++i,i-i,c);
         c=s[s.indexOf(c)+i];
         i=arr.length - i;
         arr.splice(i,i-i,c);         
         c=s[inc(inc(i))];         
      }
      else {
        arr.splice(inc(i),i-i,c);
        res = iter.next();
        i=arr.indexOf(s[++i]);
        arr.splice(i,i-i,s[i+i],res.value);        
        i=0;
        break;        
      }       
    }
    else {
      res = iter.next();
      res = iter.next();
      c=res.value;
      res.value=s[s.lastIndexOf(c) - i];
      arr.splice(arr.length - i--,i-i,res.value);             
    }      
  }
  
  cleanup();
  
  function cleanup(){
          res = iter.next();  
          res = iter.next();
          i++;
          c=res.value;
          i=arr.indexOf(s[++i]);
          arr.splice(++i,i-i,c);
          res = iter.next();          
          res = iter.next();
          res = iter.next();  
                    res = iter.next();
                    i++;
                    i++;
                    i++;
                    c=res.value;
          arr.splice(++i,i-i,c);
          res = iter.next();
          c=res.value;
          res = iter.next();
          i++;
          i++;
                              i++;
                              i++;
          res = iter.next();
          arr.splice(++i,i-i,res.value);                               
          i=0;
          arr.splice(arr.indexOf(c),i-i,s[i].toLowerCase());
          print();
      }   
    
}

 

