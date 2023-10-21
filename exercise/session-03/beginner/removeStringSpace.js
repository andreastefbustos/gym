// Esto es demasiado sencillo, elimina los espacios de la cadena, luego devuelve la cadena resultante.

// Ejemplos

// noSpace('8 j 8   mBliB8g  imjB8B8  jl  B') ➞ '8j8mBliB8gimjB8B8jlB'
// noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd') ➞ '88Bifk8hB8BB8BBBB888chl8BhBfd'
// noSpace('8aaaaa dddd r     ') ➞ '8aaaaaddddr'
// Importante ❗

// Las cadenas pasadas solo constarán de letras y espacios.

function noSpace(x){
    return x.replace(/\s/g,"")
}