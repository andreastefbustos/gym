// You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.

// Example:

// input:  "stop Making spongebob Memes!"
// output: "StOp mAkInG SpOnGeBoB MeMeS!"

function spongeMeme(sentence) {
    return sentence.split('').map((char, index) => {
        // Si el caracter es un espacio, devolverlo sin cambios
        if (char === ' ') return char;
        // Alternar entre mayúsculas y minúsculas dependiendo del índice
        return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
    }).join('');
}