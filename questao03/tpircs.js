function style(elemento,nome){
	var valor = (arguments[2])
    return valor;
}

console.log(style('Teste','OK','30px'));

function assert(resultado,funcao_teste){
    (resultado === funcao_teste)?console.log('Passou no teste!'):console.log('Não passou no teste!');
}

assert('30px',style('div','font-size','30px'));