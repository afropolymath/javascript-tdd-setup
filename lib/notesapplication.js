/**
 * Create a new NotesApplication
 * @class
 */
module.exports = function() {
  this.notes = [];
  this.noteCount = 0;

  /**
   * Adds a note to the notes collection
   * @function
   * @param {Note} note A note instance
   */
  this.addNote = function (note) {
    this.noteCount += 1;
    note.id = this.noteCount;
    this.notes.push(note);
  };

  /**
   * Find a specific note
   * @function
   * @param {Number} note_id Note id
   * @return {Note} note
   */
  this.get = function (note_id) {
    for (var i = 0; i < this.notes.length; i++) {
      var note = this.notes[i];
      if (note.id === note_id) return note;
    }

    return "Note with ID: " + note_id + " not found.";
  };

  /**
   * Find notes that contain query String
   * @function
   * @param {String} search_text Query text
   */
  this.search = function (search_text) {
    var search_result = [];

    for (var i = 0; i < this.notes.length; i++) {
      var note = this.notes[i];
      if (note.content.indexOf(search_text) != -1)
        search_result.push(note);
    }

    if (search_result.length > 1)
      return search_result;
    else
      return "No note found for " + search_text;
  };

  /**
   * Delete a specific note
   * @function
   * @param {String} note_id Note id
   */
  this.delete = function (note_id) {
    var note = this.get(note_id);

    if (typeof note == "object") {
      var note_index = this.notes.indexOf(note);
      this.notes.splice(note_index, 1);
    } else {
      return note;
    }
  };

  /**
   * Edit the content of a specific note.
   * @function
   * @param {Number} note_id Note id
   * @param {String} new_content New content
   */
  this.edit = function (note_id, new_content) {
    var note = this.get(note_id);

    if (typeof note == "object") {
      note.content = new_content;
    } else {
      return note;
    }
  };

};

