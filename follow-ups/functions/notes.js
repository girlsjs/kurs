
function getNote() {
  let element = document.createElement( 'div' );
  element.classList.add( 'note' );
  return element;
}

function addNoteToBoard( note ) {
  document.querySelector( '#board' ).appendChild( note );
}

function showNewNoteForm () {
  document.querySelector("#overlay").classList.add('active');
}

document.querySelector("#pen").addEventListener( 'click', showNewNoteForm );

function submitNewNoteForm ( ) {
  const text = document.querySelector('#new-note-text').value || undefined;
  document.querySelector('#new-note-text').value = "";
  createNewNote ( text );
  document.querySelector("#overlay").classList.remove('active');
}

document.querySelector("#new-note-add").addEventListener( 'click', submitNewNoteForm );
