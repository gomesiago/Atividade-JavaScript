function cadastrar() {
	var empregado = [document.getElementById('nome').value, document.getElementById('sobrenome').value, document.getElementById('salario').value];
	alert("O empregado " + empregado[0] + " " + empregado[1] + " foi cadastrado com um salário de R$ " + empregado[2] + ".");
}