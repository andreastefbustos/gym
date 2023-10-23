// Dada una cadena y una subcadena no vacía, calcula recursivamente el número de veces que sub aparece en la cadena, sin que las subcadenas se solapen.

// Ejemplos

// strCount('catcowcat', 'cat') → 2
// strCount('catcowcat', 'cow') → 1
// strCount('catcowcat', 'dog') → 0

//SOLUTION 1
function strCount(str, sub){
    // Caso base: si la longitud de 'str' es menor que 'sub', no hay coincidencia
    if (str.length < sub.length) {
        return 0;
    }

    // Si encontramos 'sub' al inicio de 'str'
    if (str.substring(0, sub.length) === sub) {
        return 1 + strCount(str.substring(sub.length), sub);
    }

    // Si 'sub' no está al inicio de 'str', avanzamos 'str' en una posición
    return strCount(str.substring(1), sub);
}

//SOLUTION 2
function strCount(str, sub){
    let count = 0;
    let index = 0;

    while ((index = str.indexOf(sub, index)) !== -1) {
        count++;
        index += sub.length;  // Mueve el índice por la longitud de 'sub' para evitar solapamientos
    }

    return count;
}