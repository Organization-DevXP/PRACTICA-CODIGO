# Ejercicio 003: Contar Palabras Frecuentes

**Dificultad:** Intermedio  
**Categoría:** Manipulación de Cadenas y Arrays

## Enunciado

Escribe una función que reciba un texto como parámetro y determine cuáles son las palabras más repetidas en él. La función debe retornar un objeto donde las claves sean las palabras y los valores sean la cantidad de veces que aparecen.

## Reglas

1. El texto puede contener mayúsculas y minúsculas, pero la función debe ser insensible a mayúsculas.
2. Solo se deben contar las palabras (ignorando signos de puntuación y otros caracteres no alfabéticos).
3. La función debe devolver un objeto con las palabras y su frecuencia de aparición en el texto.

## Código Base

```javascript
/**
 * Función para contar las palabras más frecuentes en un texto.
 * @param {string} texto - El texto a analizar.
 * @returns {Object} - Un objeto con las palabras como claves y su frecuencia como valores.
 */
function contarPalabrasFrecuentes(texto) {
  // Escribe tu solución aquí
  return {}; // Cambia esto con el resultado correcto
}
```

## Ejemplos de uso

```javascript
// Entrada 1:
const texto1 = "El sol brilla en el cielo. El cielo es azul.";
console.log(contarPalabrasFrecuentes(texto1));
// Salida esperada: { el: 2, cielo: 2, sol: 1, brilla: 1, en: 1, es: 1, azul: 1 }

// Entrada 2:
const texto2 =
  "JavaScript es un lenguaje de programación. JavaScript es muy popular.";
console.log(contarPalabrasFrecuentes(texto2));
// Salida esperada: { javascript: 2, es: 2, un: 1, lenguaje: 1, de: 1, programación: 1, muy: 1, popular: 1 }

// Entrada 3:
const texto3 = "Manzana manzana naranja pera pera pera manzana";
console.log(contarPalabrasFrecuentes(texto3));
// Salida esperada: { manzana: 3, pera: 3, naranja: 1 }
```
