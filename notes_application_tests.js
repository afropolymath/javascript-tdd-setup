'use strict'

var chai = require('chai');
var assert = chai.assert;

var NotesApplication = require('./lib/notesapplication.js');
var Notes = require('./lib/notes.js');

describe("Check that creating a note object properly", function(){
	it("should assign the note content based on the parameter supplied",function(){
		var an_object = {
			author: "kachi",
			note_content: "stuff"
		};
		var note = new Notes(an_object);
		assert(note.note_content == "stuff");
	})

	it("should assign the author based on the parameter supplied",function(){
		var an_object = {
			author: "kachi",
			note_content: "stuff"
		};
		var note = new Notes(an_object);
		assert(note.author == "kachi");
	})
})

describe("Shoud check that you can create a new note", function(){
	it("it should check that a new entry was added", function(){
		var note = new Notes({author: "kachi", note_content: "stuff"});
		var check = new NotesApplication();
		assert(check.notes.length === 0);
		check.create_notes(note);
		assert(check.notes.length === 1);
	})

	it("it should check if the parameter being supplied is an instance of the Notes class", function(){
		var note = new Notes({author: "kachi", note_content: "stuff"});
		var check = new NotesApplication();
		check.create_notes(note);
		assert.instanceOf(note, Notes);
	})
})

describe("it should check if you can get a note", function(){
	it("check if you can retrieve a note with an ID of 0", function(){
		var note = new Notes({author: "kachi", note_content: "stuff"});
		var check = new NotesApplication();
		check.create_notes(note);
		check.get(0);
		assert(check.notes[0].note_content === "stuff");
	})

	it("check that you can't retrieve a note with an invalid ID", function(){
		var note = new Notes({author: "kachi", note_content: "stuff"});
		var check = new NotesApplication();
		check.create_notes(note);
		check.get(4.5);
		assert("ID is invalid");
	})

})

describe("edit functionality works properly", function(){
	it("it should check that the content of a note at index 0 changes when edited", function(){
		var note = new Notes({author: "kachi", note_content: "stuff"});
		var check = new NotesApplication();

		check.create_notes(note);
		check.edit(0, "new stuff")
		assert(check.notes[0].note_content === "new stuff");
	})

	it("check that you can't edit a note with an invalid ID", function(){
		var note = new Notes({author: "kachi", note_content: "stuff"});
		var check = new NotesApplication();
		check.create_notes(note);
		check.edit(0.1, "new stuff")
		assert("ID is invalid")
	})
})

describe("that you can delete a note", function(){
	it("check that you can delete a note at index 1 ", function(){
		var note = new Notes({author: "kachi", note_content: "stuff"});
		var note2 = new Notes({author: "kachi", note_content: "stuff2"});
		var check = new NotesApplication();
		check.create_notes(note);
		check.create_notes(note2);
		assert(check.notes.length === 2);
		check.delete(1);
		assert(check.notes.length == 1);

	})

	it("checks that you can't delete a note at an invalid index", function(){
		var note = new Notes({author: "kachi", note_content: "stuff"});
		var note2 = new Notes({author: "kachi", note_content: "stuff2"});
		var check = new NotesApplication();
		check.create_notes(note);
		check.create_notes(note2);
		check.delete(5.1);
		assert("ID is invalid")
	})
})