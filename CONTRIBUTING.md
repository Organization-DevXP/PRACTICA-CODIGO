# Cómo Contribuir

¡Gracias por tu interés en contribuir a este proyecto! Este repositorio está diseñado para la comunidad de desarrolladores de habla hispana que desean practicar programación y compartir conocimientos. A continuación, encontrarás una guía detallada para participar.

## 📚 Formas de Contribuir

Puedes contribuir de las siguientes maneras:

1. **Añadiendo nuevos ejercicios.**
2. **Subiendo tus soluciones a ejercicios existentes.**
3. **Corrigiendo errores o mejorando la documentación.**
4. **Proponiendo mejoras o nuevas características.**

## 📝 Directrices para Contribuir

### 1. Añadir Ejercicios

Si deseas añadir nuevos ejercicios, sigue estos pasos:

1. **Elige la dificultad:**

   - Fácil: `/ejercicios/facil`
   - Intermedio: `/ejercicios/intermedio`
   - Difícil: `/ejercicios/dificil`

2. **Crea un archivo `.md`:**

   - El nombre del archivo debe describir brevemente el ejercicio (por ejemplo, `007-Suma-pares.md`).
   - Usa el formato estándar para ejercicios descrito abajo.

3. **Formato del Ejercicio:**

```markdown
# Número-Nombre
**Dificultad:** [Fácil | Intermedio | Difícil]
**Categoría:** [Manipulación de cadenas | 
Algoritmos | Estructuras de datos | Otros]  

## Enunciado  
[Describir claramente el objetivo del ejercicio y
lo que se espera del usuario.]  

## Reglas  
1. [Regla específica que debe cumplir la 
solución.]  
2. [Otra regla relevante, si aplica.]  
3. [Pautas adicionales necesarias para resolver el
ejercicio.]  

## Código Base  
/**
 *Descripción de lo que hace la función
 *@param {tipo} parametro - Descripción del 
parámetro
 *@returns {tipo} - Descripción del retorno
 */
function nombreFuncion(parametro) {
  // Escribe tu solución aquí
  return; // Cambia esto según corresponda
}

## Ejemplo de Uso

// Entrada 1:
const entrada1 = "Texto de ejemplo";
console.log(nombreFuncion(entrada1)); 
// Salida esperada: Salida esperada 1

// Entrada 2:
const entrada2 = "Otro ejemplo";
console.log(nombreFuncion(entrada2)); 
// Salida esperada: Salida esperada 2

## Contribuidor
- Nombre del creador: [Tu Nombre o Alias]

```

4. **Haz un Pull Request:**
   - Envía el archivo a la carpeta correspondiente siguiendo las instrucciones de la sección [🚀 Envío de Cambios](#envío-de-cambios).

### 2. Subir Soluciones

Para subir una solución a un ejercicio existente, sigue estos pasos:

1. **Elige el ejercicio:**
   - Busca el archivo `.md` del ejercicio en la carpeta `/ejercicios` correspondiente a la dificultad.

   1.1 **Crea una rama con tu nombre:**
   - Antes de realizar cualquier cambio, crea una rama en tu repositorio con el siguiente formato:
   nombre-de-usuario/solucion
   - Por ejemplo: juanperez/solucion.

2. **Guarda tu solución:**
   - Dirígete a la carpeta `/soluciones` correspondiente al nivel de dificultad.
   - Crea un archivo con el siguiente formato:
     - `Numero-NombreDeEjercicio-Tu-Nombre.js` (o el lenguaje que uses).
   - Por ejemplo: `007-suma-pares-juanperez.js`.

3. **Escribe un comentario inicial:**
   - Describe brevemente tu solución y las herramientas o algoritmos usados.

4. **Haz un Pull Request desde tu rama:**
   - Envía el archivo a la carpeta correspondiente siguiendo las instrucciones de la sección "Envío de Cambios".

### 3. Proponer Mejoras

Si encuentras errores o tienes sugerencias para mejorar los ejercicios, documentación o estructura del repositorio:

1. Abre un **Issue** en el repositorio.
2. Describe el problema o la mejora sugerida.
3. Si puedes, incluye enlaces o ejemplos que respalden tu propuesta.

## 🚀 Envío de Cambios (Pull Requests)

1. Haz un **fork** del repositorio.
2. Crea una nueva rama con un nombre descriptivo.
   - Ejemplo: `add-solucion-suma-pares` o `fix-documentacion`.
3. Realiza tus cambios en la nueva rama.
4. Envía un **Pull Request** hacia la rama principal del repositorio.

## ✅ Revisión y Aprobación

El equipo del proyecto revisará los Pull Requests considerando:
- Cumplimiento del formato y las guías.
- Claridad y precisión en la redacción de ejercicios o documentación.
- Funcionamiento correcto de las soluciones propuestas.

Se te notificará si se requieren ajustes antes de aprobar el cambio.

## 🌟 ¡Gracias por Contribuir!

Tu aporte ayuda a que más personas practiquen programación y aprendan en comunidad. No importa si eres principiante o experto, ¡toda ayuda es bienvenida! 🚀


