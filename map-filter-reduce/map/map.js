function map(arr){
    return arr.map(function(item){  // caso de um console.log este array se mantm intacto
        return item * 2; // multiplicando o array por 2
    });
}

const nums =[2, 4, 6, 8, 10]; //definindo os numeros do array

console.log(map(nums)); // array multiplicado

console.log(nums); // array original