// Dada una oración, retorna el número de palabras cuya primera y última letra sean iguales.

// Ejemplos:

// countSameEnds("Pop! goes the balloon") // => 1

// countSameEnds("And the crowd goes wild!") // => 0

// countSameEnds("No I am not in a gang.") // => 1
// Notas

// No cuentes palabras que tengan un solo caracter (tales como "I" y "a" en el ejemplo 3).
// La función no debería ser case sensitive, es decir la "P" mayúscula debería coincidir con la "p" minúscula.
// Ten ojo con los signos de puntuación u otros caracteres que no sean letras.
// ¡“Puntos” extra si usas expresiones regulares!

function countSameEnds(str) {
    const words = str.split(/\s+/);
    let count = 0;
  
    for (const word of words) {
      const cleanedWord = word.replace(/[^a-zA-Z]/g, ''); // Eliminar caracteres no alfabéticos
      const lowerCaseWord = cleanedWord.toLowerCase();
      
      if (cleanedWord.length > 1 && lowerCaseWord[0] === lowerCaseWord[lowerCaseWord.length - 1]) {
        count++;
      }
    }
  
    return count;
}

console.log(countSameEnds("Pop! goes the balloon"));