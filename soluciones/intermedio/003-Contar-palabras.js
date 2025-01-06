/**
 * Función para contar las palabras más frecuentes en un 
texto.
 * @param {string} texto - El texto a analizar.
 * @returns {Object} - Un objeto con las palabras como 
claves y su frecuencia como valores.
 */
function contarPalabrasFrecuentes(texto) {
    let palabras = texto.toLowerCase().split(/\W+/);
    let frecuencias = {};
    for (let palabra of palabras) {
        if (palabra !== "") {
            frecuencias[palabra] = (frecuencias[palabra] || 0) + 1;
        }
    }
    return frecuencias; 
}

// Entrada 1:
const texto1 = "El sol brilla en el cielo. El cielo es azul.";
console.log(contarPalabrasFrecuentes(texto1));
// Salida esperada: { el: 2, cielo: 2, sol: 1, brilla: 1, en: 1, es: 1, azul: 1 }

// Entrada 2:
const texto2 =
    "JavaScript es un lenguaje de programacion. JavaScript es muy popular.";
console.log(contarPalabrasFrecuentes(texto2));
// Salida esperada: { javascript: 2, es: 2, un: 1, lenguaje: 1, de: 1, programación: 1, muy: 1, popular: 1 }

// Entrada 3:
const texto3 = "Manzana manzana naranja pera pera pera manzana";
console.log(contarPalabrasFrecuentes(texto3));
// Salida esperada: { manzana: 3, pera: 3, naranja: 1 }