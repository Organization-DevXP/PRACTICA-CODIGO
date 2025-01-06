# Ejercicio 001: Ordenar Objetos

**Dificultad:** Intermedio  
**Categoría:** Manipulación de Arrays y Objetos

## Enunciado

Escribe una función que reciba un arreglo de objetos, donde cada objeto tiene las propiedades `nombre` (cadena de texto) y `edad` (número). La función debe ordenar el arreglo de objetos por la propiedad `edad` de menor a mayor.

## Reglas

1. Los objetos deben ordenarse según la propiedad `edad`.
2. El arreglo de entrada no está vacío.
3. El arreglo puede contener objetos con el mismo valor en la propiedad `edad`, en cuyo caso deben mantener el orden original relativo (orden estable).
4. La función debe retornar un nuevo arreglo ordenado.

## Código Base

```javascript
/**
 * Función para ordenar un arreglo de objetos por la propiedad edad.
 * @param {Array} personas - El arreglo de objetos con las propiedades nombre y edad.
 * @returns {Array} - El arreglo ordenado por edad.
 */
function ordenarPorEdad(personas) {
  // Escribe tu solución aquí
  return []; // Cambia esto con el resultado correcto
}
```

## Ejemplos de uso

```javascript
// Entrada 1:
const personas1 = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 30 },
  { nombre: "Carlos", edad: 22 },
];
console.log(ordenarPorEdad(personas1));
// Salida esperada: [
//   { nombre: "Carlos", edad: 22 },
//   { nombre: "Ana", edad: 25 },
//   { nombre: "Luis", edad: 30 }
// ]

// Entrada 2:
const personas2 = [
  { nombre: "Pedro", edad: 40 },
  { nombre: "Marta", edad: 40 },
  { nombre: "Juan", edad: 35 },
];
console.log(ordenarPorEdad(personas2));
// Salida esperada: [
//   { nombre: "Juan", edad: 35 },
//   { nombre: "Pedro", edad: 40 },
//   { nombre: "Marta", edad: 40 }
// ]

// Entrada 3:
const personas3 = [
  { nombre: "Elena", edad: 28 },
  { nombre: "Mario", edad: 23 },
];
console.log(ordenarPorEdad(personas3));
// Salida esperada: [
//   { nombre: "Mario", edad: 23 },
//   { nombre: "Elena", edad: 28 }
// ]
```

## Contribuir

- ¡Gracias por tu interés en contribuir a este repositorio de ejercicios de programación! Si tienes alguna solución para los ejercicios o deseas agregar nuevos, por favor sigue las pautas de contribución establecidas en el archivo [CONTRIBUTING.md](../../CONTRIBUTING.md).

- Nombre del creador: Eduardo
