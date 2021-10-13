const lista = [
    {
        name: 'camiseta',
        preco: 60
    },

    {
        name: 'moletom',
        preco: 80
    },

    {
        name: 'calça-jeans',
        preco: 120
    }
];

const saldoDisponivel = 300;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function (prev, current, index) {

        console.log('rodada', index + 1);
        console.log({ prev }); // mostrando valor que esta sendo passado no prev
        console.log({ current }); // mostrando valor que esta sendo passado no current

        return prev - current.preco;
    }, saldoDisponivel);
}
console.log("Seu saldo disponivel é de:", saldoDisponivel); //mostra saldo disponivel =300
console.log(calculaSaldo(saldoDisponivel,lista));
