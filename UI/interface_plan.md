model of interface:

index.html:
[ ] Title
[ ] create note button (id="create-note")
  -> [ ] shows/hides? form (id="save-note") to add title and text (automated date added)
[ ] list of notes, abbreviated (id="abbreviated-list")
  -> [ ] button for seeing full note (class="see-full-text")
  -> [ ] hides list and create, shows full text of note (id="full-text")


Notes:

- hardcoded a list of abbreviated notes and buttons in the HTML file to be extracted into interface most likely
- hardcoded a full note


interface.js:
[x] hide form
-> [x] event listener to show form, when clicking create note
      id="create-note"

[x] event listener for create note button
  -> [x] saves values of title and text
  -> saves date of each note
  -> [x] calls saveote function
  -> [x] use html <p> id to save to fullText to page(with title and text labels)
  -> [x] hides form when saved

[ ] add note to list as an abbreviation


[ ] event listener to click view note
  -> hides list and shows full text of note






extras:
[ ] would we like the full note as a pop up/float on page?
