const easyQuestions= ["33 + 77 = x", "75 * 5 = x", "40 / 8 = x", "100 - (-150) = x", "√(25) = x", "150 + 373 = x", "33 * 7 = x",  "480 / 8 = x", "1.111.111 - 2 = x",  "(945 * 30^5 / √(100^4) + 250^50^5) * 0 = x",  "945 * 30^5 / √(100^4) + 250^50^5) * 0"];

const hardQuestions = ["12 ^ 2 = x", "√(144/121) = x", "³√(4^6) = x",  "10! / 8! = x", "13 ^ 2 - 11 ^ 2 = x", "³√(4^3 / 2^9 = x", "4^(2/4) / 16^(1/2) = x", "(1950! / 1948!) / (1949! / 1948!) = x", "³√(27! / 26!) = x", "93 - 64 = x" ];

const textQuestion = document.getElementById("question");
const textButton0 = document.getElementById("firstAnswer")
const textButton1 = document.getElementById("firstAnswer")
const textButton2 = document.getElementById("firstAnswer")
const textButton3 = document.getElementById("firstAnswer")

var tempQuestions = []
var tempAnswers = []


function startQuiz(difficulty) {
    if difficulty === 0 {
        temp = easyQuestions
    }
    else {
        temp = easyQuestions.concat(hardQuestions)
    }
    newQuestion()
}

const answers = [answers0, answers1, answers2, answers3, answers4, answers5, answers6, answers7, answers8, answers9, answers10, answers11, answers12, answers13, answers14, answers15, answers16, answers17, answers18, answers19]
const answers0 = [X = 110, X = 100, X = 90, X = 120]
const answers1 = [X = 375, X = 350, X = 400, X = 275]
const answers2 = [X = 5, X = 8, X = 4,X = 2]
const answers3 = [X = 250, X = 50, X = -50, X = -250]
const answers4 = [X = 5, X = 2, X = 3, X = 4]
const answers5 = [X = 523, X = 525, X = 425, X = 423]
const answers6 = [X = 231, X = 221, X = 331, X = 321]
const answers7 = [X = 60, X = 70, X = 80, X = 90]
const answers8 = [X = 1.111.109, X = 999.999, X = 999.998, X = 1.111.110]
const answers9 = [X = 0, X = 5,1287, X = 5,1, X = 5,12]
const answers10 = [X = 144, X = 121, X = 24, X = 140]
const answers11 = [X = 12/11, X = 13/11, X = 11/12, X = 12]
const answers12 = [X = 64, X = 16, X = 8, X = 32]
const answers13 = [X = 90, X = 720, X = 80, X = 180]
const answers14 = [X = 48, X = 50, X = 12, X = 13]
const answers15 = [X = 2, X = 4, X = 8, X = 1]
const answers16 = [X = 1/2, X = 2, X = 4, X = 6/8]
const answers17 = [X = 1950, X = 1949, X = 1948, X = 3800550]
const answers18 = [X = 3, X = 9, X = 5,1, X = 27]
const answers19 = [X = 0, X = 2, X = 3, X = 2/3]

var tempAnswersList = answers
function newQuestion() {
    i = Math.floor(Math.random() * tempQuestions.length)
    textQuestion.textContent = tempQuestions[i]
    tempAnswers = tempAnswersList[i]
    tempQuestions.splice(i, 1)
    tempAnswersList.splice(i, 1)
    textButton0 = tempAnswers[Math.floor(Math.random() * tempAnswers.length)]
    textButton1 = tempAnswers[Math.floor(Math.random() * tempAnswers.length)]
    textButton2 = tempAnswers[Math.floor(Math.random() * tempAnswers.length)]
    textButton3 = tempAnswers[Math.floor(Math.random() * tempAnswers.length)]
    

}
