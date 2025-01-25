# Ejercicio 004: Generar un Array de Números Primos

**Dificultad:** Intermedio  
**Categoría:** Matemáticas y Arrays  

## Enunciado

Escribe una función que reciba un número entero positivo como parámetro y devuelva un array con todos los números primos menores o iguales a ese número.

## Reglas

1. Un número primo es aquel que solo es divisible por 1 y por sí mismo.
2. Si el número ingresado es menor que 2, la función debe retornar un array vacío.
3. La función debe manejar entradas grandes de manera eficiente.

## Código Base

```javascript
/**
 * Función para generar un array de números primos.
 * @param {number} limite - El número límite hasta el cual buscar números primos.
 * @returns {number[]} - Un array con los números primos encontrados.
 */
function generarPrimos(limite) {
  // Escribe tu solución aquí
  return []; // Cambia esto con el resultado correcto
}
```

## Ejemplos de uso

```javascript
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
```
