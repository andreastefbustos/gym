// Consideremos las apariciones más a la izquierda y más a la derecha de algún valor en un array. Diremos que el "span" es el número de elementos entre los dos inclusive. Un solo valor tiene un span de 1. Devuelve el mayor span encontrado en el array dado. (La eficiencia no es una prioridad).

// Ejemplo

//   maxSpan([1, 2, 1, 1, 3]) → 4
//   maxSpan([1, 4, 2, 1, 4, 1, 4]) → 6
//   maxSpan([1, 4, 2, 1, 4, 4, 4]) → 6

function maxSpan(nums){
    let appearances = {};
    for(let i = 0; i < nums.length; i++){
      if(!appearances.hasOwnProperty(nums[i])){
          appearances[nums[i]] = [i,i]
      } else {
          appearances[nums[i]][1] = i
      }
    }
    
    let maxSpan = 0;
    for (const num in appearances) {
      let currentSpan = appearances[num][1] - appearances[num][0] + 1
      maxSpan = currentSpan > maxSpan ? currentSpan: maxSpan
    }
    
    return maxSpan;
}