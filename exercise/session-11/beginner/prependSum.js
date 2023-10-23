// Devuelve una versión modificada del arreglo de entrada (nums), en la que se han eliminado los dos primeros elementos y se añade un elemento -la suma de esos dos elementos- al principio de la matriz.

// Ejemplo

//     prependSum([1, 2, 4, 4]) → 3,4,4
//     prependSum([3, 3, 0]) → 6,0
//     prependSum([1, 1, 1, 1, 1]) → 2,1,1,1

function prependSum(nums){
    let sum = nums[0] + nums[1];
    nums.splice(0,2);
    nums.unshift(sum)
    return nums
}