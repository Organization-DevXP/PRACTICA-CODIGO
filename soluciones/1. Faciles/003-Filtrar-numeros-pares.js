/**
 * Función para filtrar los números pares de un array.
 * @param {number[]} numeros - Array de números enteros.
 * @returns {number[]} - Nuevo array con los números pares.
 */
function filtrarPares(numeros) {
    numerosFiltrados = numeros.filter(numero => numero % 2 === 0);
    return numerosFiltrados;
}

// Entrada 1:
const numeros1 = [1, 2, 3, 4, 5];
console.log(filtrarPares(numeros1));
// Salida esperada: [2, 4]

// Entrada 2:
const numeros2 = [7, 9, 13];
console.log(filtrarPares(numeros2));
// Salida esperada: []

// Entrada 3:
const numeros3 = [10, 22, 35, 48];
console.log(filtrarPares(numeros3));
// Salida esperada: [10, 22, 48]