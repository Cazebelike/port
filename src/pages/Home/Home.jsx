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
            <span>Hello , I'm Cazezeneo</span> <br />
            <h3>FrondEnd Developer, Student</h3>
          </h1>

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
