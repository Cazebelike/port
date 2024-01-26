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
              <h5>Миний танилцуулага</h5>
              Намайг Батжаргалын Энхтүвшин гэдэг Би 2003.06.27 нд Өмнөговь
              аймгийн Гурвантэс сум д төрсөн. 2021 онд ЕБС-ийг төгсөж
              Улаанбаатар их сургуульд элсэж 2023 онд гарч Indra Instutent элсэж
              одоогоор суралцаж байна.
            </p>
            <p>
              <h5>Миний Хобби</h5>
              Сагсан бөмбөг, Гар бөмбөг, Badminton, Ширээний теннис, Ном унших,
              Хөл бөмбөг
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
