// NotesApplication class

var Notes = require('./notes.js');

module.exports = function NotesApplication() {
    this.notes = [];
    this.create_notes = function(note){
        if(note instanceof Notes && note.note_content === String) 
        	this.notes.push(note);
    }

    this.get = function(note_id){
        if(this.notes.hasOwnProperty(note_id)){ 
            return this.notes[note_id].note_content;
        }
        else console.log("ID is invalid");
    }  
	
    this.listNotes = function(){
        var arr = [];
        for (var i= 0;i<this.notes.length;++i) {  
        arr.push({note_id : i, note_Content: this.notes[i].note_Content, By_Author: this.notes[i].author});
        }
        return arr;
    }
	this.search = function(search_text){
		console.log("Please wait while we try to search")
		for (var i = 0; i<this.notes.length;i++)
		{
			if (this.notes[i].note_content.indexOf(search_text) !== -1 )
			console.log("Note_ID" + i);
			console.log(this.notes[i].note_content);
			console.log("By Author: ", this.notes[i].author); 
	}

    this.edit = function(note_id, new_content){
        if(this.notes.hasOwnProperty(note_id)) 
        this.notes[note_id].note_content = new_content;
        else console.log("ID is invalid");
    }
    this.delete = function(note_id){
        if(this.notes.hasOwnProperty(note_id)) 
        this.notes.splice(note_id, 1);
        else console.log("ID is invalid");
    }
}



