var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.',
    newText = 'Zielone słonie',
    animal = newText.toUpperCase(),
    textAfter = text.replace('Papugi', animal);

//console.log(textAfter.length); 

var halfOfTextAfter = textAfter.slice(0, 45);
console.log(halfOfTextAfter);