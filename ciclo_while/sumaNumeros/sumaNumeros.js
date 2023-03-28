let limite = parseInt(prompt("Ingrese el numero limite: "));
let contador = 1;
let suma = 0;

while (contador <= limite ) {
    suma = contador + suma ;
    contador++
}
console.log("La suma de los numeros hasta el limite es: ",suma);
