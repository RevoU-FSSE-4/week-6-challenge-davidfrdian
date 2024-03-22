function filterWords(words) {
    return words.filter(word => word.length >= 4);
}

var inputWords = ["hat", "stick", "t-shirt", "tie", "book", "glasses", "bed", "keyboard", "mouse"];
console.log(filterWords(inputWords));

module.exports = filterWords;
