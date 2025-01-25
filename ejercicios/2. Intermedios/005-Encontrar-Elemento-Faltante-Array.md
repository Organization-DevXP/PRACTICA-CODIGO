# Ejercicio 005: Encontrar el Elemento Faltante en un Array

**Dificultad:** Intermedio  
**Categoría:** Arrays y Algoritmos

## Enunciado

Escribe una función que reciba un array con números enteros consecutivos, excepto por un número faltante, y devuelva ese número faltante. El array está desordenado.

## Reglas

1. El array contendrá números enteros consecutivos, excepto por un número faltante.
2. El número faltante será único.
3. El rango de números estará entre 1 y el tamaño del array más 1.

## Código Base

```javascript
/**
 * Función para encontrar el número faltante en una secuencia de enteros consecutivos.
 * @param {number[]} array - El array con los números consecutivos con un número faltante.
 * @returns {number} - El número faltante en la secuencia.
 */
function encontrarFaltante(array) {
  // Escribe tu solución aquí
  return -1; // Cambia esto con el resultado correcto
}
```

## Ejemplos de uso

```javascript
// Entrada 1:
const array1 = [1, 2, 4, 5, 6];
console.log(encontrarFaltante(array1));
// Salida esperada: 3

// Entrada 2:
const array2 = [15, 12, 11, 14, 10];
console.log(encontrarFaltante(array2));
// Salida esperada: 13

// Entrada 3:
const array3 = [3, 4, 6, 7, 8];
console.log(encontrarFaltante(array3));
// Salida esperada: 5
```
