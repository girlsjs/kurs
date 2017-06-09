/* Warunki początkowe */
let currentNumber = 1;
document.querySelector( '#slide' + currentNumber ).classList.add( 'show' );	
document.querySelector( '#pin' + currentNumber ).classList.add( 'selected' );


function showSlide ( newNumber ) {
    document.querySelector( '.show' ).classList.remove( 'show' );
    document.querySelector( '#slide' + newNumber ).classList.add( 'show' );	
	selectPin( newNumber );
	currentNumber = newNumber;	
}

function selectPin ( newNumber ) {
    document.querySelector( '.selected' ).classList.remove( 'selected' );
    document.querySelector( '#pin' + newNumber ).classList.add( 'selected' );
}

for (let numerPinu = 1; numerPinu <= 5; numerPinu++) {
  document
    .querySelector('#pin' + numerPinu)
    .addEventListener( 'click', function () {
      showSlide(numerPinu)
    } );
}

function showNextSlide ( ) {
	let newNumber = currentNumber + 1;
	if( newNumber > 5 ) {
		newNumber = 1;
	}
  showSlide( newNumber );
}
document.querySelector('#next').addEventListener( 'click', showNextSlide );

function showPreviousSlide ( ) {
	let newNumber = currentNumber - 1;
	if( newNumber < 1 ) {
		newNumber = 5;
	}
  showSlide( newNumber );
}
document.querySelector('#prev').addEventListener( 'click', showPreviousSlide );
