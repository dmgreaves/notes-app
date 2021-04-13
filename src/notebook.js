
class Notebook {
  constructor() {
     this.notes = [];
   }
  create(text) {
    let noteInstance = new Note(text);
    this.notes.push(noteInstance);
    return noteInstance;
  }

  abbrev(text) {
    return text.slice(0,17) + "...";
  }

  
}
