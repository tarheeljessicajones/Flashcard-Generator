var fs = require("fs");
var BasicFlashcard = require("./BasicCard");
var ClozeFlashcard = require("./ClozeCard");


var basicFile = "BasicCard.json";
var clozeFile = "ClozeCard.json";
var cloze = [];

function displayBasicFlashCard() {
    if (basic.length !== 0) {
        var rand = Math.floor((Math.random() * basic.length));
        console.log(basic[rand].front);
        console.log(basic[rand].back);
    }
}

function displayClozeFlashCard() {
    if (cloze.length !== 0) {
        var rand = Math.floor((Math.random() * cloze.length));
        console.log(cloze[rand].text);
        console.log(cloze[rand].cloze);
    }
}
