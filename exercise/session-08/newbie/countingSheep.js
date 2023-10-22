// Considera un arreglo/lista de ovejas donde algunas ovejas pueden estar perdidas. Necesitamos a una función que cuente el numero de ovejas presentes en un arreglo (true significa presente)

// Ejemplo

// entrada: [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// salida: 17
// Importante ❗

// Pista: No te olvides de verificar por valores malos como null o undefined

function countSheeps(sheep) {
    let count = 0;
    for(let i = 0; i < sheep.length; i++) {
        if(sheep[i] === true) {
            count++
        }
    }

    return count;
}