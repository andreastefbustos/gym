// Dados 2 enteros, a y b, devuelve la suma. Sin embargo, los valores "adolescentes" en el rango desde 13 hasta 19 inclusive, son más afortunados. Así que si cualquiera de los valores es un adolescente, simplemente devuelve 19.

// Ejemplo

//     teenSum(3, 4) → 7
//     teenSum(10, 13) → 19
//     teenSum(13, 2) → 19

function teenSum(a, b){
    let sum = a + b;

    if((a >= 13 && a <= 19) || (b >= 13 && b <= 19)) {
        return 19;
    }

    return sum; 
}