// Dados dos valores int, devuelve el que sea mayor. Sin embargo, si los dos valores tienen el mismo residuo cuando se dividen por 5, entonces se devuelve el valor más pequeño. Sin embargo, en todos los casos, si los dos valores son iguales, devuelve 0. Nota: el operador % "mod" calcula el residuo, por ejemplo, 7 % 5 es 2.

// Ejemplo:

//     maxMod5(2, 3) → 3
//     maxMod5(6, 2) → 6
//     maxMod5(3, 2) → 3

function maxMod5(a, b){
    if (a === b) {
        return 0
    }

    if(a % 5 === b % 5) {
        return Math.min(a,b);
    }

    return Math.max(a,b)
}