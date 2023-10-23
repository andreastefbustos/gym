// Implementa una función que acepte 3 números enteros (a,b y c). La función debe retornar true si se puede construir un triángulo con los lados dados y false en cualquier otro caso.

// (En este caso, todos los triángulos deben tener una superficie mayor a 0 para ser aceptados).

// Ejemplo

//     isTriangle(1,2,2) → true;
//     isTriangle(7,2,2) → false;

function isTriangle(a,b,c) {
    if(a <= 0 || b <= 0 || c <= 0) {
        return false;
    }

    if((a + b > c ) && (a + c > b) && (b + c > a)) {
        return true;
    }

    return false;
}