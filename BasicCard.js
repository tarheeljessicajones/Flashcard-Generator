// define constructor that will store and retrieve data for basic flashcards
var BasicFlashcard = function(front, back) {
    this.front = front;
    this.back = back;
};

// make constructor available so it can be called from another js file
module.exports = BasicCard;