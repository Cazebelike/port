import "./Contact.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import HeadingText from "../../components/HeadingText/HeadingText";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <>
      <section>
        <HeadingText title={"Contact"} titlePrimary={"Me"} />
        <div className="container .contact-container">
          <form action="#">
            <input type="text" required placeholder="Your Name" />
            <input type="email" required placeholder="Your Email" />
            <input type="number" required placeholder="Your Number" />
            <input
              type="message"
              style={{ height: "100px" }}
              required
              placeholder="Your Message"
            ></input>
            <button type="submit" className="btnnn">
              Send
              <span>
                <FontAwesomeIcon icon={faPaperPlane} />
              </span>
            </button>
          </form>
        </div>
      </section>
      <footer>Copyrigth All Right Reserved || @Candycode. Youtube</footer>
    </>
  );
}
