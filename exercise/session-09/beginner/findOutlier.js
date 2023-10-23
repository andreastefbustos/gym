// Recibes un arreglo (de longitud mínima 3, pero podría ser muy grande) que contiene números enteros. El arreglo está enteramente compuesto de números impares o enteramente compuesto de números pares, excepto por un único número entero N. Escribe un método que tome el arreglo como argumento y retorne este número excluído ("outlier").

// Ejemplos

// [2, 4, 0, 100, 4, 11, 2602, 36]
// Debe retornar: 11 (el único número impar)

// [160, 3, 1719, 19, 11, 13, -21]
// Debe retornar: 160 (el único número par)

function findOutlier(integers){
    let odd = [];
    let even = [];

    for(let i = 0; i < integers.length; i++){
        if(integers[i] % 2 === 0) {
            even.push(integers[i])
        } else {
            odd.push(integers[i])
        }
    }

    if(even.length > odd.length) {
        return odd[0]
    }

    return even[0];
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))