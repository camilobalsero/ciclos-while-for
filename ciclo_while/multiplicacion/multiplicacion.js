let num1 = parseFloat(prompt("Ingrese un numero"));
let num2 = parseFloat(prompt("Ingrese otro numero"));
let contador = 1; 
let resultado = 0;

while (contador <= num2) {
    resultado = resultado + num1;
    contador++;
}
console.log("El resultado de la multiplicacion es: ",resultado);