// NotesApplication class

module.exports = function() {
  this.notes = [];
  this.noteCount = 0;

  this.addNote = function (note) {
    this.noteCount += 1;
    note.id = this.noteCount;
    this.notes.push(note);
  };

  this.get = function (note_id) {
    for (var i = 0; i < this.notes.length; i++) {
      var note = this.notes[i];
      if (note.id === note_id) return note;
    }

    return "Note with ID: " + note_id + " not found.";
  };

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

  this.delete = function (note_id) {
    var note = this.get(note_id);

    if (typeof note == "object") {
      var note_index = this.notes.indexOf(note);
      this.notes.splice(note_index, 1);
    } else {
      return note;
    }
  };

  this.edit = function (note_id, new_content) {
    var note = this.get(note_id);

    if (typeof note == "object") {
      note.content = new_content;
    } else {
      return note;
    }
  };

};

