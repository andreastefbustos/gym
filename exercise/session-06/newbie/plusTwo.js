// Dado dos arreglos de enteros, cada uno con longitud 2, retornar un nuevo arreglo, con longitud 4, conteniendo todos los elementos de arreglos iniciales.

// Ejemplo

//     plusTwo([1, 2], [3, 4]) → 1,2,3,4
//     plusTwo([4, 4], [2, 2]) → 4,4,2,2
//     plusTwo([9, 2], [3, 4]) → 9,2,3,4

// SOLUTION 1
function plusTwo(a, b){
    return [...a,...b]
}

//SOLUTION 2
function plusTwo1(a, b){
    return a.concat(b);
}