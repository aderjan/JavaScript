function getTriangleArea(a, h) {
	
	var value = (a*h/2);
	
	if ( (a > 0) && (h > 0) ) {
		return(value);
	}

	else {
		return('Nieprawidłowe dane');
	}
	
	var triangle1Area = getTriangleArea(10, 15),
		triangle2Area = getTriangleArea(-10, 15),
		triangle3Area = getTriangleArea(5, 8);

}

console.log( getTriangleArea(10,6) );
console.log( getTriangleArea(10,15) );
console.log( getTriangleArea(-10,15) );
console.log( getTriangleArea(5,8) );


