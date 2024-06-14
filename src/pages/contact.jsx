function Contact() {
  return (
    <>
      <h1 className="major-mono-display-regular text-center text-white">
        Contact Us
      </h1>
      <div className="line"></div>

      <div class="contact-form">
        <h2>Get in Touch</h2>
        <form>
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button type="submit" class="btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
