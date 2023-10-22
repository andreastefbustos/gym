// Implementa una función que dado un arreglo de palabras devuelve una cadena con las palabras separadas con comas.
// La última palabra debería estar separada por la palabra 'and' en lugar de una coma. El método recibe un array de cadenas y devuelve solo una cadena formateada.

// Ejemplo

// Entrada: ['ninja', 'samurai', 'ronin']
// Salida: "ninja, samurai and ronin"
// Importante ❗

// Los strings con valores vacíos deben ser ignorados.
// Los arrays vacíos o los valores null/nil/None que se pasen al la función deben dar como resultado una string vacío.

function formatWords(words){
   // Comprobar si words es null, undefined o no es un array
   if (!words || !Array.isArray(words)) {
    return '';
   }

  // Filtrar palabras no vacías
  const validWords = words.filter(word => word !== null && word !== '');

  if (validWords.length === 0) {
    return ''; // Si no hay palabras válidas, retorna una cadena vacía
  } else if (validWords.length === 1) {
    return validWords[0]; // Si solo hay una palabra válida, retorna esa palabra
  } else {
    // Si hay más de una palabra válida, unirlas con comas y agregar 'and' al final
    const lastWord = validWords.pop(); // Obtener la última palabra
    return validWords.join(', ') + ' and ' + lastWord;
  }
}