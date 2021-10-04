function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Lucas',
	idade: 20,
};

const pessoa2 = {
	nome: 'Rapha',
	idade: 18,
};

const pessoa3 = {
	nome: 'Heloisa',
	idade: 15,
};

const animal1 = {
	nome: 'Paulo',
	idade: 5,
    especie: 'animal',
};

console.log(calculaIdade.call(pessoa1, 20)); //primeiro passando a pessoa e segundo quantos anos ela tera em x tempo
console.log(calculaIdade.apply(pessoa2, [24])); // sempre enviar dados através de conchetes
console.log(calculaIdade.apply(pessoa3, [15]));