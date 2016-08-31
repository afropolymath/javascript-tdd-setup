'use strict'

var chai = require('chai');
var assert = chai.assert;

var NotesApplication = require('./lib/notesapplication.js');
var Note = require('./lib/notes.js');

describe("Checks if note object  is created", function() {
    it("assigns author based on the parameter supplied in the constructor", function() {
        note = new Note("Hello world", "Tosin")
        noteapp = new NotesApplication("Hello world","Tosin");)
        assert(noteapp.note_content === "Hello world")
    })
    it("should assign the author based on the parameter supplied",function(){
        note = new Note("Hello world", "Tosin");
        noteapp = new NotesApplication("Tosin");
        assert(noteapp.author === "Tosin");
    })
    
})

describe("Create section works fine", function(){
    it("Checks if you can create a new note", function(){
        note = new Notes("Hello world", "Tosin");
        noteapp = new NotesApplication("Hello world", "Tosin");
        assert(check.notes.length === 0);
        noteapp.create_notes(note);
        assert(noteapp.notes.length === 1);
    })
    it("Checks if the parameter being supplied is an instance of the Notes class", function(){
        note = new Notes("Hello world","Tosin");
        noteapp = new NotesApplication("Hello world", "Tosin");
        noteapp.create_notes(note);
        assert.instanceOf(note, Notes);
    })
    it ("checks that you entered a wrong data type for the value for the create", function () {
        noteapp = new NotesApplication("Hello world", "Tosin");
        assert(noteapp.notes.length === 0)
        noteapp.create_notes(1, author);
        assert("Incorrect, please type a letter")
         })
})

describe("it should check if you can get a note", function(){
    it("check if you can retrieve a note with an ID of 0", function(){
        note = new Notes("Hello world", "Tosin");
        noteapp = new NotesApplication("Hello world", "Tosin");
        noteapp.create_notes(note);
        noteapp.get(0);
        assert(noteapp.notes[0].note_content === "Hello world");
        //assert("Hello world");
    })
    it("check that you can't retrieve a note with an invalid ID", function(){
        note = new Notes("Hello world", "Tosin");
        noteapp = new NotesApplication("Hello world", "Tosin");
        noteapp.create_notes(note);
        noteapp.get(4.5);
        assert("ID is invalid");
    })
})

describe("Edit notes section works properly", function(){ 
    it("checks that the content of a note, and updates it when edited", function() {
        note = new Notes("Hello world", "Tosin");
        noteapp = new NotesApplication("Hello world", "Tosin");
        noteapp.create_notes(note);
        noteapp.edit(0, "new_content")
        assert(noteapp.notes[0].note_content === "new_content");
    })
    it("checks to validate ID, if invalid return false for it to be edited", function(){
        note = new Notes("Hello world", "Tosin");
        noteapp = new NotesApplication("Hello world", "Tosin");
        noteapp.create_notes(note);
        noteapp.edit(0.5, "new_content")
        assert("Invalid ID, please try again")
    })
})

describe("search notes section works properly", function(){ 
    it ("it should check and compare the search_text and return all values equal to it.", function() {
        note = new Notes("Hello world", "Tosin");
        noteapp = new NotesApplication("Hello world", "Tosin");
        noteapp.search(0, "search_text")
        assert.equal(check.notes[0].note_content, search_text === "search_text") 
       
    })

     it ("it should check for invalid index and returns error.", function() {
        note = new Notes("Habits", "Tosin");
        noteapp = new NotesApplication("Hello world","Tosin");
        noteapp.search(0.5, "search_text")
        assert("Incorrect, please type a letter")
               
    })
})

describe("Delete section works properly", function(){
    it("check that you can delete a note  ", function(){
        note = new Notes("Hello world","Tosin");
        noteapp = new NotesApplication("Hello world","Tosin");
        noteapp.create_notes(note);
        assert(noteapp.notes.length === 1);
        noteapp.delete(0);
        assert(noteapp.notes.length === 0);
    })
    it("checks that you can't delete a note at an invalid index", function(){
        note = new Notes("Hello world","Tosin");        
        noteapp = new NotesApplication("Hello world","Tosin");
        noteapp.create_notes(note);        
        noteapp.delete(5.1);
        assert("please type in a valid id to delete")
    })
})