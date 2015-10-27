function apenasS() {
	var cidade = [document.getElementById('c1').value, document.getElementById('c2').value, document.getElementById('c3').value, document.getElementById('c4').value];
	for(var i=0; i<4; i++){
		var elemento = cidade[i];
		if(elemento[0] == 'S'){
			alert(elemento);
		}
	}
}