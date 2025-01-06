/**
 * Función para eliminar elementos duplicados de un array.
 * @param {Array} arr - El array del que se eliminarán 
duplicados.
 * @returns {Array} - Un nuevo array sin duplicados.
 */
function eliminarDuplicados(arr) {
    const nuevoArray = [...new Set(arr)];
    return nuevoArray;
}

// Entrada 1:
const array1 = [1, 2, 2, 3, 4, 4, 5];
console.log(eliminarDuplicados(array1));
// Salida esperada: [1, 2, 3, 4, 5]

// Entrada 2:
const array2 = ["a", "b", "d", "a", "c", "b"];
console.log(eliminarDuplicados(array2));
// Salida esperada: ["a", "b", "c"]

// Entrada 3:
const array3 = [true, false, true, true];
console.log(eliminarDuplicados(array3));
// Salida esperada: [true, false]

// Entrada 4:
const array4 = [1, "1", 2, "2"];
console.log(eliminarDuplicados(array4));
// Salida esperada: [1, "1", 2, "2"]
