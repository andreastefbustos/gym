// Dado n, tome la suma de los dígitos de n. Si ese valor tiene más de un dígito, continúe reduciendo de esta manera hasta que se produzca un número de un solo dígito. La entrada será un número entero no negativo.

// Ejemplo 1

// Entrada: 16
// Salida: 7
// Explicación: sumando los digitos de 16 [1+6] el resultado es 7
// Ejemplo 2

// Entrada: 942
// Salida: 6
// Explicación: sumando los digitos de 942 [9+4+2] --> 15 volver a sumar [1+5] el resultado es 6

function digitalRoot(n) {
    while(n >= 10) {
        n = n.toString().split('').reduce((a,b) => a + parseInt(b), 0);
    }

    return n;
}