let contador = 1;
let cantidadMultiplo = 0;
while (contador <= 100) {
    if(contador % 6 == 0){
        console.log("Las multiplos del 6 al 100 son: ",contador);
        cantidadMultiplo++
    }
    contador++;
}
console.log("La cantidad de multiplos es: ",cantidadMultiplo);