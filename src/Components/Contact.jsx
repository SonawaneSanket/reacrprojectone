import React from "react";

function Contact() {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>
        <form action="">
          <div>
            <label>Name</label>
            <input type="text" required placeholder="Type Name " />
          </div>
          <div>
            <label>Email</label>
            <input type="email" required placeholder="Type Email " />
          </div>
          <div>
            <label>Message Us</label>
            <input type="text" required placeholder="Type your query here" />
          </div>
          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
}

export default Contact;
