
let vueltas;

let botontirar=document.getElementById("botontirar");
let botonparar=document.getElementById("botonpara");

botonparar.addEventListener("click", function() {
    clearInterval(vueltas);
    
});
botontirar.addEventListener("click",function (){
    vueltas=setInterval(tirar,120);
    console.log("funciona");
})
function tirar(){
    let numeroRando1=  Math.ceil(Math.random()*5);
    let numeroRando2=  Math.ceil(Math.random()*5);
    document.getElementById("dado1").src="/img/cara"+numeroRando1+".jpg";
    document.getElementById("dado2").src="/img/cara"+numeroRando2+".jpg";  
}





