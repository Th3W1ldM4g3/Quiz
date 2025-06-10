var textQuestion = document.getElementById("question");


const easyQuestions= ["33 + 77 = x", "75 * 5 = x", "40 / 8 = x", "100 - (-150) = x", "√(25) = x", "150 + 373 = x", "33 * 7 = x",  "480 / 8 = x", "1.111.111 - 2 = x",  "(945 * 30^5 / √(100^4) + 250^50^5) * 0 = x",  "945 * 30^5 / √(100^4) + 250^50^5) * 0"];

const hardQuestions = ["12 ^ 2 = x", "144121 = x", "346 = x",  "10! / 8! = x", "13 ^ 2 - 11 ^ 2 = x", "34629 = x", "4241612 = x", "(1950! / 1948!) / (1949! / 1948!) = x", "327!26! = x", "93 - 64 = x" ];



function newQuestion(difficulty) {
    // window.location.replace("perguntas.html");
    if (difficulty === 0) {
        var tempQuestions = easyQuestions
            let questionNumber = Math.floor(Math.random() * tempQuestions.length);
            textQuestion.textContent = tempQuestions[questionNumber];
            tempQuestions.splice(questionNumber, 1);
    }
}



