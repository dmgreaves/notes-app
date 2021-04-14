
class Notebook {
  constructor() {
     this.notes = [];
   }


  abbrev(text) {
    return text.slice(0,17) + "...";
  }

  // from https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  async postData(url = '', data = {}) {
      console.log(2)
      const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
      });
      console.log(4)
      return response.json();
    }

    emojify(text) {
        console.log(1)
        this.postData('https://makers-emojify.herokuapp.com/', {text: text})
            .then(data => {
                console.log(5)
                console.log(data); // JSON data parsed by `data.json()` call
                console.log(data.emojified_text);
                return data.emojified_text;

            });

        console.log(3)
    }

}
