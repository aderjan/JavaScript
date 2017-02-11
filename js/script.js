var a = -4,
		b =  5,
		value = (a*a) + (2 * a * b) - (b*b);
console.log(value);

if ( value > 0 ) {
	console.log('Wynik dodatni');
}
else {
	console.log('Wynik ujemny');
}

value == 0 ? console.log('Wynik równy zero') : console.log('Wynik różny od zera')
