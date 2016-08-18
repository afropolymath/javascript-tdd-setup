// NotesApplication class

module.exports = function() {
	/**
 * NotesApplication class for managing authors' notes
 * @constructor
 */


	this.notesList = [];


	/**
	 * Adds a note to the NotesApplication instance
	 * @param {Note} note A note object
	 */

	 create: function(note) {
		if (note instanceof Note) {
			this.notesList.push(note);
		} else {
			return "The Object supplied is not a note!"
		}
	}


	/**
	 * Operates on an instance of NotesApplication
	 * Lists all the notes in the application
	 */
	 listNotes: function() {
		if (this.notesList.length < 1) {
			return [];
		} else {
			for (var i = 0; i < this.notesList.length; i++) {
				console.log("Note ID: " + i + "\n"
						+ "CONTENT: " + this.notesList[i].note_content + "\n"
						+ "By Author " + this.notesList[i].author + "\n")
			}
			return this.notesList;
		}
		
	}


	/**
	 * Operates on an instance of NotesApplication
	 * Fetches the note at
	 * @param {Number} note_id The index of the note within the list of notes
	 */
	getNote: function(note_id) {
		var note = this.notesList[note_id]
		if (note)
			return note
		return "No note with ID " + "'" + note_id + "'"
	}



	/**
	 * Operates on an instance of NotesApplication
	 * Searches all notes that match a certain string
	 * @param {string} search_text The text to search for.
	 */
	searchNote: function(search_text) {
		if (this.notesList.length < 1) {
			return "O Results Found";
		} else {
			var notesFound = []
			
			for (var i = 0; i < this.notesList.length; i++) { 
				if (this.notesList[i].note_content.indexOf(search_text) > -1) 
					notesFound.push(this.notesList[i])
			}
			
			if (notesFound.length < 1) {
				return "0 Results Found";
			} else {
				for (var j = 0; j < notesFound.length; j++) {
					console.log( "Showing results for search " + "'" + search_text + "'" + "\n"
							+ "Note ID: " + j + "\n"
							+ "CONTENT: " + this.notesList[j].note_content + "\n"
							+ "By Author " + this.notesList[j].author + "\n" )
				}
				return notes.length + " Results Found"
			}	
		}	
	}


	/**
	 * Operates on an instance of NotesApplication
	 * Deletes the note at
	 * @param {Number} note_id The index of the note within the list of notes
	 */
	deleteNote: function(note_id) {
		var note = this.notesList[note_id]
		if (note) {
			this.notesList.pop(note)
			return "Note with ID of " + note_id + " succcessfully deleted!";
		} else {
			return "Note with ID of " + note_id + " is not in the Application!";
		}
	}


	/**
	 * Operates on an instance of NotesApplication
	 * Edits the note at
	 * @param {Number} note_id The index of the note within the list of notes
	 * @param {string} new_content The new content to add
	 */
	editNote: function(note_id, new_content) {
		var note = this.notesList[note_id]
		if (note) {
			note.note_content = new_content;
			return "Note with ID of " + note_id + " succcessfully edited!"
		} else {
			return "Note with ID of " + note_id + " is not in the Application!"
		}	
	}
}


// var note1 = new Note("Awa", "This is my first note");
// var noteApp = new NotesApplication();
// noteApp.create(note1);

// console.log()

// noteApp.editNote(0, "I just edited my first note")



// console.log()

// console.log(noteApp.searchNote("edited"));




