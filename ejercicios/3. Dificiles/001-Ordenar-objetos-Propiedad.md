# Ejercicio 001: Ordenar Objetos por Propiedad

**Dificultad:** Difícil  
**Categoría:** Manipulación de objetos

## Enunciado

Escribe una función que reciba un arreglo de objetos y ordene esos objetos de acuerdo con una propiedad específica. La propiedad debe ser pasada como argumento y el orden debe ser ascendente. La función debe manejar correctamente los casos en los que la propiedad no exista en algún objeto.

## Reglas
1. Los objetos pueden tener propiedades adicionales, pero la ordenación solo debe basarse en la propiedad proporcionada.
2. Si un objeto no tiene la propiedad especificada, debe ser colocado al final de la lista.
3. Si hay objetos con el mismo valor en la propiedad especificada, deben mantenerse en el orden relativo original.

## Código Base

```javascript
/**
 * Función para ordenar un arreglo de objetos por una propiedad.
 * @param {Array} objetos - El arreglo de objetos a ordenar.
 * @param {string} propiedad - La propiedad por la que ordenar.
 * @returns {Array} - El arreglo ordenado de objetos.
 */
function ordenarObjetos(objetos, propiedad) {
  // Escribe tu solución aquí
  return objetos; // Cambia esto con el resultado correcto
}
```

## Ejemplos de uso

```javascript
// Entrada 1:
const objetos1 = [
  { nombre: 'Juan', edad: 25 },
  { nombre: 'Ana', edad: 30 },
  { nombre: 'Carlos', edad: 20 }
];
console.log(ordenarObjetos(objetos1, 'edad'));
// Salida esperada: [
//   { nombre: 'Carlos', edad: 20 },
//   { nombre: 'Juan', edad: 25 },
//   { nombre: 'Ana', edad: 30 }
// ]

// Entrada 2:
const objetos2 = [
  { nombre: 'Juan', edad: 25 },
  { nombre: 'Ana', edad: 30 },
  { nombre: 'Carlos' }
];
console.log(ordenarObjetos(objetos2, 'edad'));
// Salida esperada: [
//   { nombre: 'Juan', edad: 25 },
//   { nombre: 'Ana', edad: 30 },
//   { nombre: 'Carlos' }
// ]

// Entrada 3:
const objetos3 = [
  { nombre: 'Ana', edad: 30 },
  { nombre: 'Carlos', edad: 20 },
  { nombre: 'Juan', edad: 25 }
];
console.log(ordenarObjetos(objetos3, 'nombre'));
// Salida esperada: [
//   { nombre: 'Ana', edad: 30 },
//   { nombre: 'Carlos', edad: 20 },
//   { nombre: 'Juan', edad: 25 }
// ]
```

## Contribuir

- ¡Gracias por tu interés en contribuir a este 
repositorio de ejercicios de programación! Si 
tienes alguna solución para los ejercicios o 
deseas agregar nuevos, por favor sigue las pautas 
de contribución establecidas en el archivo 
[CONTRIBUTING.md](../../CONTRIBUTING.md).

- Nombre del creador: Eduardo