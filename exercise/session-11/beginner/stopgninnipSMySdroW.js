// Escribe una función que tome una cadena de una o muchas palabras y devuelva la misma cadena, pero cuando la palabra sea de cinco o más letras debes invertir la cadena.

// Ejemplos

// spinWords("Hey fellow warriors") ➞ "Hey wollef sroirraw"
// spinWords("This is a test") ➞ "This is a test"
// spinWords("This is another test") ➞ "This is rehtona test"
// Importante ❗

// Las cadenas pasadas solo constarán de letras y espacios.
// Los espacios se incluirán solo cuando hay más de una palabra en la cadena.

function spinWords(string){
    const separateString = string.split(' ');

    for(let i = 0; i < separateString.length; i++) {
        if(separateString[i].length >= 5) {
            separateString[i] = separateString[i].split('').reverse().join('');
        }
    }

    return separateString.join(' ');
}