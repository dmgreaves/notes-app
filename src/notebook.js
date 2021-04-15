
class Notebook {
  constructor() {
     this.notes = [];
     this.result = "";
   }

  create(text) {
    let noteInstance = new Note(text);
    this.notes.push(noteInstance);
    console.log(this.notes);

    return noteInstance;

  }

  abbrev(text) {
    return text.slice(0,17) + "...";
  }


  //from https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  async postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }

  emojify(text) {
      this.postData('https://makers-emojify.herokuapp.com/', { text: text })
        .then(data => {
          let emoji = data.emojified_text;
          console.log(emoji);
          this.create(emoji);
        });
      }

}
