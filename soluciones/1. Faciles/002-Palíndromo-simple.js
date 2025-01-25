/**
 * Función para verificar si una cadena es un palíndromo.
 * @param {string} texto - La cadena de texto a analizar.
 * @returns {boolean} - `true` si es un palíndromo, 
`false` en caso contrario.
 */
function esPalindromo(texto) {
    let textoLimpio = texto.toLowerCase();
    textoLimpio = textoLimpio.replace(/[^a-z0-9]/g, "");
    let textoInvertido = textoLimpio.split("").reverse().join("");
    return textoLimpio === textoInvertido;
}

// Entrada 1:
const texto1 = "Anita lava la tina";
console.log(esPalindromo(texto1));
// Salida esperada: true

// Entrada 2:
const texto2 = "Hola Mundo";
console.log(esPalindromo(texto2));
// Salida esperada: false

// Entrada 3:
const texto3 = "Amo la paloma";
console.log(esPalindromo(texto3));
// Salida esperada: true