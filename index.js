
function mul(a) {
    a=document.getElementById("text1").value;
    return function (b) {
       
         b=document.getElementById("text2").value;
           return function (c){
           
            c=document.getElementById("text3").value;
           alert("multiply is  " + a*b*c);
       }       
   }
}
mul(a)(b)(c);
