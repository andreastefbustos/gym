// En este ejercicio vas a crear una función que reciba un arreglo con strings y números enteros no negativos, la cual retorna un nuevo arreglo con las cadenas filtradas.

// Ejemplo:

// filter_list([1,2,'a','b']) == [1,2]

// // Explicación

// Entrada: [1,2,'a','b']
// Salida: [1,2]
// Explicación: De la entrada [1,2,'a','b'] se filtra el arreglo para unicamente
//  tener los números positivos y retornar [1,2]
// Importante ❗

// Considera el tipo de dato al momento de filtrar, aun que el arreglo incluya '1' este es un string y no deberías incluirlo en el resultado final.

function filter_list(l) {
    const newArray = l.filter((element) => {
        return typeof element === 'number';
    })

    return newArray;
}