var withButtonClass = document.getElementsByClassName('button'),
    arrayLength = withButtonClass.length;
console.log(withButtonClass);

for (var k = 0 ; k < arrayLength ; k++) {
	function zaalertuj() {
	    alert(withButtonClass.innerText);
	}
	zaalertuj();
}