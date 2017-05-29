/* Warunki początkowe */
let currentNumber = 1;
document.querySelector( '#slide' + currentNumber ).classList.add( 'show' );	
document.querySelector( '#pin' + currentNumber ).classList.add( 'selected' );

let playing = false;
let slideDuration = 3500;
let slideshowInterval = null;

function playButtonClicked ( event ) {
	if ( playing === true ) {
		stopSlideshow();
	} else {
		startSlideshow();
	}
	//event.stopPropagation();
}
document.querySelector( '#play' ).addEventListener( 'click', playButtonClicked );

function startSlideshow( ) {
	document.querySelector( '#play' ).classList.add('on');	
	playing = true;
	slideshowInterval = setInterval( showNextSlide, 3000 );	
}

function stopSlideshow( ) {
	document.querySelector( '#play' ).classList.remove( 'on' );	
	playing = false;
	clearInterval( slideshowInterval );	
}

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

function showSlide1 ( ) {
   showSlide( 1 );
}
document.querySelector('#pin1').addEventListener( 'click', showSlide1 );

function showSlide2 ( ) {
   showSlide( 2 );
}
document.querySelector('#pin2').addEventListener( 'click', showSlide2 );

function showSlide3 ( ) {
   showSlide( 3 );
}
document.querySelector('#pin3').addEventListener( 'click', showSlide3 );

function showSlide4 ( ) {
   showSlide( 4 );
}
document.querySelector('#pin4').addEventListener( 'click', showSlide4 );

function showSlide5 ( ) {
   showSlide( 5 );
}
document.querySelector('#pin5').addEventListener( 'click', showSlide5 );

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

function maybeStopSlideshow ( ) {
	if ( playing === true ) {
		stopSlideshow();
	}
}
//document.querySelector( '#wrapper' ).addEventListener( 'click', maybeStopSlideshow );
