/**
 * Función para encontrar el número faltante en una secuencia de enteros consecutivos.
 * @param {number[]} array - El array con los números consecutivos con un número faltante.
 * @returns {number} - El número faltante en la secuencia.
 */
function encontrarFaltante(array) {
    const arrayOrdenado = array.sort((a, b) => a - b);
    for (let i = 0; i < arrayOrdenado.length; i++) {
        if (arrayOrdenado[i] !== i + arrayOrdenado[0]) {
            return i + arrayOrdenado[0];
        }
    }
}

// Entrada 1:
const array1 = [1, 2, 4, 5, 6];
console.log(encontrarFaltante(array1));
// Salida esperada: 3

// Entrada 2:
const array2 = [15, 12, 11, 14, 10]
console.log(encontrarFaltante(array2));
// Salida esperada: 13

// Entrada 3:
const array3 = [3, 4, 6, 7, 8];
console.log(encontrarFaltante(array3));
// Salida esperada: 5
