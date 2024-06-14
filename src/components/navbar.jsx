import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="navbar bg-light navbar-expand-lg navbar-custom text-black">
        <div className="container">
          <Link to="/" className="navbar-brand text-black">
            {" "}
            <img
              className="img"
              src="https://cdn-icons-gif.flaticon.com/16059/16059823.gif"
            ></img>
            <span className="title rock-salt-regular">
              Try my Quiz Out!{" "}
              <i className="fa-solid fa-file-pen fa-bounce"></i>
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav ms-auto major-mono-display-regular ">
              <Link to="/" className="nav-link text-black">
                <i className="fa-solid fa-home"></i>
                <span>Home</span>/
              </Link>
              <span className="nav-link text-black">
                <Link
                  to="/about"
                  className="text-decoration-none text-black"
                  style={{ fontWeight: "bold" }}
                >
                  <span>About</span>
                  <i className="fa-solid fa-circle-info"></i>
                </Link>
                /
              </span>
              <Link to="/contact" className="nav-link text-black">
                <i className="fa-regular fa-contact-card"></i>
                <span>Contact Me</span>/
              </Link>
              <Link
                to="https://github.com/ericlkm"
                target="_blank"
                className="nav-link text-black"
              >
                <span>
                  My Github <i className="fa-brands fa-github fa-beat"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
