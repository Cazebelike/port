import "./Service.css";

import Card from "../../UI/Card";
import HeadingText from "../HeadingText/HeadingText";

import { services } from "../../data/Data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Service = () => {
  return (
    <section className="service">
      <HeadingText title={"What I"} titlePrimary={"offer"} />
      <div className="container service-container">
        {services.map(({ id, icon, name, des }) => {
          return (
            <Card key={id} classname={"services-card"}>
              <span>
                <FontAwesomeIcon icon={icon} />
                <h3>{name}</h3>
                <p>{des}</p>
              </span>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
