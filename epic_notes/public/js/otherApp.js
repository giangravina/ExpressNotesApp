///From lucia-gm feat: Meta tag description on GITHUB link: codecademy.com/learn/make-a-website

// Form reference
const form = {}
form.noteText = document.querySelector('#exampleFormControlTextarea1');
form.addButton = document.querySelector('#addNew');
//form.color = document.querySelector('#formColor');

const notes = document.querySelector('#groupNotes');

form.noteText.focus();

// Functions
function addNote() {
  let text = form.noteText.value;
  let note = document.createElement('div');
  let deleteButton = document.createElement('span');

  note.classList.add('note');
  //note.classList.add(form.color.value);
  note.innerHTML = `<div class='note-text'>${text}</div>`;
  deleteButton.classList.add('note-delete');
  deleteButton.innerHTML = '&times;';

  note.appendChild(deleteButton);  
  notes.appendChild(note);

  form.noteText.value = '';
  form.noteText.focus();

  addListenerDeleteButton(deleteButton);
}

function addListenerDeleteButton(deleteButton) {
  deleteButton.addEventListener('click', function (e) {
    e.stopPropagation();      
    deleteNote(e);
  });
}

function deleteNote(e) {
  let eventNote = e.target.parentNode;
  eventNote.parentNode.removeChild(eventNote);
}



// Event Listeners
form.addButton.addEventListener('click', function (e) {
  e.preventDefault();  
  if (form.noteText.value != '') {
    addNote();
  }
})



