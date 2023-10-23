// Para cada múltiplo de 10 del arreglo, cambia todos los valores que le siguen para que sean ese múltiplo de 10, hasta encontrar otro múltiplo de 10. Así, [2, 10, 3, 4, 20, 5] da como resultado [2, 10, 10, 10, 20, 20].

// Ejemplo

//     tenRun([2, 10, 3, 4, 20, 5]) → [2,10,10,10,20,20]
//     tenRun([10, 1, 20, 2]) → [10,10,20,20]
//     tenRun([10, 1, 9, 20]) → [10,10,10,20]

function tenRun(nums){
    let newArray;
     
    for(let i = 0; i < nums.length; i++){
       if(nums[i] % 10 === 0){
         newArray = nums[i]
       } else if(typeof newArray !== "undefined"){
           nums[i] = newArray
       }
    }
    
    return nums
}