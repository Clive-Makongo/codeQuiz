questionsArr.push(q1);
console.log(questionsArr);

let game = document.getElementById("game");
let gameOptions = document.querySelector('ol')
let options = [];
let btn = document.getElementById('start')

function startGame() {
    displayQuestion();

  console.log(options);
}


function displayQuestion() {
    for (let i = 0; i < questionsArr.length; i++) {
        for (let j = 0; j< questionsArr[i].answers.length; j++) {
            
                console.log(questionsArr[i].answers[j]);
                options[j] = document.createElement("li");
                options[j].textContent = questionsArr[i].answers[j];

                game.textContent = questionsArr[i].question;
                gameOptions.appendChild(options[j]);

                selectAnswer();
        }

    }

}

function selectAnswer() {
    let choose = document.createElement('button')
    choose.textContent = 'Select'
    for (let i = 0; i < options.length; i++) {
        options[i].appendChild(choose);

    

    }

    btn.remove();
}

let button = document.addEventListener("click", startGame);