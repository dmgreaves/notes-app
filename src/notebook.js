
class Notebook {
  constructor() {
     this.notes = [];
   }
  create(title, text) {
    let noteInstance = new Note(title, text);
    this.notes.push(noteInstance);
    console.log(this.notes);
    return noteInstance;
  }

  abbrev(text) {
    return text.slice(0,17) + "...";
  }


}
