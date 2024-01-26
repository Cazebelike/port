import "./Home.css";
import HeaderImage from "../../assets/channels4_profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  return (
    <header>
      <div className="container container-lg header-container">
        <img src={HeaderImage} alt="" />

        <div className="header-rigth">
          <h1>
            <span>Hi , Im Cazezeneo</span> <br />
            Student
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            optio provident debitis numquam fugiat! Eum alias expedita aperiam
            quam necessitatibus a ad fuga quidem nostrum voluptatibus amet
            doloribus, tempore eos officia fugit! Repellendus, pariatur error.
          </p>
          <br />
          <br />
          <Link className="btn" to={"/about"}>
            About me
            <span>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
