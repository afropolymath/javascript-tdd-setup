var Notes = require('./notes.js');
module.exports = function NotesApplication() {
	this.notes = [];
	this.create_notes = function(note){
		if(note instanceof Notes) this.notes.push(note);
	}

	this.get = function(note_id){
		if(this.notes.hasOwnProperty(note_id)){ //checks to see if the notes id is an index of 
			return this.notes[note_id].note_content;
		}// end if
		else console.log("ID is invalid");
	}

	this.edit = function(note_id, new_content){
		if(this.notes.hasOwnProperty(note_id)) this.notes[note_id].note_content = new_content;
		else console.log("ID is invalid");
	}

	this.delete = function(note_id){
		if(this.notes.hasOwnProperty(note_id)) this.notes.splice(note_id,1);
		else console.log("ID is invalid");
	}

	this.list_notes = function(){
		var hold_notes = [];
		for(var count = 0; count < this.notes.length; count++){
			hold_notes.push(this.notes[count]);
			console.log("Note ID: " + count);
			console.log("[" + this.notes[count].note_content + "]");
			console.log("By Author [" + this.notes[count].author + "]");
		}// nd for
		return hold_notes;
	}

	this.search = function(search_text){
		search_results = [];
		for (var count = 0; count < this.notes.length; count++){
			if (this.notes[count].note_content.indexOf(search_text) !== -1) 
				search_results.push[this.notes.note_content]
		}
		return search_results;
	}
}


