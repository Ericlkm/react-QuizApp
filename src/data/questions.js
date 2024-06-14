export const QuizGame = {
  questions: [
    {
      question: "how many bones are in a human body?",
      choices: ["201", "231", "206", "209"],
      correctAnswer: "209",
    },
    {
      question: "Which animal sleeps the most?",
      choices: ["Sloth", "Cat", "Koala", "Bat"],
      correctAnswer: "Koala",
    },
    {
      question: "What did the ancient Romans use as a mouthwash?",
      choices: ["Saltwater", "Vinegar", "Wine", "Urine"],
      correctAnswer: "Urine",
    },
    {
      question:
        "In the Pac-Man video game, what is the name of the pink ghost?",
      choices: ["Blinky", "Pinky", "Inky", "Clyde"],
      correctAnswer: "Clyde",
    },
    {
      question:
        "What is the output of the following code?\n\nlet x = 5;\nconst y = 10;\nconsole.log(x + y);",
      choices: ["15", "510", "Syntax error", "Undefined"],
      answer: "15",
    },
    {
      question:
        "Which of the following is a valid way to create an object in JavaScript?",
      choices: [
        "let obj = {key: value};",
        "let obj = new Object();",
        "let obj = Object.create();",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      question:
        "What is the purpose of the 'use strict' directive in JavaScript?",
      choices: [
        "It enables strict mode, which catches common coding errors",
        "It optimizes code for better performance",
        "It enables debugging mode",
        "It enables compatibility mode for older browsers",
      ],
      answer: "It enables strict mode, which catches common coding errors",
    },
    {
      question: "What is the primary responsibility of a registered nurse?",
      choices: [
        "Diagnosing medical conditions",
        "Prescribing medications",
        "Providing patient care",
        "Performing surgeries",
      ],
      answer: "Providing patient care",
    },
    {
      question:
        "Which of the following is a common side effect of chemotherapy?",
      choices: [
        "Nausea and vomiting",
        "Fatigue",
        "Hair loss",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      question:
        "What is the recommended technique for preventing the spread of healthcare-associated infections?",
      choices: [
        "Proper hand hygiene",
        "Wearing personal protective equipment",
        "Following isolation precautions",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      question:
        "What is the time complexity of the quicksort algorithm in the average case?",
      choices: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
      answer: "O(n log n)",
    },
    {
      question:
        "Which of the following is a valid way to declare a function in JavaScript?",
      choices: [
        "function myFunction()",
        "let myFunction = function()",
        "var myFunction = () => {}",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      question:
        "What is the output of the following code?\n\nconsole.log(typeof null);",
      choices: ["null", "object", "undefined", "Error"],
      answer: "object",
    },
    {
      question: "What is the purpose of the 'this' keyword in JavaScript?",
      choices: [
        "It refers to the current function scope",
        "It refers to the global object",
        "It refers to the object that the function is a property of",
        "All of the above",
      ],
      answer: "It refers to the object that the function is a property of",
    },
    {
      question: "What is the difference between let and var in JavaScript?",
      choices: [
        "let is function scoped, var is block scoped",
        "let is block scoped, var is function scoped",
        "let is hoisted, var is not hoisted",
        "There is no difference",
      ],
      answer: "let is block scoped, var is function scoped",
    },
    {
      question: "What is the normal range for an adult's blood pressure?",
      choices: [
        "90/60 mmHg to 120/80 mmHg",
        "100/70 mmHg to 140/90 mmHg",
        "110/80 mmHg to 150/100 mmHg",
        "120/80 mmHg to 160/110 mmHg",
      ],
      answer: "100/70 mmHg to 140/90 mmHg",
    },
    {
      question: "Which of the following is a common symptom of dehydration?",
      choices: [
        "Dry mouth and tongue",
        "Headache",
        "Dizziness",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      question:
        "What is the recommended technique for administering an intramuscular injection?",
      choices: [
        "Z-track method",
        "Air-lock method",
        "Pinch method",
        "Aspiration method",
      ],
      answer: "Z-track method",
    },
    {
      question:
        "Which of the following is a potential complication of diabetes mellitus?",
      choices: ["Retinopathy", "Nephropathy", "Neuropathy", "All of the above"],
      answer: "All of the above",
    },
    {
      question: "What is the primary function of the respiratory system?",
      choices: [
        "Oxygen delivery and carbon dioxide removal",
        "Digestion of food",
        "Regulation of body temperature",
        "Filtration of blood",
      ],
      answer: "Oxygen delivery and carbon dioxide removal",
    },
    {
      question:
        "Which of the following is a common side effect of opioid analgesics?",
      choices: ["Constipation", "Nausea", "Drowsiness", "All of the above"],
      answer: "All of the above",
    },
    {
      question:
        "What is the recommended technique for administering an intramuscular injection?",
      choices: [
        "Z-track method",
        "Air-lock method",
        "Pinch method",
        "Aspiration method",
      ],
      answer: "Z-track method",
    },
    {
      question:
        "Which of the following is a common side effect of opioid analgesics?",
      choices: ["Constipation", "Nausea", "Drowsiness", "All of the above"],
      answer: "All of the above",
    },
    {
      question: "Which of the following is a common symptom of dehydration?",
      choices: [
        "Dry mouth and tongue",
        "Headache",
        "Dizziness",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      question: "What is the normal range for an adult's blood pressure?",
      choices: [
        "90/60 mmHg to 120/80 mmHg",
        "100/70 mmHg to 140/90 mmHg",
        "110/80 mmHg to 150/100 mmHg",
        "120/80 mmHg to 160/110 mmHg",
      ],
      answer: "100/70 mmHg to 140/90 mmHg",
    },
  ],
};

export const Score = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
  highScore: 0,
  reset: function () {
    this.score = 0;
    this.highScore = 0;
  },
  addScore: function () {
    this.score++;
    if (this.score > this.highScore) {
      this.highScore = this.score;
    }
  },
  substractScoe: function () {
    this.score--;
    if (this.score > this.highScore) {
      this.highScore = this.score;
    }
  },
  getScore: function () {
    return this.score;
  },
  getHighScore: function () {
    return this.highScore;
  },
};
