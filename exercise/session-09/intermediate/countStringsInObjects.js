// Crea una función strCount, la cual recibe un objeto obj como argumento y retorna la cantidad de valores del tipo string dentro del objeto.

// Ejemplo

// Entrada: obj = {
//   first: "1",
//   second: "2",
//   third: false,
//   fourth: ["anytime",2,3,4],
//   fifth:  null
// }
// Salida: 3
// Explicación: "1", "2" y "anytime" son los únicos strings presentes, contados dan 3

function strCount(obj){
    let count = 0;
    const queue = [obj];

    while(queue > 0) {
        const targetString = queue.pop();
        Object.entries(targetString).forEach(([key, value]) => {
            if(typeof value === 'string') {
                count++
            }

            if(Array.isArray(value) || typeof value == 'object' && value != null) {
                queue.push(value);
            }
        })
    }

    return count;
}