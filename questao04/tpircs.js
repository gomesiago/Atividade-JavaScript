function diagonal() { 
	document.getElementById('box').style.top = ('100px');
	document.getElementById('box').style.left = ('100px');
}

window.setInterval(diagonal(), 1000);