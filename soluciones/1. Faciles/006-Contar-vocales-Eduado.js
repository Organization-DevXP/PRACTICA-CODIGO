/**
 * Función para contar vocales en una cadena de texto.
 * @param {string} texto - La cadena de texto a analizar.
 * @returns {number} - La cantidad de vocales en la cadena.
 */
function contarVocales(texto) {
    return texto.split('').reduce((contador, letra) => {
        if (/[aeiou]/i.test(letra)) {
            return contador + 1;
        }
        return contador;
    }, 0);
}

// Entrada 1:
const texto1 = "Hola Mundo";
console.log(contarVocales(texto1));
// Salida esperada: 4

// Entrada 2:
const texto2 = "Organización DevXP";
console.log(contarVocales(texto2));
// Salida esperada: 6

// Entrada 3:
const texto3 = "XYZ123";
console.log(contarVocales(texto3));
// Salida esperada: 0