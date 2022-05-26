
var result=0;

function add(a,b,cb) {
  setTimeout(() => {result=a+b; cb()} , 2000);
}

const print = ()=> {console.log(result)};


add(2,3, print);