// Se te dará una lista de objetos. Cada objeto tiene type, material y posiblemente secondMaterial. Los materiales existentes son: paper, glass, organic, y plastic.

// Tu trabajo es clasificar estos objetos en los 4 contenedores de reciclaje de acuerdo con su material (y secondMaterial, en caso de existir), listando el valor type de los objetos que deben ir en esos contenedores.

// Notas

// Los contenedores deben venir en el mismo orden que los materiales enumerados anteriormente. (paper, glass, organic, y plastic).
// Todos los contenedores deben aparecer en la salida, incluso si algunos de ellos están vacíos,
// Si un objeto está hecho de dos materiales, type debe aparecer en los dos contenedores respectivos.
// El orden de los type's en cada contenedor debe ser el mismo que el orden de sus respectivos objetos en la lista de entrada.
// Ejemplo

// entrada = [
//   {"type": "rotten apples", "material": "organic"},
//   {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
//   {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
//   {"type": "amazon box", "material": "paper"},
//   {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
// ]
// salida = [
//   ["wine bottle", "amazon box", "beer bottle"],
//   ["wine bottle", "beer bottle"],
//   ["rotten apples", "out of date yogurt"],
//   ["out of date yogurt"]
// ]

const entrada = [
    {"type": "rotten apples", "material": "organic"},
    {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
    {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
    {"type": "amazon box", "material": "paper"},
    {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
]

function recycle(array) {
    let bins = {
        'paper': [],
        'glass': [],
        'organic': [],
        'plastic': [],
    };
    array.forEach(item => {
        bins[item.material].push(item.type);
        if (item.secondMaterial) {
            bins[item.secondMaterial].push(item.type);
        }
    });
    return [bins.paper, bins.glass, bins.organic, bins.plastic];
}

console.log(recycle(entrada))