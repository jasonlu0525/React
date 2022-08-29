import {Link } from "react-router-dom";
export default function() {
    return (
      <>
        <main>
          <h2>Welcome to the homepage!</h2>
          <p>You can do this, I believe in you.</p>
        </main>
        <nav>
          <Link to="about/">About</Link>
          <Link to="faq">faq</Link>
        </nav>
      </>
    );
  }