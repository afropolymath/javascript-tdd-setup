'use strict'

var chai = require('chai');
var assert = chai.assert;

var NotesApplication = require('./lib/notesapplication.js');
var Notes = require('./lib/notes.js');

describe("Check that creating a note object works properly", function(){
	it("should assign the note content based on the parameter supplied",function(){
		var person = {
			author: "kachi",
			note_content: "stuff"
		};
		var note = new Notes(person);
		assert(note.note_content == "stuff");
	})

	it("should assign the author based on the parameter supplied",function(){
		var person = {
			author: "kachi",
			note_content: "stuff"
		};
		var note = new Notes(person);
		assert(note.author == "kachi");
	})
})

describe("should test that create note function works", function(){
	it("it should check that a new entry was added", function(){
		var note = new Notes({author: "kachi", note_content: "stuff"});
		var noteapp_object = new NotesApplication();
		assert(noteapp_object.notes.length === 0);
		noteapp_object.create_notes(note);
		assert(noteapp_object.notes.length === 1);
	})

	it("it should check if the parameter being supplied is an instance of the Notes class", function(){
		var note = new Notes({author: "kachi", note_content: "stuff"});
		var noteapp_object = new NotesApplication();
		noteapp_object.create_notes(note);
		assert.instanceOf(note, Notes);
	})
})

describe("it should check if you can get a note", function(){
	it("check if you can retrieve a note with an ID of 0", function(){
		var note = new Notes({author: "kachi", note_content: "stuff"});
		var noteapp_object = new NotesApplication();
		noteapp_object.create_notes(note);
		noteapp_object.get(0);
		assert(noteapp_object.notes[0].note_content === "stuff");
	})

	it("throws error when trying to get a note with an invalid id", function(){
		var note = new Notes({author: "kachi", note_content: "stuff"});
		var noteapp_object = new NotesApplication();
		noteapp_object.create_notes(note);
		noteapp_object.get(4.5);
		assert("ID is invalid");
	})

})

describe("edit functionality works properly", function(){
	it("it should check that the content of a note at index 0 changes when edited", function(){
		var note = new Notes({author: "kachi", note_content: "stuff"});
		var noteapp_object = new NotesApplication();

		noteapp_object.create_notes(note);
		noteapp_object.edit(0, "new stuff")
		assert(noteapp_object.notes[0].note_content === "new stuff");
	})

	it("throws an error when you try to edit a note with an invalid ID", function(){
		var note = new Notes({author: "kachi", note_content: "stuff"});
		var noteapp_object = new NotesApplication();
		noteapp_object.create_notes(note);
		noteapp_object.edit(0.1, "new stuff")
		assert("ID is invalid")
	})
})

describe("that you can delete a note", function(){
	it("check that you can delete a note at index 1 ", function(){
		var note = new Notes({author: "kachi", note_content: "stuff"});
		var note2 = new Notes({author: "kachi", note_content: "stuff2"});
		var noteapp_object = new NotesApplication();
		noteapp_object.create_notes(note);
		noteapp_object.create_notes(note2);
		assert(noteapp_object.notes.length === 2);
		noteapp_object.delete(1);
		assert(noteapp_object.notes.length == 1);

	})

	it("throws an error when you try to delete a note at an invalid index", function(){
		var note = new Notes({author: "kachi", note_content: "stuff"});
		var note2 = new Notes({author: "kachi", note_content: "stuff2"});
		var noteapp_object = new NotesApplication();
		noteapp_object.create_notes(note);
		noteapp_object.create_notes(note2);
		noteapp_object.delete(5.1);
		assert("ID is invalid")
	})
})

describe("Check that the user can retrieve notes", function(){
	it("should check that the user can retrieve added notes", function(){
		var note = new Notes({author: "kachi", note_content: "stuff"});
		var note1 = new Notes({author: "me", note_content: "more stuff"});
		var note2 = new Notes({author: "me", note_content: "more stuff"});
		var noteapp_object = new NotesApplication();
		noteapp_object.create_notes(note);
		var hold_notes = noteapp_object.list_notes();
		assert.deepEqual([note], hold_notes);
	})
})

describe("Check that a user can search for text in notes", function(){
	it("should check that a user can search for specific text", function(){
		var note = new Notes({author: "kachi", note_content: "stuff"});
		var note1 = new Notes({author: "me", note_content: "more stuff"});
		var noteapp_object = new NotesApplication();
		noteapp_object.create_notes(note);
		noteapp_object.create_notes(note1);
		noteapp_object.search("s");
		assert(["stuff", "more stuff"]);
	})
})