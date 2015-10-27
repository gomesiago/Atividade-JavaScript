var Empregado = function(nome, sobrenome, salarioMensal){
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.salarioMensal = salario;
  this.calcularSalarioAno = function(){
    return this.salarioMensal*12;
  }
  this.dadosEmpregado = function(){
    return (this.nome + " " + this.sobrenome + ", Salario: " + this.salarioMensal);
  }
}

var teste = new Empregado("Iago", "Gomes", 700);
alert(teste.dadosEmpregado());
