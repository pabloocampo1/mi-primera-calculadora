///////////////calculadora numero uno con manipulacion del dom|||||||||||||||||||||

const borrar = document.querySelector('.buttom_borrar')
const mainCalculadora = document.querySelector('.mainCalculadora');
const ope = document.querySelector('.operacion')
const sum = document.querySelector('#suma');
const res = document.querySelector('#resta');
const mul = document.querySelector('#multiplicacion');
const div = document.querySelector('#divicion');
const num1 = document.querySelector('#numberOne');
const num2 = document.querySelector('#numberTwo');
const resultadoCal = document.createElement('h2');


function calculadoraCalcular(){
let numero1 = Number(num1.value);
let numero2 = Number(num2.value);
let finalRes = 0;
//operaciones
if (sum.checked) {
    finalRes = numero1 + numero2;
}
else if (res.checked) {
    finalRes = numero1 - numero2;
}
else if (mul.checked) {
    finalRes = numero1 * numero2;
}
else if (div.checked) {
    finalRes = numero1 / numero2;
}


finalRes = `el resultado final es: ${finalRes}`;
resultadoCal.innerHTML = finalRes;
mainCalculadora.append(resultadoCal);



};

function mostrarSigno(){
 if(sum.checked){
    ope.innerHTML ='+'; 
 }
 else if(res.checked){
    ope.innerHTML ='-'; 
 }
 else if(mul.checked){
    ope.innerHTML ='*'; 
 }
 else if(div.checked){
    ope.innerHTML ='/'; 
 }else{
    alert("tienes que descoger una sola opcion arimetica")
 }

 //borrar todo

 borrar.addEventListener("click", function() {

    window.location.href = "http://127.0.0.1:5500/index.html";
  });

};
