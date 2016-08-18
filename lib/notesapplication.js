// NotesApplication class

var Notes = require('./notes.js');

module.exports = function NotesApplication() {
    this.notes = [];
    this.create_notes = function(note){
        if(note instanceof Notes && note != Number) 
        	this.notes.push(note);
    }
    this.get = function(note_id){
        if(this.notes.hasOwnProperty(note_id)){ 
            return this.notes[note_id].note_content;
        }
        else console.log("ID is invalid");
    }
    this.edit = function(note_id, new_content){
        if(this.notes.hasOwnProperty(note_id)) 
        this.notes[note_id].note_content = new_content;
        else console.log("ID is invalid");
    }
    this.delete = function(note_id){
        if(this.notes.hasOwnProperty(note_id)) 
        this.notes.splice(note_id);
        else console.log("ID is invalid");
    }
}



