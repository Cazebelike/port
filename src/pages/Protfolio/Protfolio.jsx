import "./Protfolio.css";

import Card from "../../UI/Card";
import HeadingText from "../../components/HeadingText/HeadingText";
import Testimonials from "../../components/Testimonials/Testimonials";

import { portfolio } from "../../data/Data";

export default function Protfolio() {
  return (
    <>
      <section className="portfolio">
        <HeadingText title={"Resent"} titlePrimary={"Work"} />
        <div className="container portfolio-container">
          {portfolio.map(({ id, img, name, des, github }) => {
            return (
              <Card classname={"project"} key={id}>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p>{des}</p>
                <a href={github}>Link</a>
              </Card>
            );
          })}
        </div>
      </section>
      <Testimonials />
    </>
  );
}
