//section 2 sample problems

let x=7,delta,pos, neg;

let a=0,b=3,c=4;

function secDeg(){

   delta =Math.sqrt(Math.pow(b, 2) -4*a*c,2);
    //go= a*Math.pow(x, 2)+b*x+c;
   
    pos = ((-1*b)+delta)/2*a;
    neg = ((-1*b)-delta)/2*a;

}


function tellDeg(){
    let doT=document.getElementById("tell");

    doT.innerHTML=go;
}

//again, this only tests that, indeed the variable passed in on line 5 will create a quadratic equation
