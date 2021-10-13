//Primeiro método
function filtraPares(arr){
    return arr.filter(callback);
}

function callback(item){ //callbacks são funçoes que são passadas como argumentos para outras funções
    return item % 2 === 0; //para fazer a inversão e mostrar os números impares basta colocar o operador lógico "!" e returar um "="
}
//Primeiro método

// Obs.: os dois métodos são iguais, porém a lógica de um esta mais avançada do que no outro


//Segundo métoto
function filtraPares(arr){
    return arr.filter(function(item){
        return item % 2 === 0;
    });
}
//Segundo métoto

const meuArray= [12, 13, 25, 38, 39, 77, 116, 117, 233]

console.log(filtraPares(meuArray));