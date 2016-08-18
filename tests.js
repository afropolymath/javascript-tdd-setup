// 'use strict'

var chai = require('chai');
var assert = chai.assert;

var NotesApplication = require('./lib/notesapplication.js');
var Note = require('./lib/note.js');

describe("Note creation works properly", function() {
  var note = new Note("Hello world", "Chidiebere");

  it("The Note should be an type of object and an instance of a Note class", function  () {
    assert(typeof note == "object");
    assert(note instanceof Note);
  });

  it("assigns author based on the parameter supplied in the constructor", function () {
    assert(note.author == "Chidiebere");
  });

  it("assigns content based on the parameter supplied in the constructor", function () {
    assert(note.content == "Hello world");
  });
});


describe("Notes Application creation works properly", function () {
  var noteApp = new NotesApplication();

  it("Should be an type of object and an instance of a NotesApplication class", function () {
    assert(typeof noteApp == "object");
    assert(noteApp instanceof NotesApplication);
  });

});


describe("Notes application increments number of notes as notes are added", function() {
  it("increments the note list as notes are added", function () {
    var note = new Note("Hello world", "Chidiebere");
    var noteApp = new NotesApplication("Chidiebere");

    assert(noteApp.notes.length === 0);
    noteApp.addNote(note);
    assert(noteApp.notes.length === 1);
  });
});


describe("Notes Application can get specific Notes", function () {
  var note = new Note("Hello world", "Chidiebere");
  var noteApp = new NotesApplication("Chidiebere");

  it("return correct note", function () {
    noteApp.addNote(note);
    assert(noteApp.get(1) === note);
  });

  it("return null if id does not exit", function () {
    assert(noteApp.get(5) === "Note with ID: " + 5 + " not found.");
  });
});


describe("Notes Application can search for notes", function () {
  var noteApp = new NotesApplication("Chidiebere");
  var noteOne = new Note("Hello world", "Chidiebere");
  var noteTwo = new Note("It's a small world", "James");
  var noteThree = new Note("I am awesome", "Chidiebere");
  noteApp.addNote(noteOne);
  noteApp.addNote(noteTwo);
  noteApp.addNote(noteThree);


  it("Should return notes with search string", function () {
    var notes = noteApp.search("world");

    assert(notes.indexOf(noteOne) !== -1);
  });

  it("Should not return notes without search string", function () {
    var notes = noteApp.search("world");
    assert(notes.indexOf(noteThree) === -1);
  });

});


describe("Note Application can delete notes", function () {
  var noteApp = new NotesApplication("Chidiebere");
  var noteOne = new Note("Hello world", "Chidiebere");
  var noteTwo = new Note("It's a small world", "James");
  noteApp.addNote(noteOne);
  noteApp.addNote(noteTwo);

  it("Can delete a specific note", function () {
    assert(noteApp.get(1) === noteOne);
    noteApp.delete(1);
    assert(noteApp.get(1) === "Note with ID: " + 1 + " not found.");
  });

  it("Deletes only one note", function () {
    noteApp.addNote(noteOne);
    assert(noteApp.notes.length === 2);
    noteApp.delete(3);
    assert(noteApp.notes.length === 1);
  });
});


describe("Notes Application can edit notes", function () {
  var noteApp = new NotesApplication("Chidiebere");
  var note = new Note("Hello world", "Chidiebere");

  it("Can edit a note content", function () {
    noteApp.addNote(note);
    noteApp.edit(1, "new note content");
    assert(note.content === "new note content");
  });
});
