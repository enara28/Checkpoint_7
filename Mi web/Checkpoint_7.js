/* 
Y por último debes realizar el siguiente ejercicio práctico, y subirlo a tu repositorio en Git-Hub para revisarlo
-Cree una función JS que acepte 4 argumentos.
Suma los dos primeros argumentos, luego los dos segundos y multiplícalos.
Si el número creado es mayor que 50, la consola registra "¡El número es mayor que 50!".
Si es más pequeño, la consola registra "¡El número es menor que 50!"
*/

function operaciones(num_uno, num_dos, num_tres, num_cuatro) {
    total = (num_uno + num_dos) * (num_tres + num_cuatro)
    if (total > 50){
        console.log("¡El número es mayor que 50!")
    } else if (total < 50) {
        console.log("¡El número es menor que 50!")
    }
}
operaciones(1, 2, 3, 4);