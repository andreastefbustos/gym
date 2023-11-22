// Imagina que empiezas en el 5to piso de un edificio, luego bajas al 2do piso, luego subes al 8vo. Has viajado un total de 3 + 6 = 9 pisos de distancia.

// Dado un arreglo que represente una serie de pisos que debes alcanzar en ascensor, retorne un número entero que represente la distancia total recorrida al visitar cada uno de los pisos del arreglo en orden.

// Ejemplos simples

// elevatorDistance([5,2,8]) = 9
// elevatorDistance([1,2,3]) = 2
// elevatorDistance([7,1,7,1]) = 18

// // Si dos pisos consecutivos se repiten
// // la distancia recorrida entre ellos será 0
// elevatorDistance([3,3]) = 0
// El arreglo siempre tendrá al menos dos pisos. Las pruebas aleatorias contendrán de 2 a 20 pisos entre el piso 0 y 30.

function elevatorDistance(array) {
    let distance = 0;

    for(let i = 1; i < array.length; i++) {
        distance += Math.abs(array[i] - array[i-1]);
    }

    return distance;
}

console.log(elevatorDistance([5,2,8]))