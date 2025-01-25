# Ejercicio 008: Sumar Elementos de un Array

**Dificultad:** Fácil  
**Categoría:** Manipulación de arreglos  

## Enunciado

Escribe una función que reciba un array de números y devuelva la suma de todos los elementos. Si el array está vacío, debe devolver `0`.

## Reglas
1. La función debe manejar arrays vacíos devolviendo `0`.
2. Solo se sumarán los valores numéricos dentro del array.
3. La entrada será siempre un array válido.

## Código Base

```javascript
/**
 * Función para sumar los elementos de un array.
 * @param {number[]} numeros - El array de números a sumar.
 * @returns {number} - La suma de los elementos del array.
 */
function sumarElementos(numeros) {
  // Escribe tu solución aquí
  return 0; // Cambia esto con el resultado correcto
}
```

## Ejemplos de uso

```javascript
// Entrada 1:
const array1 = [1, 2, 3, 4, 5];
console.log(sumarElementos(array1)); 
// Salida esperada: 15

// Entrada 2:
const array2 = [10, -2, 3];
console.log(sumarElementos(array2)); 
// Salida esperada: 11

// Entrada 3:
const array3 = [];
console.log(sumarElementos(array3)); 
// Salida esperada: 0
```
