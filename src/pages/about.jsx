function About() {
  return (
    <>
      <div className="container about-page">
        <div className="row">
          <div className="col-sm-12">
            <h1
              className="major-mono-display-regular"
              style={{ fontSize: "3rem", marginBottom: "2rem" }}
            >
              About
            </h1>
            <p
              className="major-mono-display-regular"
              style={{ fontSize: "1.2rem", lineHeight: "1.5" }}
            >
              This is a quiz game developed for educational and entertainment
              purposes. It is designed to test your knowledge on various topics
              in a fun and engaging way. The game features multiple-choice
              questions with varying difficulty levels, allowing you to
              challenge yourself and learn new things along the way.
            </p>
            <p
              className="major-mono-display-regular"
              style={{ fontSize: "1.2rem", lineHeight: "1.5" }}
            >
              The quiz game is built using modern web technologies, including
              React.js, to provide a smooth and responsive user experience. It
              is designed to be accessible on various devices, including
              desktops, tablets, and smartphones.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
