// Exercicio

// Criar uma função que receba dois números como parâmetros.
// Confira se os números são iguais.
// Confira se a soma dos números é maior que 10 ou menor que 20.
// Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".


function comparaNumeros(num1, num2) {

    //Validação
    //if(!num1 || num2) return "Defina dois números";


    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`;


    // const saoIguais =num1 === num2; 3 iguais determinam se eles tem o mesmo tipo e mesmo valor
    // const soma = num1 + num2;

    //Método convencional sem o else
    // if(saoIguais){
    //     return "São iguais";
    // }
    // return "Não são iguais";

    //Método ternário
    //return saoIguais ? "São iguais" : "Não são iguais";

}

function criaPrimeiraFrase(num1, num2) { //criação da primeira frase
    let saoIguais = '';

    if (num1 !== num2) {
        saoIguais = 'não iguais';
    }
    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.` //resultado da primeira frase
}

function criaSegundaFrase(num1, num2){ //criação da primeira frase
    const soma = num1 + num2;

    let resultadoDez = 'menor'; //variavel booleana, onde retorna "maior se ela for maior que 10"
    const comparaDez = soma > 10;

    let resultadoVinte = 'menor'; //variavel booleana, onde retorna "maior se ela for maior que 20"
    const comparaVinte = soma > 20;

    if(comparaDez){
        resultadoDez = 'maior';
    }

    if(comparaVinte){
        resultadoVinte = 'maior';
    }

    return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
}

console.log(comparaNumeros(10, 1)); // sempre colocar o console.log pra rodar pelo nodejs
// lembrando que, sempre que for rodar pelo node colocar nome do arquivo e no terminal node + nome do arquivo
