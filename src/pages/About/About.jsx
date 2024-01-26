import "./About.css";
import CV from "../../assets/CV.pdf";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import HeadingText from "../../components/HeadingText/HeadingText";
import { experience } from "../../data/Data";
import Tools from "../../components/Tools/Tools";
import { Service } from "../../components/Service/Service";

import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Card from "../../UI/Card";
import Protfolio from "../Protfolio/Protfolio";
export default function About() {
  return (
    <>
      <section className="About">
        <HeadingText title={"About"} titlePrimary={"Me"} />
        <div className="container about-container">
          <div className="about-left">
            <h3> I'm Cazezeneo</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              dicta aspernatur possimus magnam inventore architecto. Qui hic
              aliquid nulla, odio minus inventore quisquam perspiciatis iure
              porro commodi labore esse non quod, assumenda laboriosam, odit
              deleniti maxime voluptate iste praesentium voluptatibus?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              odit quaerat facere aliquam placeat. Quaerat blanditiis
              cupiditate, culpa ea tempora illo, consequuntur assumenda autem
              atque quam quidem, maiores distinctio incidunt.
            </p>
            <br />
            <a href={CV} download className="btn">
              Download CV
              <span>
                <FontAwesomeIcon icon={faDownload} />
              </span>
            </a>
          </div>

          <div className="about-rigth">
            {experience.map(({ id, no, title }) => {
              return (
                <Card key={id} classname={"expernce-card"}>
                  <h1>
                    <span>{no}</span>
                  </h1>
                  <p>{title}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      <Tools />
      <Service />
    </>
  );
}
