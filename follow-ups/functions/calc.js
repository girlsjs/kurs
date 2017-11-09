let nextOperation = null;
let lastNumber = "0";
let currentNumber = "0";
let decimals = false;
let isResetNeeded = false;

function reset() {
  currentNumber = 0;
  refreshScreen();
}

document.querySelector("#C").addEventListener( 'click' , reset);

function hardReset() {
  reset();
  lastNumber = "0";
  decimals = false;
  nextOperation = null;  
  isResetNeeded = false;  
}

document.querySelector("#AC").addEventListener( 'click' , hardReset);

function refreshScreen( newValue = currentNumber ) {
  document.querySelector("#screen").innerHTML = newValue;    
}

function percent() {
  currentNumber = parseFloat( currentNumber ) / 100;
  refreshScreen( currentNumber ); 
}
document.querySelector("#percent").addEventListener( 'click' , percent);

function pointClicked() {
  if ( decimals === false ) {
    currentNumber += ".";    
    decimals = true;
    refreshScreen();
  }
}

document.querySelector("#point").addEventListener( 'click' , pointClicked);

function processOperation( operation ) {
  return operation( parseFloat( lastNumber ), parseFloat( currentNumber ) );
}

function scheduleNextOperation( operation ) { 
  if( isResetNeeded && operation ) {
    lastNumber = lastNumber.toString();    
    isResetNeeded = false;
  } else if( nextOperation ) {
    lastNumber = processOperation( nextOperation );
    lastNumber = lastNumber.toString();
  } else {
    lastNumber = currentNumber.toString();
  }
  if( operation ) {
    nextOperation = operation;    
    currentNumber = "0";      
  } else {
    isResetNeeded = true;
  }
  refreshScreen( lastNumber );
}

function numberKeyPressed( number ) {
  if( isResetNeeded === true ) {
    hardReset();
  }
  if( currentNumber === 0 || currentNumber === "0" ) {
    currentNumber = number.toString();
  }
  else if ( currentNumber.length < 11 ) {
    currentNumber += number.toString();
  }
  refreshScreen();
}

for( let i = 0; i < 10; i++ ) {
  document.querySelector("#number" + i).addEventListener( 'click' , function() {
    numberKeyPressed( i );
  });
}

function sum ( x, y ) {
  return x + y;
}

function minus ( x, y ) {
  return x - y;
}

function multiply ( x, y ) {
  return x * y;
}

function divide ( x, y ) {
  return x / y;
}

function percent ( x ) {
  return x / 100;
}

document.querySelector("#plus").addEventListener( 'click' , function() {
  scheduleNextOperation ( sum );
});

document.querySelector("#minus").addEventListener( 'click' , function() {
  scheduleNextOperation ( minus );
});

document.querySelector("#multiply").addEventListener( 'click' , function() {
  scheduleNextOperation ( multiply );
});

document.querySelector("#divide").addEventListener( 'click' , function() {
  scheduleNextOperation ( divide );
});

document.querySelector("#equal").addEventListener( 'click' , function() {
  scheduleNextOperation ( null );
});

