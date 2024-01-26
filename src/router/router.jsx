import { BrowserRouter, Routes, Route } from "react-router-dom";
// imports pages
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Portfolio from "../pages/Protfolio/Protfolio";
import Contact from "../pages/Contact/Contact";
// imports components
import Nav from "../components/Nav/Nav";
import Theme from "../components/Theme/Theme";
export default function router() {
  return (
    <BrowserRouter>
      <Nav />
      <Theme />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
