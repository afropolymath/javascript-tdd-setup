//   'use strict'

var chai = require('chai');
var assert = chai.assert;

var NotesApplication = require('./lib/notesapplication.js');
var Note = require('./lib/notes.js');

describe("Note creation works properly", function() {

    it("creates a note with parameters author and note_content", function() {
        var note = new Note();
        assert(note.hasOwnProperty("author"))
        assert(note.hasOwnProperty("note_content"))

    })

    it("assigns author based on the parameter supplied in the constructor", function() {
        var note = new Note("Chidiebere", "Hello world");
        assert(note.author === "Chidiebere")
    })

    it("assigns note content based on the parameter supplied in the constructor", function() {
        var note = new Note("Awa", "Welcom Awa");
        assert(note.note_content === "Welcom Awa");
    })
})


describe("Notes application works properly", function() {

    it("creates an empty list of notes when notes application is created", function() {
        var noteapp = new NotesApplication();
        assert(noteapp.notesList)
    })

    // it("adds, retrieves, searches, lists, edits and deletes notes", function() {
    //     var noteapp = new NotesApplication();
        
    // })

    it("adds notes successfully", function() {
        var note = new Note("Chidiebere", "Hello world");
        var noteapp = new NotesApplication();
        var len = noteapp.length

        noteapp.create(note)
        var new_len = noteapp.length

        assert(new_len === len + 1);
        assert(note in noteapp.notesList);
    })

    it("retrieves notes successfully", function() {
        var note = new Note("Chidiebere", "Hello world");
        var noteapp = new NotesApplication();
        assert(noteapp.getNote(0) === note)
        assert(noteapp.getNote(5) === 'string')
    })


    it("searches for notes successfully", function() {
        var note1 = new Note("Chidiebere", "Hello world");
        var noteapp = new NotesApplication();

        assert(noteapp.searchNote("wo") === "0 Results Found")

        noteapp.create(note1);
        assert(noteapp.searchNote("wo") === "1 Results Found");

        var note2 = new Note("Awa", "Working with Functions");
        noteapp.create(note2);
       
        assert(noteapp.searchNote("or") === "2 Results Found");

        assert(noteapp.searchNote("Awa") === "0 Results Found")


    })


    it("returns a list of notes or an empty list if no list is present", function() {
        var noteapp = new NotesApplication();
        assert(noteapp.listNote() === [])

        var note1 = new Note("Awa", "Hello world");
        var note2 = new Note("Awa", "Working with Functions");


        noteapp.create(note1);
        noteapp.create(note2);

        assert(noteapp.listNote() === noteapp.notesList)
        assert(noteapp.notesList.length === 2)
    })


    it("deletes note correctly", function() {

        var note = new Note("Chidiebere", "Hello world");
        var noteapp = new NotesApplication();

        assert(noteapp.notesList.length === 0)

        noteapp.create(note);
        assert(noteapp.notesList.length === 1)

        noteapp.deleteNote(0)
        assert(noteapp.notesList.length === 0)
    })

    it("edits notes correctly", function() {

        var note = new Note("Awa", "Hello world");
        var noteapp = new NotesApplication();
        var testNote = noteapp.notesList[0];
        noteapp.create(note);

        assert(testNote === note)

        noteapp.editNote(0, "Going Deeper in Javascript")
        assert(testNote !== note)

    })
})

