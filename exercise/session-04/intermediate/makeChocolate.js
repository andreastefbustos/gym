// Queremos hacer un paquete de meta kilos de chocolate. Tenemos barras pequeñas (1 kilo cada una) y barras grandes (5 kilos cada una). Devuelve el número de barras pequeñas a utilizar, suponiendo que siempre utilizamos las barras grandes antes que las pequeñas. Devuelve -1 si no se puede hacer.

// Ejemplo:

//     makeChocolate(4, 1, 9) → 4
//     makeChocolate(4, 1, 10) → -1
//     makeChocolate(4, 1, 7) → 2

function makeChocolate(small, big, goal){
    let requiredBigBars = Math.min(Math.floor(goal / 5), big);
    let realBig = requiredBigBars * 5;
    if (realBig >= goal) { return 0}
  
    // 4 kgs
    let remainingKilos = goal - realBig;
    if(remainingKilos > small) { return -1}
    
    return remainingKilos;
    
}