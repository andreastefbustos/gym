// Implementa la función firstLast6 que recibe un arreglo con números y retorne true si el número 6 es el primer o el último elemento del arreglo. El arreglo tendrá 1 o más elementos.

// Ejemplo:

// firstLast6([1, 2, 6]) → true
// firstLast6([6, 1, 2, 3]) → true
// firstLast6([13, 6, 1, 2, 3]) → false

function firstLast6(nums){
    for(let i = 0; i < nums.length; i++){
      nums[i];
      
      if(nums[0]===6 || nums[nums.length -1] === 6){
        return true;
      } else {
        return false;
      }
    }
}

console.log(firstLast6([1, 2, 6]))