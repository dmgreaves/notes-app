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

[ ] event listener for create note button
  -> saves values of title and text
  -> saves date of each note
  -> calls add note function
  -> use html div id to save to page
  -> hides form when saved

[ ] event listener to click view note
  -> hides list and shows full text of note






extras:
[ ] would we like the full note as a pop up/float on page?
