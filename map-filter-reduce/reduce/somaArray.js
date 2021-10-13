function somaArray(arr) {
    return arr.reduce(function (prev, current) {
        console.log({ prev }); // mostrando valor que esta sendo passado no prev
        console.log({ current }); // mostrando valor que esta sendo passado no current
        return prev + current;
    })//sempre que for criar uma função com reduce, na maioria dos casos se usa o prev e currentValue
    // prev= anterior //current= atual
}

const arr = [1, 2];

console.log(somaArray(arr));