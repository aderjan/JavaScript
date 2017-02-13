function rysujChoinkę(n) {
	

    for ( var n = 0 ; n <= 5 ; n++) {
        var star = '';
        
        for (var j=0 ; j <= (n*2 - 1) ; j++) {
            var star = '';
            star =  star + '*';
        }
    console.log(star)
    }
}
var n = 1;
console.log( rysujChoinkę(n) );