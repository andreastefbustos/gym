// Construyamos un sistema de coincidencias que ayude a descubrir trabajos para desarrolladoras en función de una serie de factores.

// Uno de los factores más sencillos, pero más importantes, es la remuneración. Como desarrolladoras sabemos cuánto dinero necesitamos para mantener nuestro estilo de vida, así que generalmente tenemos una idea aproximada del salario mínimo con el que estaríamos satisfechas.

// Manos al código!!. Vamos a crear una función match que toma una candidata y un trabajo, que devolverá un booleano indicando si el trabajo es una coincidencia válida para la candidata.

// Una candidata tendrá un salario mínimo, por lo que se verá así:

// let candidate = {
//   minSalary: 120000
// }
// Un puesto de trabajo tendrá un salario máximo, por lo que se verá así:

// let job = {
//   maxSalary: 140000
// }
// Para que la coincidencia sea válida, el salario máximo del puesto de trabajo debe ser mayor o igual al salario deseado por la candidata. También incluye la posibilidad que la candidata reduzca un 10% su salario deseado para llegar a un acuerdo con la empresa.

// Ejemplo

// Entradas: {minSalary:190000} {maxSalary:171000}
// Salida: true
// Explicación: "La candidata establece un salario deseado de 190000 menos 19000 correspondientes al 10% de margen nos quedan 171000 y esto es igual al salario máximo de 171000 por lo tanto retornamos true"
// Importante ❗

// En ocasiones el se olvidan de poner algunos valores...
// Si el salario mínimo de la candidata o el salario máximo del puesto no están presentes, lanza un error.

function match(candidate, job) {
   if(candidate.minSalary === undefined || job.maxSalary === undefined) {
    throw new Error("Debe proporcionar salario minimo de la candidata y salario máximo del trabajo")
   }

   let minAcceptableSalary = candidate.minSalary * 0.9; // la candidata puede aceptar un 10% menos

   if(job.maxSalary >= minAcceptableSalary) {
    return true;
   }

   return false;
}