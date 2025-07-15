//#region Declaring
//Declaração da lista de questões
const easyQuestions= ["33 + 77", "75 * 5", "40 / 8", "100 - (-150)", "√(25)", "150 + 373", "33 * 7",  "480 / 8", "1.111.111 - 2",  "(945 * 30^5 / √(100^4) + 250^50^5) * 0"];
const hardQuestions = ["12 ^ 2", "√(144/121)", "³√(4^6)",  "10! / 8!", "13 ^ 2 - 11 ^ 2", "³√(4^6 / 2^9)", "4^(2/4) / 16^(1/2)", "(1950! / 1948!) / (1949! / 1948!)", "³√(27! / 26!)", "|(-3)³|" ];

//Declaração do texto das perguntas
const textQuestion = document.getElementById("question");
const difficultyButtonEasy = document.getElementById("easy")
const difficultyButtonHard = document.getElementById("hard")
const restartButton = document.getElementById("restart")
const textAnswer0 = document.getElementById("textAnswer0");
const textAnswer1 = document.getElementById("textAnswer1");
const textAnswer2 = document.getElementById("textAnswer2");
const textAnswer3 = document.getElementById("textAnswer3");

//Declaração de lista de respostas
const answers0 = ["110", "100", "90", "120"];
const answers1 = ["375", "350", "400", "275"];
const answers2 = ["5", "8", "4","2"];
const answers3 = ["250", "50", "-50", "-250"];
const answers4 = ["5", "2", "3", "4"];
const answers5 = ["523", "525", "425", "423"];
const answers6 = ["231", "221", "331", "321"];
const answers7 = ["60", "70", "80", "90"];
const answers8 = ["1.111.109", "999.999", "999.998", "1.111.110"];
const answers9 = ["0", "5,1287", "5,1", "5,12"];
const answers10 = ["144", "121", "24", "140"];
const answers11 = ["12/11", "13/11", "11/12", "12"];
const answers12 = ["16", "64", "8", "32"];
const answers13 = ["90", "720", "80", "180"];
const answers14 = ["48", "50", "12", "13"];
const answers15 = ["2", "4", "8", "1"];
const answers16 = ["1/2", "2", "4", "6/8"];
const answers17 = ["1950", "1949", "1948", "3800550"];
const answers18 = ["3", "9", "5,1", "27"];
const answers19 = ["27", "9", "3", "-27"];
const answers = [answers0, answers1, answers2, answers3, answers4, answers5, answers6, answers7, answers8, answers9, answers10, answers11, answers12, answers13, answers14, answers15, answers16, answers17, answers18, answers19];

//Declaração de variáveis temporárias
let tempQuestions = [];
let tempAnswers = [];
let tempCorrectAnswer = "";
let tempAnswersList = answers;
let difficultyHard = false
//#endregion Declaring

//Declaração de função
//Inicia o quiz de acordo com a dificuldadde
function startQuiz(difficulty) {
    if(difficulty == 0) {
        tempQuestions = easyQuestions;
        difficulty = 0
    }
    else {
        tempQuestions = easyQuestions.concat(hardQuestions);
        difficultyHard = true
    }
    newQuestion();
    difficultyButtonEasy.style.display = 'none';
    difficultyButtonHard.style.display = 'none';
    formAnswers.style.display = 'grid';
    // firstRowAnswers.style.display = 'table-header-group';
    // secondRowAnswers.style.display = 'table-footer-group';
}

//Escolhe uma nova pergunta da lista temporária e coloca as respostas no Form
function newQuestion() {
    i = Math.floor(Math.random() * tempQuestions.length);
    textQuestion.textContent = tempQuestions[i];
    tempAnswers = tempAnswersList[i];
    tempCorrectAnswer = tempAnswers[0]
    tempQuestions.splice(i, 1);
    tempAnswersList.splice(i, 1);
    textAnswer0.innerHTML = tempAnswers[Math.floor(Math.random() * tempAnswers.length)];
    tempAnswers.splice(tempAnswers.indexOf(textAnswer0.innerHTML), 1)
    textAnswer1.innerHTML = tempAnswers[Math.floor(Math.random() * tempAnswers.length)];
    tempAnswers.splice(tempAnswers.indexOf(textAnswer1.innerHTML), 1)
    textAnswer2.innerHTML = tempAnswers[Math.floor(Math.random() * tempAnswers.length)];
    tempAnswers.splice(tempAnswers.indexOf(textAnswer2.innerHTML), 1)
    textAnswer3.innerHTML = tempAnswers[Math.floor(Math.random() * tempAnswers.length)];
    tempAnswers.splice(tempAnswers.indexOf(textAnswer3.innerHTML), 1)
}


//Verifica se a resposta escolhida é a correta e chama outra pergunta ou reinicia o jogo
function checkAnswer(answer) {
    if(answer.innerHTML == tempCorrectAnswer) {
        if(tempQuestions.length > 0){
            newQuestion();
        }
        else {
            if(difficultyHard){
            alert("Parabéns! Você ganhou no modo difícil!");
            }
            else {
                alert("Parabéns! Você ganhou. Mas tens o que é necessário para ganhar no modo difícil?");
            }
            restartButton.style.display = 'flex';
            formAnswers.style.display = 'none';
            textQuestion.style.display = 'none';
            document.body.style.backgroundImage = "url('winImage.jpeg')";
        }
    }
    else {
        alert("ERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRROU!");
        restartButton.style.display = 'flex';
        formAnswers.style.display = 'none';
        textQuestion.style.display = 'none';
        document.body.style.backgroundImage = "url('loseImage.jpeg')";
    }
}

function restart() {
    window.location = window.location;
}