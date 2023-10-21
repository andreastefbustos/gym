// Dados 2 valores int mayores que 0, devuelve el valor que más se acerque a 21 sin pasarse. Devuelve 0 si ambos se pasan.

// Ejemplo

//     blackjack(19, 21) → 21
//     blackjack(21, 19) → 21
//     blackjack(19, 22) → 19

function blackjack(a, b){
    if(a > 21 && b > 21){
      return 0;
    } else if (a >21){
      return b;
    } else if (b >21){
      return a;
    } else {
      return Math.max(a,b)
    }
}