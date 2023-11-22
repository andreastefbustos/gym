// Dados 2 ascensores (llamados "left" y "right") en un edificio de 3 pisos (numerados del 0 al 2), escriba una función elevator que acepte tres argumentos (en orden):

// left - el piso actual del ascensor left
// right - el piso actual del ascensor right
// call - el piso desde el cual se llamó al ascensor
// La función deberá retornar cual es el ascensor más cercano al piso del cual se llamó al ascensor ("left" / "right").

// En el caso donde ambos ascensores sean equidistantes del piso, se deberá elegir el ascensor right.

// Puedes asumir que los argumentos siempre serán números enteros entre 0 y 2.

// Ejemplos:

// elevator(0, 1, 0); // => "left"
// elevator(0, 1, 1); // => "right"
// elevator(0, 1, 2); // => "right"
// elevator(0, 0, 0); // => "right"
// elevator(0, 2, 1); // => "right"

function elevator(left, right, call){
    if (left === right) {
        return "right";
    }

    let leftDistance = Math.abs(left-call);
    let rightDistance = Math.abs(right-call);

    if(leftDistance < rightDistance) {
        return "left";
    } else {
        return "right";
    }
}

console.log(elevator(0, 1, 0))