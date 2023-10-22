// Escribe un algoritmo que recibe un arreglo con elementos y mueva todos los ceros al final, preservando el orden de los otros elementos que no sean cero.

// Ejemplo

// Entrada: [false,1,0,1,2,0,1,3,"a"]
// Salida: [false,1,1,2,1,3,"a",0,0]
// Importante ❗

// Considera el tipo de dato
// ¡No olvides retornar el arreglo con los ceros al final!

function moveZeros(arr) {
    const result = [];
    const zeros = [];
  
    for (const element of arr) {
      if (element === 0) {
        zeros.push(element);
      } else {
        result.push(element);
      }
    }
  
    return result.concat(zeros);
}