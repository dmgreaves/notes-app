
class Note {

  constructor(text, date = new Date()){
    this.text = text;
    this.date = date;
  }

  formatDate() {
    return this.date.toString().slice(0,15).replaceAll(" ","-")
  }


}
