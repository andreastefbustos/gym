// Convertir un hash a un arreglo. Nada mas, nada menos.

// Ejemplo

// Input: { name: 'Jeremy', age: 24, role: 'Software Engineer' }
// Salida: [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
// Importante ❗

// La salida debe ser ordenada alfabéticamente

function convertHashToArray(hash){
    const arrayEntries = Object.entries(hash);
    return arrayEntries.sort();
}

console.log(convertHashToArray({ name: 'Jeremy', age: 24, role: 'Software Engineer' }))