import { QuizGame } from "../data/questions";
import Quiz from "../components/quiz";

function TakeQuiz() {
  function openQuiz() {
    $(".info").slideUp(1000);
    $(".quizBox").fadeIn(1000);
    $("#closebtn").fadeIn(1000);
  }
  function closeQuiz() {
    $(".quizBox").fadeOut("fast");
    $(".info").slideDown(1000);
    $("#closebtn").hide(1000);
  }
  return (
    <>
      <button
        id="closebtn"
        onClick={closeQuiz}
        className="btn btn-danger"
        style={{ margin: "1rem", display: "none" }}
      >
        close quiz!
      </button>

      <div className="info">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "2rem",
          }}
        >
          <h1 className="major-mono-display-regular">
            Random Quiz! <i className="fa-solid fa-spinner fa-spin-pulse"></i>
          </h1>
          <div>
            <img
              className="img2"
              src="https://media2.giphy.com/media/YjJeg8aPerwtdjX6tJ/giphy.webp?cid=ecf05e4784v4yoqncl7ofligx5p6p4xfv5d5437qkvg0ay1s&ep=v1_gifs_search&rid=giphy.webp&ct=g"
              alt="quiz"
              style={{
                width: "300px",
                height: "300px",
              }}
            />
          </div>

          <p className="info-text">
            This is a diverse quiz that covers a wide range of topics, including{" "}
            <b>
              JavaScript programming, nursing and medical knowledge, fictional
              characters, and general knowledge
            </b>
            . Get ready to challenge your brain and expand your horizons!
          </p>

          <p className="info-text">
            Get ready to put your knowledge to the test with{" "}
            {QuizGame.questions.length} mind-bending questions!
          </p>
          <p className="info-text">
            You'll have 10 seconds to rack your brain for each question, so
            think fast!
          </p>
          <p className="info-text">
            May the odds be ever in your favor! Good luck!
          </p>

          <p className="info-text">
            Feeling brave? Click the button below to embark on your quiz
            adventure!
          </p>

          <button onClick={openQuiz} id="btn" className="btn btn-primary">
            start Quiz!{" "}
            <i className="fa-solid fa-gamepad" style={{ color: "white" }}></i>
          </button>
        </div>
      </div>
      <Quiz questions={QuizGame.questions} />
    </>
  );
}
export default TakeQuiz;
