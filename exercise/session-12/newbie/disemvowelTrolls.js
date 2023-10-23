// Trolls están atacando tu sección de comentarios!

// Una forma común de lidiar con esta situación es remover todas las vocales de los comentarios de trolls para neutralizar el hilo de comentarios.

// Tu tarea es escribir una función que reciba un string y retorne un nuevo string con todas las vocales removidas.

// Ejemplo

// Entrada: "This website is for losers LOL!"
// Salida: "Ths wbsts fr lsrs LL!"
// Importante ❗

// "y" no es considerado una vocal.

function disemvowel(str) {
    let result = str.replace(/[aeiouAEIOU]/g, '');
    return result;
}