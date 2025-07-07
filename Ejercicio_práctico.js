/* Ejercicio práctico*/

function operaciones(num_uno, num_dos, num_tres, num_cuatro) {
    total = (num_uno + num_dos) * (num_tres + num_cuatro)
    if (total > 50){
        console.log("¡El número es mayor que 50!")
    } else if (total < 50) {
        console.log("¡El número es menor que 50!")
    }
}
operaciones(1, 2, 3, 4);