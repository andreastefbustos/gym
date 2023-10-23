// Dados dos valores enteros, a y b:

// Devuelve true si alguno de ellos es 6.
// Devuelve true si su suma es 6
// Devuelve true si su diferencia es 6
// Nota: la función Math.abs(num) calcula el valor absoluto de un número.

// Ejemplo

//     love6(6, 4) → true
//     love6(4, 5) → false
//     love6(1, 5) → true

function love6(a, b){
    if(a === 6 || b === 6 || a + b === 6 || 
       Math.abs(a - b) === 6){
      return true
    }
    
    return false;
}