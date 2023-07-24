function analyzeText() {
    // Fetch the user's input
    var text = document.getElementById('userInput').value;

    // Count the number of letters
    var letters = text.replace(/[^a-zA-Z]/g, "").length;

    // Count the number of words
    var words = text.split(/\s+/).filter(function(word) { return word.length > 0 }).length;

    // Count the number of sentences
    var sentences = text.split(/[.!?]+/).filter(function(sentence) { return sentence.length > 0 }).length;

    // Count the total number of characters (including spaces)
    var characters = text.length;

    // Display the results
    document.getElementById('output').innerHTML = 
        `<p>Letters: ${letters}</p>
        <p>Words: ${words}</p>
        <p>Sentences: ${sentences}</p>
        <p>Characters: ${characters}</p>`;
}
