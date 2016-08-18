/**
 * Note Constructor
 * @constructs note
 * @param {String} content Note content
 * @param {String} author Note Author
 * @param {Number} id Note id
 */
module.exports = function(content, author, id) {
  this.content = content;
  this.author = author;
  this.id = id;
};