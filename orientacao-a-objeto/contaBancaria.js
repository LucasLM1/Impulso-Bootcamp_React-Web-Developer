// Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
// Dentro de ContaBancaria, construa o getter e o setter de saldo;
// Dentro de ContaBancaria, crie os métodos sacar e depositar;
// Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
// Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
// Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
// Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
// Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
// Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.


class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0; //sempre colocar o underline para referenciar que é um get and setter
    }
    sacar(valor){
        if(valor> this._saldo){
            return "Operação negada! Saldo insuficiente!";
        }
        this._saldo -=valor; 

        return this._saldo; //retornando o saldo após sacar
    }

    depositar(valor){
        this._saldo +=valor;

        return this._saldo; //retornando o saldo após debitar
    }
    //get and setter
    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        return this._saldo = valor;
    }
}

class ContaCorrente extends ContaBancaria{ //super sempre precisa de uma clase pai, sempre usar extends
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    //get and setter
    get cartaoCredito(){
        return this._cartaoCredito;
    }
    set cartaoCredito(valor){
        return this._cartaoCredito = valor;
    }
}

class ContaPoupanca  extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero,);
        this.tipo = 'poupança';
    }
}

class ContaUniversitaria  extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'universitaria';
    }

    sacar(valor){
        if(valor > 500){
            return "Operação Inválida";
        }
        this._saldo -=valor;
    }
}