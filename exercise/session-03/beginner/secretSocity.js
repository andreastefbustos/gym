// Un grupo de amigos ha decidido iniciar una sociedad secreta. El nombre de la sociedad será la primera letra de cada uno de ellos, ordenados alfabéticamente.

// Crear una función que tome una serie de nombres y retorne el nombre de la sociedad secreta.

// Ejemplos

// societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"
// societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"
// societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "CJMPRR"
// Importante ❗

// El nombre de la sociedad secreta debe ser enteramente en mayúsculas.

function societyName(friends) {
	let secretName = friends.map(word => word[0]).sort().join('');
    return secretName.toUpperCase();
}

console.log(societyName(["andrea", "stefania","bustos", "ortiz"]))