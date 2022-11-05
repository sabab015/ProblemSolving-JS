var a = 40;
var b = 300;
var c = 500;

if(a>b){
    if(a>c){
        console.log("a is biggest");
    }else{
        console.log("c is biggest");
    }
}else{
    if(b>c){
        console.log("b is biggest");
    }else{
        console.log("c is biggest");
    }
}

var max = Math.max(a,b,c);
console.log(max);