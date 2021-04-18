const start = document.getElementById("start-btn");
const next = document.getElementById("next-btn");

const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question")
const ansButton =document.getElementById("answer-buttons")
const point = document.getElementById("score")

let score=0;

let shuffledQues , currentQuesIdx;

start.addEventListener("click",startGame)

next.addEventListener("click",() =>{
    currentQuesIdx++;
    nextQues();
})

function startGame(){
    console.log("That Worrks");
    start.classList.add('hide');
    shuffledQues = questions.sort(() => Math.random() - 0.5);
    questionContainer.classList.remove("hide");
    currentQuesIdx = 0;
    nextQues();
}

function nextQues(){
    resetState()
    showQUes(shuffledQues[currentQuesIdx])
}

function showQUes(question){
    questionElement.innerHTML = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn")
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click',selectAns)
        ansButton.appendChild(button)
    });
}

function resetState(){
    clearStatusClass(document.body)
    next.classList.add("hide")
    while (ansButton.firstChild){
        ansButton.removeChild(ansButton.firstChild)
    }
}

function selectAns(e){
    const selectButton = e.target
    const correct = selectButton.dataset.correct
    if(correct==true)
    {
        score++;
    }
    setStatus(document.body,correct)
    Array.from(ansButton.children).forEach(button =>{
        setStatus(button,button.dataset.correct)
    })
    if(shuffledQues.length > currentQuesIdx+1){
        next.classList.remove("hide")
    }
    else{
        score.innerHTML = "Your Final score is - "+toString(point);
        console.log(score)
        start.innerText = "ReStart";
        start.classList.remove("hide")
    }
}

function setStatus(element,correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add("correct")
    }
    else{
        element.classList.add("wrong")
    }
}

function clearStatusClass(element){
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

const questions = [
    {
      question: 'What is Wall Sina\'s northern district called?',
      answers: [
        { text: 'Stohess', correct: false },
        { text: 'Siganshina', correct: false },
        { text: 'Orvud', correct: true },
        { text: 'Trost', correct: false }
      ]
    },
    {
      question: 'What surrounds the area where humans live?',
      answers: [
        { text: 'Wall', correct: true },
        { text: 'Mountain', correct: false },
        { text: 'Sea', correct: false },
        { text: 'Titans', correct: false }
      ]
    },
    {
      question: 'Who was the commander before Erwin?',
      answers: [
        { text: 'Willy Tybur', correct: false },
        { text: 'Keith Shadies', correct: true },
        { text: 'Levi Ackerman', correct: false },
        { text: 'Hanje Zoe', correct: false }
      ]
    },
    {
      question: 'What was Eren\'s rank in the top 10 graduates?',
      answers: [
        { text: '6', correct: false },
        { text: '1', correct: false },
        { text: '10', correct: false },
        { text: '5', correct: true }
      ]
    },
    {
        question: 'Who Messed up Eren equipment in training?',
        answers: [
          { text: 'Mikasa Ackerman', correct: false },
          { text: 'Armin Artelt', correct: false },
          { text: 'Jean Kristen', correct: false },
          { text: 'Keith Sadies', correct: true }
        ]
      }  
  ]