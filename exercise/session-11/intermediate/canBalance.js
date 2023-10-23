// Dado um array não vazio, retorne true se houver um lugar para dividir a matriz de modo que a soma dos números de um lado é igual à soma dos números do outro lado.

// Ejemplo

//     canBalance([1, 1, 1, 2, 1]) → true
//     canBalance([2, 1, 1, 2, 1]) → false
//     canBalance([10, 10]) → true

function canBalance(nums){
    let leftSum = 0;
    let rightSum = nums.reduce((a, b) => a + b, 0); // Suma total inicialmente

    for (let i = 0; i < nums.length; i++) {
        leftSum += nums[i];
        rightSum -= nums[i];
        
        if (leftSum === rightSum) {
            return true;
        }
    }
    return false;
}