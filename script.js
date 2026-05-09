let main = document.querySelector(".container")
let question = document.querySelector(".question")
let choices = document.querySelector(".choices")
let submit = document.querySelector(".submitBtn")
let next = document.querySelector(".nextBtn")
let scoreCard = document.querySelector(".scoreCard")
const alert = document.querySelector('.alert')
let start = document.querySelector(".startBtn")
let timer = document.querySelector(".timer")

let question_array = [
    {
        question: "How do you know a dog is happy?",
        choices: ["It bites", " It hides."," It wags its tail."," It runs away."],
        answer: " It wags its tail"
    },
    {
        question: "Why does a dog lick you?",
        choices: [" To say 'Go away'", " To show it is angry","To show love."," To ask for a bath"],
        answer: " To show love."
    },
    {
        question: "Where is the best spot to pet a dog",
        choices: [" On its tail", "Under its chin.","  On its feet"," On its nose."],
        answer: " Under its chin."
    },
    {
        question: "Why do dogs circle before sleeping?",
        choices: [" To catch their tail", "  It is a natural habit","  To play a game."," To find a toy."],
        answer: "  It is a natural habit"
    },
         {
        question: "Which is a sign of a scared dog?",
        choices: ["It jumps up", " It eats food","It plays with a ball"," It tucks its tail. "],
        answer: "It tucks its tail. "
    }
]

let curentQuestionIndex = 0
let score = 0
let quizOver = false 
let timeLess = 15
let timeId = null

const showQuestion = () => {
    const questionDetail = question_array[curentQuestionIndex];
    question.textContent = questionDetail.question;
    choices.textContent = "";
    for (let i = 0; i < questionDetail.choices.length; i++) {
        const curentChoices = questionDetail.choices[i];
        const choicesdiv = document.createElement('div');
        choicesdiv. textContent=curentChoices;
        choicesdiv.classList.add('choices');
        choicesdiv.classList.remove('wrong','correct','selected') ;
        choicesdiv.style.pointerEvents ='auto';
        choices.appendChild(choicesdiv);
        choicesdiv.addEventListener('click',()=>{
            document.querySelectorAll ('.choice').forEach(c => c.classList. remove('selected'));
            choicesdiv.classList.add('selected')
        })
    }
    submit.style.display = "block";
    next.style.display = "none";

    startTimer()
}

const CheckAnswer = () => {
    const selectedChoices = document.querySelector('.choices.selected');
    const correctAnswer = quiz[curentQuestionIndex].answer;
    const allChoices =document.querySelectorAll('.choices');
    
}
