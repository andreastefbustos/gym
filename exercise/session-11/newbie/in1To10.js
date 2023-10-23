// Dado un número n, devuelve true si n está en el rango 1..10, inclusive. A menos que "outsideMode" sea verdadero, en cuyo caso devuelve true si el número es menor o igual a 1, o mayor o igual a 10.

// Ejemplo

//     in1To10(5, false) → true
//     in1To10(11, false) → false
//     in1To10(11, true) → true

function in1To10(n, outsideMode){
    if(!outsideMode){
        if(n >= 1 && n <=10) {
            return true
        }
      
        return false
    }
    
    if(outsideMode){
        if(n <= 1 || n >=10) {
            return true
        }
      
        return false
    }
}