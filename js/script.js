var withButtonClass = document.getElementsByClassName('button');
console.log(withButtonClass);
console.log(withButtonClass.length);

for (var k = 0 ; k < 3 ; k++) {
	function zaalertuj() {
		alert(withButtonClass.innerText);
	}
	zaalertuj();
}