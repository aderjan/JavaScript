var n = 5;

function rysujChoinkę(n) {
	
    for ( var n = 1 ; n <= 5 ; n++) {
        var star = '';
        
        for (var j = 1 ; j <= (n*2 - 1) ; j++) {
            star = star + '*';
        }
    console.log(star);
    }
}

rysujChoinkę(n);