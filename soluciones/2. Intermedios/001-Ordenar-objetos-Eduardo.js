/**
 * Función para ordenar un arreglo de objetos por 
la propiedad edad.
 * @param {Array} personas - El arreglo de objetos
con las propiedades nombre y edad.
 * @returns {Array} - El arreglo ordenado por edad
 */
function ordenarPorEdad(personas) {
    return personas.sort((a, b) => {
        if (a.edad === b.edad) {
            return a.nombre.localeCompare(b.nombre);
        }
        return a.edad - b.edad;
    });
}

// Entrada 1:
const personas1 = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 30 },
    { nombre: "Carlos", edad: 22 }
];
console.log(ordenarPorEdad(personas1));

// Entrada 2:
const personas2 = [
    { nombre: "Pedro", edad: 40 },
    { nombre: "Marta", edad: 40 },
    { nombre: "Juan", edad: 35 }
];
console.log(ordenarPorEdad(personas2));

// Entrada 3:
const personas3 = [
    { nombre: "Elena", edad: 28 },
    { nombre: "Mario", edad: 23 }
];
console.log(ordenarPorEdad(personas3)); 