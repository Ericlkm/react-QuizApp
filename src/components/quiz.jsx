import { useState } from "react";
import { Score } from "../data/questions";

function Quiz({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { question, choices, correctAnswer } = questions[currentQuestion];
  const [answerInd, setAnswerInd] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [results, setResults] = useState(Score);
  const [showResults, setShowResults] = useState(false);

  function onAnswerClick(answer, index) {
    setAnswerInd(index);
    if (answer === correctAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  }
  function previousQuestion() {
    setAnswerInd(null);
    setAnswer(null);
    if (currentQuestion !== 0) {
      setCurrentQuestion((prev) => prev - 1);
    } else {
      setCurrentQuestion(questions.length - 1);
    }
  }

  function restartQuiz() {
    setAnswerInd(null);
    setAnswer(null);
    setResults(Score);
    setCurrentQuestion(0);
    setShowResults(false);
  }
  function onClickNext() {
    setAnswerInd(null);
    setResults((prev) => {
      return answer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            score: prev.score - 5,
            wrongAnswers: prev.wrongAnswers + 1,
          };
    });
    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion(0);
      setShowResults(true);
    }
  }

  return (
    <>
      {!showResults ? (
        <div className="quizBox">
          <div>
            <small>
              <b>Question:</b>{" "}
              <span
                style={{
                  fontSize: "1.5rem",
                  color: "blue",
                  fontWeight: "bold",
                }}
              >
                {currentQuestion + 1}{" "}
              </span>{" "}
              / {questions.length}
            </small>
            <h2 className="rock-salt-regular">{question}</h2>
            <div className="line"></div>
            <div>
              <ul className="major-mono-display-regular">
                {choices.map((choice, index) => (
                  <li
                    onClick={() => {
                      onAnswerClick(choice, index);
                    }}
                    key={choice}
                    className={answerInd === index ? "correct" : null}
                  >
                    {choice}
                  </li>
                ))}
              </ul>

              <div className="btn btn-group-toggle">
                <button
                  onClick={previousQuestion}
                  className="btn btn-secondary"
                >
                  go back
                </button>{" "}
                &nbsp;
                {currentQuestion === questions.length - 1 ? (
                  <button onClick={onClickNext} className="btn btn-primary">
                    Finished
                  </button>
                ) : (
                  <button onClick={onClickNext} className="btn btn-primary">
                    Next
                  </button>
                )}
              </div>
              <button
                onClick={restartQuiz}
                className="btn btn-danger "
                style={{ transform: "translateX(25rem)" }}
              >
                {" "}
                reset
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="results">
          <h1>Results:</h1>
          <div>
            <h2>Score: {results.score}</h2>
            <h2>Correct Answers: {results.correctAnswers}</h2>
            <h2>Wrong Answers: {results.wrongAnswers}</h2>
          </div>
          <div>
            <button onClick={restartQuiz} className="btn btn-primary">
              Restart Quiz
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Quiz;
