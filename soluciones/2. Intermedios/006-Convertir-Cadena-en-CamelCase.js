/**
 * Función para convertir una cadena a formato camelCase.
 * @param {string} cadena - La cadena de palabras a convertir.
 * @returns {string} - La cadena convertida a formato camelCase.
 */
function convertirCamelCase(cadena) {
    const palabras = cadena.split(/[\s-]+/)
    for (let i = 1; i < palabras.length; i++) {
        palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1).toLowerCase();
    }
    return palabras.join('');
}

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
