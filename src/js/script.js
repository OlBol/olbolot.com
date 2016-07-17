// parallax
'use strict'

var layers = document.querySelectorAll('.stars');
var coef = [2, 6, 14];

document.addEventListener('mousemove', function(e){
	var x = e.clientX;
	var y = e.clientY;

	for(var i = 0; i < layers.length; i++){
		layers[i].style.backgroundPosition = (x / coef[i]) +'px ' + (y / coef[i]) + 'px';
	}
});