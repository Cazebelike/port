import "./Nav.css";

import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { navLinks } from "../../data/Data";

import { useState } from "react";
export default function Nav() {
  const [showmenu, setShowmenu] = useState(false);
  let MenuHandler = () => {
    setShowmenu(!showmenu);
  };
  return (
    <nav>
      <ul className={`${showmenu ? "navLinks navLinks-show" : "navLinks"}`}>
        {navLinks.map(({ id, name, path, icon }) => {
          return (
            <li className="nav-item" key={id}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? "nav-Link navlinksActive" : "nav-Link"
                }
              >
                <span>
                  <FontAwesomeIcon icon={icon} />
                </span>
                <h3>{name}</h3>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div
        className={`${showmenu ? "nav-toggle nav-close" : "nav-toggle"}`}
        onClick={MenuHandler}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
