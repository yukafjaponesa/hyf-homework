const notes = [];

function addNote(memo) {
  notes.push(memo)
};

addNote({
  content: "meeting",
    id: 1
});
addNote({
  content: "business dinner",
    id: 2
}); //save a note
console.log(notes);


function getNoteFromId(id) {
  for (let i = 0; i < notes.length; i++){
  if (id === notes[i].id) {
    return notes[i].content //should return id object
  }}
  return "id should be number/ id does not match"
};
let b = getNoteFromId(1); //get a note
console.log(b); //get 0ll notes


function getAllNote() {
  return notes
};
let c = getAllNote();
console.log(c);


function logOutNotesFormatted() {
  return notes
  return "The note with " + id + ", has the following note text: " + content
};

const logOut = logOutNotesFormatted();
console.log(logOut);
