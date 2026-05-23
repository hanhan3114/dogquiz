const container = document.querySelector('.container');
const questionBox = document.querySelector('.question');
const choicesBox = document.querySelector('.choices');
const nextBtn = document.querySelector('.nextBtn');
const submitBtn = document.querySelector('.submitBtn');
const scoreCard = document.querySelector('.scoreCard');
const alert = document.querySelector('.alert');
const startBtn = document.querySelector('.startBtn');
const timer = document.querySelector('.timer');

let quiz = [
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

let currentQuestionIndex = 0;
let score = 0;
let quizOver = false;
let timeLeft = 15;
let timerID = null;

const showQuestions = () => {
    const questionDetails = quiz[currentQuestionIndex];
    questionBox.textContent = questionDetails.question;

    choicesBox.textContent = "";
    for (let i = 0; i < questionDetails.choices.length; i++) {
        const currentChoice = questionDetails.choices[i];
        const choiceDiv = document.createElement('div');
        choiceDiv.textContent = currentChoice;
        choiceDiv.classList.add('choice');

        choiceDiv.classList.remove('correct', 'wrong', 'selected');
        choiceDiv.style.pointerEvents = "auto";

        choicesBox.appendChild(choiceDiv);

        choiceDiv.addEventListener('click', () => {
            document.querySelectorAll('.choice').forEach(c => c.classList.remove('selected'));
            choiceDiv.classList.add('selected');
        });
    }

    submitBtn.style.display = "block";
    nextBtn.style.display = "none";

    startTimer();
};

const checkAnswer = () => {
    const selectedChoice = document.querySelector('.choice.selected');
    const correctAnswer = quiz[currentQuestionIndex].answer;
    const allChoices = document.querySelectorAll('.choice');

    allChoices.forEach(choice => {
        choice.style.pointerEvents = "none";
        if (choice.textContent.trim() === correctAnswer.trim()) {
            choice.classList.add('correct');
        }
    });

    if (!selectedChoice) {
        displayAlert(`Time's up! ${correctAnswer} is the Correct Answer`);
    }
    else if (selectedChoice.textContent.trim() === correctAnswer.trim()) {
        displayAlert("Correct Answer!");
        score++;
    } 
    else {
        selectedChoice.classList.remove('selected');
        selectedChoice.classList.add('wrong');
        displayAlert(`Wrong Answer! ${correctAnswer} is the Correct Answer`);
    }

    stopTimer();

    submitBtn.style.display = "none";
    nextBtn.style.display = "block";
    nextBtn.textContent = "Next";
};

const showScore = () => {
    questionBox.textContent = "";
    choicesBox.textContent = "";
    scoreCard.textContent = `You Scored ${score} out of ${quiz.length}!`;
    displayAlert("You have completed this quiz!");
    quizOver = true;
    timer.style.display = "none";
    nextBtn.textContent = "Play Again";
    nextBtn.style.display = "block";
};

const displayAlert = (msg) => {
    alert.style.display = "block";
    alert.textContent = msg;
    setTimeout(() => {
        alert.style.display = "none";
    }, 2000);
};

const startTimer = () => {
    clearInterval(timerID);
    timeLeft = 15;
    timer.textContent = timeLeft;

    const countDown = () => {
        timeLeft--;
        timer.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timerID);
            checkAnswer();
        }
    };

    timerID = setInterval(countDown, 1000);
};

const stopTimer = () => {
    clearInterval(timerID);
};

const shuffleQuestions = () => {
    for (let i = quiz.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [quiz[i], quiz[j]] = [quiz[j], quiz[i]];
    }
    currentQuestionIndex = 0;
    showQuestions();
};

const startQuiz = () => {
    timeLeft = 15;
    timer.style.display = "flex";
    shuffleQuestions();
};

startBtn.addEventListener('click', () => {
    startBtn.style.display = "none";
    document.querySelector('.mainTitle').style.display = "none";
    container.style.display = "block";
    startQuiz();
});

submitBtn.addEventListener('click', () => {
    const selectedChoice = document.querySelector('.choice.selected');

    if (!selectedChoice) {
        displayAlert("Select your answer");
        return;
    }
    checkAnswer();
});

nextBtn.addEventListener('click', () => {
    if (quizOver) {
        scoreCard.textContent = "";
        container.style.display = "none";
        startBtn.style.display = "block";
        document.querySelector('.mainTitle').style.display = "block";
        nextBtn.textContent = "Next";
        submitBtn.style.display = "block";
        nextBtn.style.display = "none";
        currentQuestionIndex = 0;
        quizOver = false;
        score = 0;
        return;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quiz.length) {
        timeLeft = 15;
        showQuestions();
    } else {
        stopTimer();
        showScore();
    }
});