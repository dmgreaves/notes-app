
class Notebook {
  constructor() {
     this.notes = [];
   }
  create(title, text) {
    let noteInstance = new Note(title, text);
    this.notes.push(noteInstance);
    return noteInstance;
  }
}
