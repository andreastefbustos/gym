// Escribe una función que convierte un nombre en iniciales. Esta función toma exactamente dos palabras con un espacio entre ellos.

// La salida debe ser dos letras capitalizadas con un punto que las separa.

// Ejemplo 1

// Entrada: Sam Harris
// Salida: S.H
// Ejemplo 2

// Entrada: Patrick Feeney
// Salida: P.F

function abbrevName(name){
    let nameAbbrev = name.split(" ");

    let initial = nameAbbrev.map((word) => {
        return word.charAt(0).toUpperCase();
    })

    let initials = initial.join(".");
    return initials;
}

console.log(abbrevName(("Sam Harris")));