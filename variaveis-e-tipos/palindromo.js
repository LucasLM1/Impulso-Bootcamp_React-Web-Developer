function verificaPalindromo(string) {
	if (!string) return; //verificando se ela aparece como nula, vazia ou undefined
	console.log(string === string.split('').reverse().join('')); //split separa todas as letras da palavras
} //obs.: quando se da um split retorna um array com todos os caracteres, logo após isso revertemos a ordem e as juntamos novamente
verificaPalindromo('teste');

function varificaPalindromo2(string) {
	if (!string) return;
	if (!string.length) return;

	for (var i = 0; i < string.length / 2; i++) {
		if (string[i] !== string[string.length - 1 - i]) {
			return console.log("Não é um palindromo"); //se não for um palindromo retorna esta mensagem
		}
	}
	return console.log("É um palindromo"); // caso seja um palindromo retorna esta mensagem
}

varificaPalindromo2('arara');