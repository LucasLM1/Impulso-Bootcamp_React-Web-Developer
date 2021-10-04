const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    return [...mySet]; //caso esteja sem "..." trata-se de um set n de um array
}

console.log(valoresUnicos(meuArray)); // quando rodar isso sozinho, n se trata de um array e sim de um set