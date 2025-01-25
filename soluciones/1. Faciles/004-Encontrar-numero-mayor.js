/**
 * Función para encontrar el número más grande en un 
arreglo.
 * @param {number[]} numeros - Arreglo de números.
 * @returns {number} - El número más grande del arreglo.
 */
function encontrarMayor(numeros) {
    numeroMayor = Math.max(...numeros);
    return numeroMayor;
}

// Entrada 1:
const numeros1 = [1, 2, 3, 4, 5];
console.log(encontrarMayor(numeros1));
// Salida esperada: 5

// Entrada 2:
const numeros2 = [-10, -20, -5, -30];
console.log(encontrarMayor(numeros2));
// Salida esperada: -5

// Entrada 3:
const numeros3 = [100];
console.log(encontrarMayor(numeros3));
// Salida esperada: 100