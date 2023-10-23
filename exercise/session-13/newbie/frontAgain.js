// Dada un string, devuelve true si los 2 primeros caracteres también aparecen al final, como en el caso de "edited".

// Ejemplo

//   frontAgain('edited') → true
//   frontAgain('edit') → false
//   frontAgain('ed') → true

function frontAgain(str){
    if(str.length < 2) {
        return false;
    }

    return str.substring(0, 2) === str.substring(str.length - 2);
}

console.log(frontAgain('edited'))