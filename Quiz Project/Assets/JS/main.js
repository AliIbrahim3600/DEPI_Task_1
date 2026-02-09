const quizData = [
  {
    question: "What does HTML stand for?",
    answers: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
    ],
    correct: 0,
  },
  {
    question:
      "Which programming language is known as the 'language of the web'?",
    answers: ["Python", "Java", "JavaScript", "C++"],
    correct: 2,
  },
  {
    question: "What is the correct way to declare a variable in JavaScript?",
    answers: [
      "var myVariable;",
      "variable myVariable;",
      "v myVariable;",
      "declare myVariable;",
    ],
    correct: 0,
  },
  {
    question: "Which CSS property is used to change text color?",
    answers: ["text-color", "font-color", "color", "text-style"],
    correct: 2,
  },
  {
    question: "What symbol is used for comments in JavaScript?",
    answers: ["<!-- -->", "/* */", "//", "Both // and /* */"],
    correct: 3,
  },
  {
    question: "Which HTML tag is used to create a clickable button?",
    answers: ["<btn>", "<button>", "<click>", "<input>"],
    correct: 1,
  },
  {
    question: "What does CSS stand for?",
    answers: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets",
    ],
    correct: 1,
  },
  {
    question: "Which method is used to print something in the browser console?",
    answers: ["print()", "log()", "console.log()", "display()"],
    correct: 2,
  },
];

let currentQuestion = 0;
let userAnswers = [];

const startBtn = document.querySelector(".start-btn");

startBtn.addEventListener("click", () => {
  startQuiz();
});
function createQuestion(questionObj) {
  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question-container");

  // Create and add the question text
  const questionText = document.createElement("h2");
  questionText.textContent = questionObj.question;
  questionDiv.appendChild(questionText);

  // Create answer buttons
  const answersDiv = document.createElement("div");
  answersDiv.classList.add("answers");

  questionObj.answers.forEach((answer, index) => {
    const label = document.createElement("label");
    label.classList.add("answer-option");

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "answer";
    radio.value = index;
    radio.id = `answer-${index}`;

    const answerText = document.createElement("span");
    answerText.textContent = answer;
    label.appendChild(radio);
    label.appendChild(answerText);
    answersDiv.appendChild(label);
  });

  questionDiv.appendChild(answersDiv);
  return questionDiv;
}

function startQuiz() {
  startBtn.style.display = "none";

  const quizContainer = document.getElementById("quiz-container");
  quizContainer.style.display = "block";

  displayQuestion();
}

function displayQuestion() {
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = "";

  const questionElement = createQuestion(quizData[currentQuestion]);
  quizContainer.appendChild(questionElement);

  if (userAnswers[currentQuestion] !== undefined) {
    const radio = document.querySelector(
      `input[value="${userAnswers[currentQuestion]}"]`,
    );
    if (radio) radio.checked = true;
  }

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");

  if (currentQuestion > 0) {
    const prevBtn = document.createElement("button");
    prevBtn.textContent = "Previous";
    prevBtn.classList.add("prev-btn");
    prevBtn.addEventListener("click", previousQuestion);
    buttonContainer.appendChild(prevBtn);
  }

  const nextBtn = document.createElement("button");
  if (currentQuestion < quizData.length - 1) {
    nextBtn.textContent = "Next";
    nextBtn.classList.add("next-btn");
    nextBtn.addEventListener("click", nextQuestion);
  } else {
    nextBtn.textContent = "Submit Quiz";
    nextBtn.classList.add("submit-quiz-btn");
    nextBtn.addEventListener("click", submitQuiz);
  }

  buttonContainer.appendChild(nextBtn);
  quizContainer.appendChild(buttonContainer);
}

function nextQuestion() {
  const selected = document.querySelector("input[name='answer']:checked");
  if (selected) {
    userAnswers[currentQuestion] = parseInt(selected.value);
  }
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    displayQuestion();
  }
}

function previousQuestion() {
  const selected = document.querySelector("input[name='answer']:checked");
  if (selected) {
    userAnswers[currentQuestion] = parseInt(selected.value);
  }
  if (currentQuestion > 0) {
    currentQuestion--;
    displayQuestion();
  }
}

function submitQuiz() {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (selected) {
    userAnswers[currentQuestion] = parseInt(selected.value);
  }
  let score = 0;
  quizData.forEach((question, index) => {
    if (userAnswers[index] === parseInt(question.correct)) {
      score++;
    }
  });

  Swal.fire({
    title: "Submit Done!",
    icon: "success",
    draggable: true,
  });

  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = `
    <div class="results">
      <h2>Quiz Completed!</h2>
      <p>Your Score: ${score} / ${quizData.length}</p>
      <p>Percentage: ${Math.round((score / quizData.length) * 100)}%</p>
      <button class="restart-btn" onclick="restartQuiz()">Restart Quiz</button>
    </div>
  `;
}

function restartQuiz() {
  currentQuestion = 0;
  userAnswers = [];
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.style.display = "none";
  startBtn.style.display = "block";
}
