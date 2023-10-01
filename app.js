console.log('Notes App')
showNotes();

//  Adding notes to localStorage //
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
 let addTxt = document.getElementById('addTxt');
 let addTitle = document.getElementById('addTitle');
 let notes = localStorage.getItem('notes');
 if (notes == null) {
  notesObj = [];
 }
 else {
  notesObj = JSON.parse(notes);
 }
 let myObj = {
  title: addTitle.value,
  text: addTxt.value
 };
 notesObj.push(myObj);
 localStorage.setItem('notes', JSON.stringify(notesObj));
 addTxt.value = "";
 addTitle.value = "";
 console.log(notesObj);
 showNotes();
});

// Function to show elements from localStorage //
function showNotes() {

 let notes = localStorage.getItem('notes');

 if (notes == null) {
  notesObj = [];
 }
 else {
  notesObj = JSON.parse(notes);
 }

 let html = '';

 notesObj.forEach(function (element, index) {
  html +=
   `<div class="noteCard my-2 mx-3 card" style="width: 17.5rem;">
  <div class="card-body">
   <h5 class="card-title">${element.title}</h5> 
   <p class="card-text">${element.text} </p>
   <button id='${index}' onclick='deleteNote(this.id)' class="btn btn-danger">Delete</button>
  </div>
 </div>`
 });

 let notesElm = document.getElementById('notes');
 if (notesObj.length != 0) {
  notesElm.innerHTML = html;
 }
 else {
  notesElm.innerHTML = `Nothing to show! Use 'Add a Note' section above to Add Notes`;
 }

}

// Function to delete a Note //
function deleteNote(index) {

 console.log('I am deleting', index)

 let notes = localStorage.getItem('notes');

 if (notes == null) {
  notesObj = [];
 }
 else {
  notesObj = JSON.parse(notes);
 }

 notesObj.splice(index, 1)
 localStorage.setItem('notes', JSON.stringify(notesObj));
 showNotes();

}

// Search Features //
let search = document.getElementById('searchTxt');
search.addEventListener('input', function () {

 let inputVal = search.value.toLowerCase();
 console.log('Input event fired!', inputVal);
 let noteCards = document.getElementsByClassName('noteCard');

 Array.from(noteCards).forEach(function (element) {
  let cardTxt = element.getElementsByTagName('p')[0].innerText;
  if (cardTxt.includes(inputVal)) {
   element.style.display = 'block';
  }
  else {
   element.style.display = 'none';
  }
 });

})

// Function to delete a Note with confirmation //
function deleteNote(index) {
 let confirmation = confirm('Are you sure you want to delete this note?');

 if (confirmation) {
  let notes = localStorage.getItem('notes');

  if (notes == null) {
   notesObj = [];
  } else {
   notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem('notes', JSON.stringify(notesObj));
  showNotes();
 }
}

/*
Further Features to add in Future:
1. Mark a note as Important
2. Separate notes by user
*/ 