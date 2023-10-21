// Tienes un billete de lotería rojo que muestra los enteros a, b y c, cada uno de los cuales es 0, 1 o 2. Si todos tienen el valor 2, el resultado es 10. Si son todos iguales, el resultado es 5. Si b y c son diferentes de a, el resultado es 1. Si no, el resultado es 0.

// Ejemplo

//     redTicket(2, 2, 2) → 10
//     redTicket(2, 2, 1) → 0
//     redTicket(0, 0, 0) → 5

function redTicket(a, b, c){
    if(a === b && b === c) {
      if (a === 2) {
        return 10;
      }
      
      return 5;
    }
    
    if(b != a && c != a){
      return 1;
    }
    
    return 0;
  
}