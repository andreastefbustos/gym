// Se tienen dos arreglos de números enteros, a y b, cada uno de longitud dos. Calcule la suma de los valores de cada arreglo. Devuelva el array que tenga la mayor suma. En caso de empate, devuelva el arreglo a.

// Ejemplo

//     biggerTwo([1, 2], [3, 4]) → [3, 4]
//     biggerTwo([3, 4], [1, 2]) → [3, 4]
//     biggerTwo([1, 1], [1, 2]) → [1, 2]

function biggerTwo(a, b){
    let suma = a[0] + a[1];
    let sumb = b[0] + b[1];
    
    if(suma === sumb || suma > sumb) {
      return a;
    }
  
    return b;
}