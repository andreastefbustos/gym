// En este ejercicio deberás escribir una función que reciba una arreglo de 10 caracteres (los valores serán entre 0 y 9), como resultado retorna una cadena con los números en formato de número de teléfono.

// Ejemplo

// Entrada: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// Salida: "(123) 456-7890"
// Explicación: En la entrada recibimos un arreglo el cual debemos utilizarlo para devolver un string con el formato de numero.
// Importante ❗

// El string devuelto debe contener el formato para ser correcto y completar este desafío.
// ¡No olvide el espacio que incluye después del paréntesis de cierre!

function createPhoneNumber(numbers){
  const codeArea = numbers.slice(0, 3).join('');
  const firstDigits = numbers.slice(3, 6).join('');
  const lastDigits = numbers.slice(6).join('');

  return `(${codeArea}) ${firstDigits}-${lastDigits}`
}