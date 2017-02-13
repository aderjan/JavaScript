var list = document.getElementById('list'),
    add = document.getElementById('addElem'),
    elementNumber = document.getElementsByClassName('item').length+1;

add.addEventListener('click', function() {
	list.innerHTML += '<li>item ' + elementNumber + '</li>'
	elementNumber++
});