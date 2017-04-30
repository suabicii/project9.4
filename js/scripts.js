function drawTree (w) {
	var star = '';
	
	for (var i = 1; i <= w; i++) {
		for (var j = 1; j <= i; j++) {
			star += '*';
		}
		console.log(star);
	}
};

var x = prompt('Podaj ilość wierszy');
drawTree(x);