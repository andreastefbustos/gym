// El objetivo es crear una función que elimine el primer y último carácter del string. La función tiene como parámetro un string 'str'. No tienes que preocuparte por cadenas con menos de dos caracteres.

// Ejemplos

// removeChar('eloquent') ➞ 'loquen';
// removeChar('country') ➞ 'ountr';

function removeChar(str){
    let newStr = str.slice(1, str.length-1);
    return newStr;
};