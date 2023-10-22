// Un "clump" en un array es una serie de 2 o más elementos adyacentes del mismo valor. Devuelve el número de clumps en un arreglo dado.

// Ejemplo

//     countClumps([1, 2, 2, 3, 4, 4]) → 2
//     countClumps([1, 1, 2, 1, 1]) → 2
//     countClumps([1, 1, 1, 1, 1]) → 1

function countClumps(nums){
    let clumpCount = 0;
    
    for (let i = 0; i < nums.length; i++) {
      // Comparamos el elemento actual con el siguiente
      if (nums[i] === nums[i + 1]) {
        // Si son iguales, incrementamos el contador de clumps
        clumpCount++;
        
        // Luego, avanzamos hasta el final del clump
        while (nums[i] === nums[i + 1]) {
          i++;
        }
      }
    }
    
    return clumpCount;
}