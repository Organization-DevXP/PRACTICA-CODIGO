/**
 * Función para generar un array de números primos.
 * @param {number} limite - El número límite hasta el cu
buscar números primos.
 * @returns {number[]} - Un array con los números primos
encontrados.
 */
function generarPrimos(limite) {
    const element = [];
    for (let i = 2; i <= limite; i++) {
        if (esPrimo(i)) {
            element.push(i);
        }
    }
    return element;
}

function esPrimo(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) { 
        if (num % i === 0) return false;
    }
    return true;
}

// Entrada 1:
const limite1 = 10;
console.log(generarPrimos(limite1));
// Salida esperada: [2, 3, 5, 7]

// Entrada 2:
const limite2 = 20;
console.log(generarPrimos(limite2));
// Salida esperada: [2, 3, 5, 7, 11, 13, 17, 19]

// Entrada 3:
const limite3 = 1;
console.log(generarPrimos(limite3));
// Salida esperada: []

