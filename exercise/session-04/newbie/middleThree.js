// Dada una cadena de longitud impar, devuelva una cadena de longitud 3 desde su centro, por lo que "Candy" produce "and". La longitud de la cadena será de al menos 3.

// Ejemplo

//     middleThree('Candy') → "and"
//     middleThree('and') → "and"
//     middleThree('solving') → "lvi"

function middleThree(str){
    const wordArray = str.split("");
    const centerIndex = Math.floor(wordArray.length / 2);
        
    return wordArray[centerIndex - 1] + wordArray[centerIndex] + wordArray[centerIndex + 1];
      
}