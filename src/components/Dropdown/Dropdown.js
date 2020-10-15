import React, { useState } from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";
import { MenuItems } from "../MenuItems/MenuItems";

const Dropdown = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {MenuItems.map(({cName, title, path, index}) => {
          return (
            <li key={index}>
              <Link
                className={cName}
                to={path}
                onClick={() => setClick(false)}
              />
              {title}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
