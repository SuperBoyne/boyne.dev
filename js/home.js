function quake() 
{ 
  ['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix){
	Array.prototype.slice.call(document.querySelectorAll('div,p,span,img,a,body')).map(function(el){
		el.style[prefix + 'transform'] = 'rotate(' + (Math.floor(Math.random() * 100) - 1) + 'deg)';
	});
});
} 