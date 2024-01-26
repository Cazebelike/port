import {
  faHome,
  faEnvelope,
  faUserGraduate,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";

export const navLinks = [
  {
    id: 1,
    name: "Home",
    icon: faHome,
    path: "/",
  },
  {
    id: 2,
    name: `About`,
    icon: faUserGraduate,
    path: "/About",
  },
  {
    id: 3,
    name: "Portfolio",
    icon: faFolder,
    path: "/portfolio",
  },
  {
    id: 4,
    name: "Contact",
    icon: faEnvelope,
    path: "/Contact",
  },
];

export const experience = [
  {
    id: 1,
    no: "2+",
    title: "Years Students",
  },
  {
    id: 2,
    no: "5+",
    title: "Complete Projects",
  },
  {
    id: 3,
    no: "0",
    title: "Clintes",
  },
];

import image1 from "../../src/assets/python.svg";
import image2 from "../../src/assets/react.svg";
import image3 from "../../src/assets/javascript.svg";
import image4 from "../../src/assets/figma.svg";
import image5 from "../../src/assets/djangoproject.svg";
import image6 from "../../src/assets/nodejs.svg";
export const tools = [
  {
    id: 1,
    img: image1,
  },
  {
    id: 2,
    img: image2,
  },
  {
    id: 3,
    img: image3,
  },
  {
    id: 4,
    img: image4,
  },
  {
    id: 5,
    img: image5,
  },
  {
    id: 6,
    img: image6,
  },
];

import {
  faCodeBranch,
  faCode,
  faCodeCompare,
} from "@fortawesome/free-solid-svg-icons";
export const services = [
  {
    id: 1,
    icon: faCode,
    name: "Web Development",
    des: "Web developers create functional, user-friendly websites and web applications. They may write code, develop and test new applications, or monitor site performance and traffic. Front-end developers focus on the user-facing side of their work, while back-end developers make websites functional and secure.",
  },
  {
    id: 2,
    icon: faCodeBranch,
    name: "Apps Development",
    des: "Mobile app development is the act or process by which a mobile app is developed for one or more mobile devices, which can include personal digital assistants (PDA), enterprise digital assistants (EDA), or mobile phones.",
  },
  {
    id: 3,
    icon: faCodeCompare,
    name: "Javascript Customize",
    des: "JavaScript (/ˈdʒɑːvəskrɪpt/), often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS.",
  },
];

import protfoliImg1 from "../../src/assets/p1.jpg";
import protfoliImg2 from "../../src/assets/lovepik-computer-in-computer-room-picture_500986705.jpg";
import protfoliImg3 from "../../src/assets/p3.jpg";
export const portfolio = [
  {
    id: 1,
    img: protfoliImg1,
    name: "Project-1",
    des: "Javascript ",
    github: "http://127.0.0.1:5500/home.html",
  },
  {
    id: 1,
    img: protfoliImg2,
    name: "Project-2",
    des: "django",
    github: "http://127.0.0.1:8000/",
  },
  {
    id: 1,
    img: protfoliImg3,
    name: "Project-3",
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis iusto nulla exercitationem",
    github: "#",
  },
];

import avatar1 from "../../src/assets/avatar1.png";
import avatar2 from "../../src/assets/avatar2.png";
import avatar3 from "../../src/assets/avatar3.png";
import avatar4 from "../../src/assets/avatar4.png";
export const testimonials = [
  {
    id: 1,
    img: avatar1,
    name: "С.Дөлгөөн",
    des: " Заасан хичээлүүд:Javascript , React , NodeJs , HTML&CSS ",
  },
  {
    id: 2,
    img: avatar2,
    name: "Э.Дөлгөөн",
    des: "Заасан хичээлүүд:Python , Django , UIUX  ",
  },
  // {
  //   id: 3,
  //   img: avatar3,
  //   name: "Jhon Alas",
  //   des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis iusto nulla exercitationem architecto sunt sint quis ipsam odio neque.",
  // },
  // {
  //   id: 4,
  //   img: avatar4,
  //   name: "Irfan Nazir",
  //   des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis iusto nulla exercitationem architecto sunt sint quis ipsam odio neque.",
  // },
];
