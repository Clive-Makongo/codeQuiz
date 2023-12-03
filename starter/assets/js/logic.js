questionsArr.push(q1);
console.log(questionsArr);

let game = document.getElementById("game");
let gameOptions = document.querySelector('ol')
let options = []

function startGame() {
    displayQuestion()

  console.log(options);
}


function displayQuestion() {
    for (let i = 0; i < questionsArr.length; i++) {
        for (let i = 0; i < questionsArr[i].answers.length; i++) {
          options[i] = document.createElement("li");
          options[i].textContent = questionsArr[0].answers[i];

          game.textContent = questionsArr[0].question;
          gameOptions.appendChild(options[i]);

          selectAnswer()
        }

    }

}

function selectAnswer() {

}

let button = document.addEventListener("click", startGame);