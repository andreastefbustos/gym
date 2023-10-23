// Dado un arreglo de enteros, intercambia el primer y último elemento. Retorna el arreglo modificado. La longitud del arreglo será al menos de 1.

// Ejemplo

//     swapEnds([1, 2, 3, 4]) → [4,2,3,1]
//     swapEnds([1, 2, 3]) → [3,2,1]
//     swapEnds([8, 6, 7, 9, 5]) → [5,6,7,9,8]

function swapEnds(nums){
    let temp = nums[0];
    nums[0] = nums[nums.length-1];
    nums[nums.length-1] = temp;
    return nums;
}

console.log(swapEnds([1, 2, 3, 4]))