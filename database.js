function search() {
    var outputObj = document.getElementById("output");
    outputObj.innerHTML 
}
function showAnswer(questionId) {
    var answers = {
        'question1': 'A: You can enter keywords in the search bar to find pictures.',
        'question2': 'A: You can use the navigation buttons provided on top of the page.',
        'question3': 'A: No, detailed descriptions are not provided, as we do not sell the displayed items .',
        'question4': 'A: No, the download feature is not available. You can view and enjoy the pictures online though.'
    };

    var answer = answers[questionId];
    alert(answer);
}
