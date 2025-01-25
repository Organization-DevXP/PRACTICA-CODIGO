# Ejercicio 006: Convertir Cadena en CamelCase

**Dificultad:** Intermedio  
**Categoría:** Manipulación de cadenas

## Enunciado

Escribe una función que transforme una cadena de palabras separadas por espacios o guiones en formato camelCase. La primera palabra debe ir en minúsculas y las siguientes deben empezar con mayúsculas sin espacios ni guiones.

## Reglas

1. La cadena de entrada puede contener palabras separadas por espacios o guiones.
2. La primera palabra debe ir en minúsculas.
3. Las siguientes palabras deben ir en mayúsculas (solo la primera letra).
4. El formato de salida debe ser camelCase, sin espacios ni guiones.

## Código Base

```javascript
/**
 * Función para convertir una cadena a formato camelCase.
 * @param {string} cadena - La cadena de palabras a convertir.
 * @returns {string} - La cadena convertida a formato camelCase.
 */
function convertirCamelCase(cadena) {
  // Escribe tu solución aquí
  return ""; // Cambia esto con el resultado correcto
}
```

## Ejemplos de uso

```javascript
// Entrada 1:
const cadena1 = "convertir cadena en camel case";
console.log(convertirCamelCase(cadena1));
// Salida esperada: "convertirCadenaEnCamelCase"

// Entrada 2:
const cadena2 = "esto-es un ejemplo";
console.log(convertirCamelCase(cadena2));
// Salida esperada: "estoEsUnEjemplo"

// Entrada 3:
const cadena3 = "cambio de formato";
console.log(convertirCamelCase(cadena3));
// Salida esperada: "cambioDeFormato"
```
