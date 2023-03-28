let limite = parseInt(prompt("Ingrese el limite que desea"));
let contador = 0;
let cantidadNumero = 0;
while (contador <= limite ) {
    if (contador % 2 !=  0){
        console.log(contador,"es impar")
        cantidadNumero++
    }
    contador++;
}
console.log("La cantidad de impares es: ",cantidadNumero);