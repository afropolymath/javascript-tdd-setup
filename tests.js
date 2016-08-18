//   'use strict'

var chai = require('chai');
var assert = chai.assert;

var NotesApplication = require('./lib/notesapplication.js');
var Note = require('./lib/notes.js');

describe("Note creation works properly", function() {


    it("creates a note with parameters author and note_content", function() {
        var note = new Note("This is my first note");
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

    it("implements the create, getNote, searchNote, listNotes, editNote and deleteNote functions", function() {
        var noteapp = new NotesApplication();
        assert(noteapp.hasOwnProperty("create"))
        assert(noteapp.hasOwnProperty("getNote"))
        assert(noteapp.hasOwnProperty("searchNote"))
        assert(noteapp.hasOwnProperty("listNotes"))
        assert(noteapp.hasOwnProperty("editNote"))
        assert(noteapp.hasOwnProperty("deleteNote"))
    })

    it("adds notes successfully", function() {
        var note = new Note("Chidiebere", "Hello world");
        var noteapp = new NotesApplication();
        var len = noteapp.notesList.length

        noteapp.create(note)
        var new_len = noteapp.notesList.length
        assert(new_len === (len + 1));
        assert(note === noteapp.notesList[0]);
    })

    it("retrieves notes successfully", function() {
        var note = new Note("Chidiebere", "Hello world");
        var noteapp = new NotesApplication();
        noteapp.create(note)
        assert(noteapp.getNote(0) === note)
        assert(noteapp.getNote(5) === "No note with ID " + "'" + 5 + "'")
    })


    it("searches for notes successfully", function() {
        var note1 = new Note("Chidiebere", "Hello world");
        var noteapp = new NotesApplication();

        assert(noteapp.searchNote("world") == "O Results Found")

        noteapp.create(note1);
        assert(noteapp.searchNote("world") == "1 Results Found");

        var note2 = new Note("Awa", "working with Functions");
        noteapp.create(note2);
       
        assert(noteapp.searchNote("wor") === "2 Results Found");
        assert(noteapp.searchNote("Awa") === "0 Results Found")


    })


    it("returns a list of notes or an empty list if no list is present", function() {
        var noteapp = new NotesApplication();
        assert(noteapp.listNotes().length === 0)

        var note1 = new Note("Awa", "Hello world");
        var note2 = new Note("Awa", "Working with Functions");


        noteapp.create(note1);
        noteapp.create(note2);

        assert(noteapp.listNotes() === noteapp.notesList)
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
        noteapp.create(note);

        assert(noteapp.notesList[0] === note)

        noteapp.editNote(0, "Going Deeper in Javascript")

        assert(noteapp.notesList[0].note_content === "Going Deeper in Javascript")

    })
})

