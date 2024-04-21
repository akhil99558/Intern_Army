const quizData = [
    // Quiz Type 1
    [
        {
            question: "2 + 2?",
            answers: [
                "3",
                "4",
                "5",
                "6"
            ],
            correctAnswer: "4"
        },
        {
            question: "2+2*2",
            answers: [
                "6",
                "8",
                "3",
                "4"
            ],
            correctAnswer: "6"
        },
        {
            question: "3!/6",
            answers: [
                "1",
                "4",
                "6",
                "3"
            ],
            correctAnswer: "1"
        },        {
            question: "99 times 9 by 99 is:",
            answers: [
                "9",
                "99",
                "881",
                "8811"
            ],
            correctAnswer: "9"
        },        {
            question: "1+7*1+0*9",
            answers: [
                "0",
                "8",
                "7",
                "16"
            ],
            correctAnswer: "8"
        }
        // Add more questions for Quiz Type 1...
    ],
    // Quiz Type 2
    [
        {
            question: "What is the largest planet in our solar system?",
            answers: [
                "Mars",
                "Venus",
                "Jupiter",
                "Saturn"
            ],
            correctAnswer: "Jupiter"
        },
        {
            question: "What is the chemical symbol for water?",
            answers: [
                "H2O",
                "CO2",
                "NaCl",
                "O2"
            ],
            correctAnswer: "H2O"
        },
        {
            question: "What is the chemical symbol for water?",
            answers: [
                "H2O",
                "CO2",
                "NaCl",
                "O2"
            ],
            correctAnswer: "H2O"
        },{
            question: "What is the chemical symbol for water?",
            answers: [
                "H2O",
                "CO2",
                "NaCl",
                "O2"
            ],
            correctAnswer: "H2O"
        },{
            question: "What is the chemical symbol for water?",
            answers: [
                "H2O",
                "CO2",
                "NaCl",
                "O2"
            ],
            correctAnswer: "H2O"
        }
        // Add more questions for Quiz Type 2...
    ],
    // Quiz Type 3
    [
        {
            question: "What is the powerhouse of the cell?",
            answers: [
                "Mitochondria",
                "Nucleus",
                "Ribosome",
                "Endoplasmic reticulum"
            ],
            correctAnswer: "Mitochondria"
        },
        {
            question: "Who wrote 'To Kill a Mockingbird'?",
            answers: [
                "J.K. Rowling",
                "Harper Lee",
                "Stephen King",
                "J.R.R. Tolkien"
            ],
            correctAnswer: "Harper Lee"
        },{
            question: "What is the powerhouse of the cell?",
            answers: [
                "Mitochondria",
                "Nucleus",
                "Ribosome",
                "Endoplasmic reticulum"
            ],
            correctAnswer: "Mitochondria"
        },{
            question: "What is the powerhouse of the cell?",
            answers: [
                "Mitochondria",
                "Nucleus",
                "Ribosome",
                "Endoplasmic reticulum"
            ],
            correctAnswer: "Mitochondria"
        },{
            question: "What is the powerhouse of the cell?",
            answers: [
                "Mitochondria",
                "Nucleus",
                "Ribosome",
                "Endoplasmic reticulum"
            ],
            correctAnswer: "Mitochondria"
        }
        // Add more questions for Quiz Type 3...
    ]
];

const quizTypeSelection = document.getElementById('quiz-type-selection');
const quizContent = document.getElementById('quiz-content');
const scoreContainer = document.getElementById('score-container');
const scoreDisplay = document.getElementById('score');
const questionElement = document.getElementById('question');
const answerButtons = document.querySelectorAll('.answers .btn');
const submitButton = document.getElementById('submit');

let currentQuizType = 0; // Default to Quiz Type 1
let currentQuestionIndex = 0;
let score = 0;

// Event listeners for quiz type selection
quizTypeSelection.addEventListener('click', (event) => {
    if (event.target && event.target.matches('.btn')) {
        currentQuizType = parseInt(event.target.id.slice(-1)) - 1; // Extract the quiz type from the button's ID
        startQuiz();
    }
});

// Event listener for answer buttons
answerButtons.forEach(button => {
    button.addEventListener('click', () => {
        checkAnswer(button.innerText);
    });
});

// Event listener for submit button
submitButton.addEventListener('click', () => {
    checkAnswer();
});

// Function to start the quiz
// Function to start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreDisplay.textContent = score;
    loadQuestion();
    quizTypeSelection.style.display = 'none';
    quizContent.style.display = 'block';
    scoreContainer.style.display = 'none';

    // Change the text of the h1 element
    document.querySelector('h1').textContent = "Quiz-1";
}


// Function to load question and answers
function loadQuestion() {
    const currentQuestion = quizData[currentQuizType][currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    answerButtons.forEach((button, index) => {
        button.innerText = currentQuestion.answers[index];
    });
}

// Function to check answer
function checkAnswer(selectedAnswer) {
    const currentQuestion = quizData[currentQuizType][currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
        // Correct answer
        score++;
        scoreDisplay.textContent = score;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < 5) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

// Function to end the quiz
// Function to end the quiz
function endQuiz() {
    quizContent.style.display = 'none';
    scoreContainer.style.display = 'block';

    // Create a button to go back to the homepage
    const backButton = document.createElement('button');
    backButton.textContent = 'Go back to homepage';
    backButton.classList.add('btn');
    backButton.addEventListener('click', () => {
        // Redirect to the homepage (replace 'index.html' with your actual homepage URL)
        window.location.href = 'index.html';
    });

    // Append the button to the scoreContainer
    scoreContainer.appendChild(backButton);
}

