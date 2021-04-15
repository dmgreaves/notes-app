
class Note {
  constructor(title, text, date = new Date()){
    this.text = text;
    this.title = title;
    this.date = date;
  }

  formatDate() {
    return this.date.toString().slice(0,15).replaceAll(" ","-")
  }


}
