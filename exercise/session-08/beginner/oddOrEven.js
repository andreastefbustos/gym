// Tu objetivo en este ejercicio es implementar una función que recibe un arreglo con números enteros y determinar si la suma de los números es par o impar

// De acuerdo al resultado de la suma deberás retornar una cadena en caso de que sea par 'odd' y en el caso de que sea impar 'even'

// Ejemplo 1

// Entrada: [0, 1, 4]
// Salida: 'odd'
// Explicación: Sumando 0 + 1 + 4 = 5 entonces es impar y como resultado 'odd'
// Ejemplo 2

// Entrada: [0, -1, -5]
// Salida: 'even'
// Explicación: Sumando 0 -1 -5 = -6 entonces es par y como resultado 'even'
// Importante ❗

// Si el arreglo de entrada está vacío, considéralo como: [0] (arreglo con cero).

function oddOrEven(array) {
    let sum = array.reduce((a,b) => a + b, 0)

    if(sum % 2 === 0) {
        return 'even'
    }
    
    return 'odd'
}

console.log(oddOrEven([0, -1, -5]));