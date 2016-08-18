'use strict'

var chai = require('chai');
var assert = chai.assert;

var NotesApplication = require('./lib/notesapplication.js');
var Note = require('./lib/note.js');

describe("Note creation works properly", function() {
    it("assigns author based on the parameter supplied in the constructor", function() {
        note = new Note("Hello world", "Chidiebere")
        assert(note.author == "Chidiebere")
    })
})

describe("Notes application increments number of notes as notes are added", function() {
    it("increments the note list as notes are added", function() {
        note = new Note("Hello world", "Chidiebere");
        noteapp = new NotesApplication("Chidiebere");
        assert(noteapp.notelist.length == 0)
        noteapp.addNote(note)
        assert(noteapp.notelist.length == 1)
    })
})