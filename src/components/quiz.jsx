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

  function restartQuiz() {
    setAnswerInd(null);
    setAnswer(null);
    setResults({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    });
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
            score: prev.score - 2,
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
                &nbsp;
                <button
                  onClick={onClickNext}
                  className="btn btn-primary"
                  disabled={answerInd === null}
                >
                  {currentQuestion !== questions.length - 1 ? "Next" : "Finish"}
                </button>
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
        <div
          className="results major-mono-display-regular"
          style={{ fontWeight: "bolder" }}
        >
          <h1 style={{ textAlign: "left" }}>Results:</h1>
          <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
            <h1>
              Total Questions:{" "}
              <span className="major-mono-display-regular">
                {questions.length}
              </span>
            </h1>
            <h2>
              Total Score:{" "}
              {results.score === questions.length * 5 ? (
                <span className="green">
                  {" "}
                  {results.score}{" "}
                  <span
                    style={{
                      backgroundImage:
                        "linear-gradient(45deg, lightgreen,cyan,blue,yellow,red,orange)",
                      color: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    <i className="fa-solid fa-trophy"></i>Perfect Score!!!🥇
                  </span>
                </span>
              ) : (
                results.score
              )}{" "}
              / {questions.length * 5}{" "}
              <i className="fa-solid fa-ranking-star"></i>
            </h2>

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
