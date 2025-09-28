// 1. Obtener la entrada del usuario usando 'prompt()'
let palabraOriginal = prompt("Introduce una palabra o un texto corto:");

// 2. Comprobar si se introdujo algo y continuar
if (palabraOriginal) {
    // 3. Proceso: Obtener la longitud de la cadena
    let longitud = palabraOriginal.length;

    // 4. Proceso: Convertir la cadena a mayúsculas
    let enMayusculas = palabraOriginal.toUpperCase();

    // 5. Salida de datos usando la Consola (Console)
    console.log("--- Resultados del Análisis de Texto ---");
    console.log("Texto original: " + palabraOriginal);
    console.log("Longitud (número de caracteres): " + longitud);
    console.log("En mayúsculas: " + enMayusculas);
} else {
    // 6. Mensaje si el usuario no introdujo nada
    console.log("No se ha introducido ningún texto.");
}