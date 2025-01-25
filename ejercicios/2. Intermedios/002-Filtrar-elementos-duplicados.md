# Ejercicio 002: Eliminar Duplicados

**Dificultad:** Intermedio  
**Categoría:** Manipulación de Arrays

## Enunciado

Crea una función que reciba un array como parámetro y devuelva un nuevo array sin elementos duplicados. La función debe mantener el orden original de los elementos.

## Reglas

1. El array puede contener cualquier tipo de dato (números, cadenas, objetos, etc.).
2. No se permite utilizar librerías externas.
3. La función debe retornar un nuevo array y no modificar el array original.

## Código Base

```javascript
/**
 * Función para eliminar elementos duplicados de un array.
 * @param {Array} arr - El array del que se eliminarán duplicados.
 * @returns {Array} - Un nuevo array sin duplicados.
 */
function eliminarDuplicados(arr) {
  // Escribe tu solución aquí
  return []; // Cambia esto con el resultado correcto
}
```

## Ejemplos de uso

```javascript
// Entrada 1:
const array1 = [1, 2, 2, 3, 4, 4, 5];
console.log(eliminarDuplicados(array1));
// Salida esperada: [1, 2, 3, 4, 5]

// Entrada 2:
const array2 = ["a", "b", "a", "c", "b"];
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
```
